import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Cloud, DevOps & Modernisation Consulting | NovationCloud",
  description:
    "Cloud migration, DevOps automation, and application modernisation for teams in Australia and worldwide. Book a consultation with NovationCloud engineers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cloud, DevOps & Modernisation Consulting | NovationCloud",
    description:
      "Cloud migration, DevOps automation, and application modernisation for Australia-first and global teams.",
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
