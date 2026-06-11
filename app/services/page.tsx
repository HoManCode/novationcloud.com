import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Melbourne AI Automation, App Development & Cloud Services | NovationCloud",
  description:
    "AI automation service, web and mobile app development, app modernisation, and cloud optimisation from Melbourne for businesses across Australia.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Melbourne AI Automation, App Development & Cloud Services | NovationCloud",
    description:
      "Melbourne-based software, AI automation, modernisation and cloud optimisation services for Australian businesses.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-lightBg text-black min-h-screen py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">

      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Services</h1>

      <p className="text-gray-600 max-w-xl mb-8 sm:mb-10 text-sm sm:text-base">
        Melbourne-based engineering services for Australian businesses that need
        practical automation, reliable applications and lower cloud operating costs.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            href={`/blog/${service.slug}`}
          />
        ))}
      </div>
    </main>
  );
}

function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <Link
        href={href}
        className="inline-block mt-4 text-sm font-semibold text-blue-700 hover:text-blue-900"
      >
        Read the service guide
      </Link>
    </div>
  );
}
