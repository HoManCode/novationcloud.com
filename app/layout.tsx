import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://novationcloud.com"),
  title: "NovationCloud | Melbourne Cloud, AI Automation & App Development",
  description:
    "Melbourne-based NovationCloud delivers AI automation service, web and mobile app development, app modernisation, and cloud optimisation across Australia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NovationCloud",
    description:
      "Melbourne cloud, AI automation, app development, modernisation and optimisation consulting for Australian businesses.",
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
    "@type": "ProfessionalService",
    name: "NovationCloud",
    description:
      "Melbourne-based AI automation, app development, app modernisation and cloud optimisation consultancy serving businesses across Australia.",
    url: "https://novationcloud.com",
    logo: "https://novationcloud.com/novationcloud-logo.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: ["Melbourne", "Victoria", "Australia"],
    serviceType: "IT Consulting",
    knowsAbout: [
      "AI automation service",
      "Web & Mobile app development",
      "App Modernisation",
      "Cloud Optimisation",
    ],
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
        {cfBeaconToken ? (
          // Cloudflare Web Analytics
          <Script
            id="cf-web-analytics"
            strategy="afterInteractive"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token":"${cfBeaconToken}"}`}
          />
        ) : null}
      </body>
    </html>
  );
}
