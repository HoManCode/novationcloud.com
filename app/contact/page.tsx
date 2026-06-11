import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact NovationCloud | Melbourne AI Automation & App Development",
  description:
    "Contact Melbourne-based NovationCloud for AI automation service, web and mobile app development, app modernisation, and cloud optimisation across Australia.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NovationCloud",
    description:
      "Discuss AI automation, app development, app modernisation and cloud optimisation with a Melbourne consultancy serving Australia.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark text-white py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
        Let’s Talk
      </h1>

      <p className="text-gray-300 mb-8 max-w-2xl text-sm sm:text-base">
        Need an AI automation service, a new app, help modernising an existing
        system, or support with cloud optimisation? Get in touch from Melbourne
        or anywhere in Australia to discuss your requirements and timelines.
      </p>

      <div className="max-w-2xl">
        <ContactForm />
      </div>
    </main>
  );
}
