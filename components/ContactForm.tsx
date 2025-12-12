/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { FormEvent, useState, useTransition } from "react";

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

  const updateField = (key: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!res.ok) {
          throw new Error("Failed to send message");
        }

        setForm({ name: "", email: "", company: "", message: "" });
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
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

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Response within one business day.</p>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
