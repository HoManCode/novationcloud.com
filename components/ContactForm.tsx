/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { FormEvent, useEffect, useRef, useState, useTransition } from "react";

declare global {
  interface Window {
    turnstile?: {
      reset: (widgetId?: string) => void;
    };
    onTurnstileSuccess?: (token: string) => void;
    onTurnstileError?: () => void;
    onTurnstileExpire?: () => void;
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const scriptLoaded = useRef(false);

  const updateField = (key: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      setCaptchaError("Captcha is not configured.");
      return;
    }

    if (!scriptLoaded.current) {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.dataset.turnstile = "true";
        document.head.appendChild(script);
      }

      scriptLoaded.current = true;
    }

    window.onTurnstileSuccess = (token: string) => {
      setCaptchaToken(token);
      setCaptchaError("");
    };

    window.onTurnstileError = () => {
      setCaptchaToken("");
      setCaptchaError("Captcha failed. Please try again.");
    };

    window.onTurnstileExpire = () => {
      setCaptchaToken("");
    };

    return () => {
      delete window.onTurnstileSuccess;
      delete window.onTurnstileError;
      delete window.onTurnstileExpire;
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setError("");

    if (!TURNSTILE_SITE_KEY) {
      setError("Captcha is not set up. Please try again later.");
      return;
    }

    if (!captchaToken) {
      setError("Please complete the captcha to continue.");
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, captchaToken }),
        });

        if (!res.ok) {
          throw new Error("Failed to send message");
        }

        setForm({ name: "", email: "", company: "", message: "" });
        setStatus("success");
        setCaptchaToken("");
        window.turnstile?.reset();
      } catch (err) {
        console.error(err);
        setStatus("error");
        setError("Something went wrong. Please try again.");
        window.turnstile?.reset();
      }
    });
  };

  const isSubmitDisabled =
    isPending || !TURNSTILE_SITE_KEY || !!captchaError || !captchaToken;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
          Name
          <input
            type="text"
            value={form.name}
            onChange={(e) => updateField("name")(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            placeholder="Jane Doe"
            required
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => updateField("email")(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            placeholder="you@company.com"
            required
          />
        </label>
      </div>

      <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
        Company (optional)
        <input
          type="text"
          value={form.company}
          onChange={(e) => updateField("company")(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          placeholder="Acme Corp"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
        Project details
        <textarea
          value={form.message}
          onChange={(e) => updateField("message")(e.target.value)}
          className="min-h-[140px] rounded-lg border border-gray-200 px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          placeholder="What do you need help with?"
          required
        />
      </label>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
        <div
          className="cf-turnstile"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-callback="onTurnstileSuccess"
          data-error-callback="onTurnstileError"
          data-expired-callback="onTurnstileExpire"
        />
        {captchaError && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {captchaError}
          </p>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-green-600" role="status">
          Thanks for reaching out! We will get back to you soon.
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-gray-500">Response within one business day.</p>
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full sm:w-auto rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
