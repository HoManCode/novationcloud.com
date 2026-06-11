import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Melbourne AI Automation, App Development & Cloud Consulting | NovationCloud",
  description:
    "Melbourne-based AI automation service, web and mobile app development, app modernisation, and cloud optimisation for businesses across Australia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Melbourne AI Automation, App Development & Cloud Consulting | NovationCloud",
    description:
      "AI automation service, app development, app modernisation and cloud optimisation for Australian businesses.",
    url: "/",
    images: [
      {
        url: "/og-novationcloud.png",
        width: 1200,
        height: 630,
        alt: "NovationCloud",
      },
    ],
  },
};

export default function HomePage() {
  return <Hero />;
}
