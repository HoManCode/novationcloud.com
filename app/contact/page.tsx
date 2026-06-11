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
      Ready to transform your business with AI? Whether you need workflow automation, a custom AI chatbot, website development, 
      or cloud cost optimisation, we provide practical solutions tailored to your needs. Based in Melbourne and working with clients 
      Australia-wide, we're here to help bring your ideas to life.
      </p>

      <div className="max-w-2xl">
        <ContactForm />
      </div>
    </main>
  );
}
