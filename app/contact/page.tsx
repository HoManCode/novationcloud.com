import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact NovationCloud | Cloud & DevOps Consultation",
  description:
    "Talk with NovationCloud about cloud migration, DevOps automation, and application modernisation. Australia-first focus, available worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NovationCloud",
    description:
      "Discuss cloud migration, DevOps automation, and modernisation with NovationCloud engineers, wherever you are.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-lightBg text-black py-16 px-6 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">Let's Talk</h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <p className="text-gray-600 mb-6">
            Share your challenges, timelines and goals. We’ll respond with a
            clear technical plan — no fluff.
          </p>
          <ContactForm />
        </div>

        <div className="text-gray-700">
          <h3 className="font-bold mb-2">Typical topics</h3>
          <ul className="list-disc list-inside">
            <li>AWS or Azure migration</li>
            <li>DevOps / CI/CD pipeline automation</li>
            <li>Legacy app modernisation</li>
            <li>Cloud optimisation and cost control</li>
          </ul>
        </div>

      </div>
    </main>
  );
}
