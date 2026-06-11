export const services = [
  {
    title: "AI automation service",
    slug: "ai-automation-service-melbourne",
    description:
      "Practical AI automation service for Melbourne and Australian businesses that want to reduce manual work, connect systems, and improve customer workflows.",
    keywords: [
      "AI automation service",
      "AI automation service Melbourne",
      "business automation Australia",
      "AI workflow automation",
    ],
  },
  {
    title: "Web & Mobile app development",
    slug: "web-mobile-app-development-melbourne",
    description:
      "Building scalable, secure and maintainable applications tailored to your business needs.",
    keywords: [
      "Web & Mobile app development",
      "web app development Melbourne",
      "mobile app development Australia",
      "custom software development Melbourne",
    ],
  },
  {
    title: "App Modernisation",
    slug: "app-modernisation-australia",
    description:
      "Refactoring, decomposing monoliths and improving system reliability.",
    keywords: [
      "App Modernisation",
      "application modernisation Melbourne",
      "legacy app modernisation Australia",
      "monolith modernisation",
    ],
  },
  {
    title: "Cloud Optimisation",
    slug: "cloud-optimisation-australia",
    description:
      "Reduce cloud spend, right-size infrastructure and eliminate operational bottlenecks.",
    keywords: [
      "Cloud Optimisation",
      "cloud cost optimisation Australia",
      "AWS optimisation Melbourne",
      "cloud infrastructure optimisation",
    ],
  },
] as const;

export type Service = (typeof services)[number];
