import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NovationCloud | Cloud & DevOps Consulting",
  description:
    "NovationCloud delivers expert cloud migration, DevOps automation, and application modernisation for businesses in Australia.",
  openGraph: {
    title: "NovationCloud",
    description:
      "Cloud, DevOps & modernisation consulting built by real engineers.",
    url: "https://novationcloud.com",
    siteName: "NovationCloud",
    images: [
      {
        url: "/og-novationcloud.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NovationCloud",
    description:
      "Cloud migration, DevOps automation and application modernisation consultancy based in Australia.",
    url: "https://novationcloud.com",
    logo: "https://novationcloud.com/novationcloud-logo.svg",
    areaServed: "Australia",
    serviceType: "IT Consulting",
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* SEO Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
