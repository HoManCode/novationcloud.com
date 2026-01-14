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
  title: "NovationCloud | Cloud & DevOps Consulting",
  description:
    "NovationCloud delivers expert cloud migration, DevOps automation, and application modernisation for teams in Australia and worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NovationCloud",
    description:
      "Cloud, DevOps & modernisation consulting built by real engineers, serving Australia and global teams.",
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
      "Cloud migration, DevOps automation and application modernisation consultancy serving Australia first and global customers.",
    url: "https://novationcloud.com",
    logo: "https://novationcloud.com/novationcloud-logo.svg",
    areaServed: ["Australia", "Global"],
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
