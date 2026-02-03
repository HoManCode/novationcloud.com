import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact NovationCloud | Web Development & IT Support",
  description:
    "Contact NovationCloud for web development, cloud engineering, and business IT support. Specialising in React, .NET, AWS, APIs, and system modernisation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NovationCloud",
    description:
      "Discuss web development, cloud solutions, and IT support with NovationCloud. Australia-based, supporting businesses nationwide.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-lightBg text-black py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
        Let’s Talk
      </h1>

      <p className="text-gray-600 mb-8 max-w-2xl text-sm sm:text-base">
        Need a new website, help maintaining an existing system, or support with
        cloud and backend services? Get in touch to discuss your requirements and
        timelines.
      </p>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
        {/* Left: Contact + Phone */}
        <div>
          <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-600 mb-1">
              Prefer to talk directly?
            </p>
            <a
              href="tel:+61469354013"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              📞 0469 354 013
            </a>
            <p className="text-xs text-gray-500 mt-1">
              Business hours · Australia (AEST)
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Right: Services */}
        <div className="text-gray-700 text-sm sm:text-base">
          <h3 className="font-bold mb-3">How I can help</h3>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Website & Web App Development</strong> — React, Next.js,
              ASP.NET, modern responsive UI
            </li>
            <li>
              <strong>Backend & API Development</strong> — REST APIs, .NET,
              Node.js, SQL & NoSQL databases
            </li>
            <li>
              <strong>Cloud Engineering</strong> — AWS services, deployments,
              infrastructure and cost optimisation
            </li>
            <li>
              <strong>System Modernisation</strong> — improving or replacing
              legacy applications
            </li>
            <li>
              <strong>DevOps & CI/CD</strong> — build pipelines, automation,
              Git-based workflows
            </li>
            <li>
              <strong>Ongoing IT Support</strong> — maintenance, fixes, and
              technical advice for growing businesses
            </li>
          </ul>

          <p className="mt-6 text-gray-600">
            Experience delivering software in regulated and enterprise
            environments, including government and financial services.
          </p>
        </div>
      </div>
    </main>
  );
}