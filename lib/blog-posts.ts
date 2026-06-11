import { services } from "@/lib/services";

export const blogPosts = [
  {
    service: services[0],
    title: "AI automation service for Melbourne businesses",
    description:
      "How a practical AI automation service helps Melbourne and Australian businesses reduce manual work, improve response times and connect everyday systems.",
    intro:
      "An AI automation service should solve specific operational problems, not add another disconnected tool. For Melbourne businesses and teams across Australia, the best starting point is usually a repeatable workflow that takes too much staff time, slows down customer service, or depends on copying information between systems.",
    sections: [
      {
        heading: "Where AI automation creates value",
        body: "Useful automation often starts with intake, triage, reporting, customer follow-up, document handling, internal approvals, CRM updates, or support workflows. The aim is to remove low-value manual effort while keeping people in control of decisions that need judgement.",
      },
      {
        heading: "What a good implementation includes",
        body: "A reliable AI automation service maps the current workflow, defines clear business rules, integrates with existing systems and adds monitoring so outcomes can be checked. This is especially important for Australian businesses that need dependable processes, privacy-aware handling and maintainable software.",
      },
      {
        heading: "Why work with a Melbourne-based team",
        body: "Local context helps when shaping workflows around Australian customers, time zones, compliance expectations and existing business systems. NovationCloud builds AI automation around practical engineering, secure integrations and measurable operational improvement.",
      },
    ],
    cta: "Talk to NovationCloud about an AI automation service for your Melbourne or Australia-wide business.",
  },
  {
    service: services[1],
    title: "Web & Mobile app development in Melbourne",
    description:
      "A guide to Web & Mobile app development for Australian businesses that need scalable, secure and maintainable applications.",
    intro:
      "Web & Mobile app development works best when the product is designed around the business process it supports. For Melbourne startups, growing companies and established Australian businesses, that means building applications that are secure, maintainable and ready to evolve as requirements change.",
    sections: [
      {
        heading: "Build for real business needs",
        body: "A strong application starts with clear workflows, user roles, data needs and integration points. Whether the project is a customer portal, internal operations platform, mobile app or API-backed product, the architecture should support the way the business actually works.",
      },
      {
        heading: "Security and maintainability matter early",
        body: "Modern Web & Mobile app development should include secure authentication, reliable APIs, clean deployment pipelines and practical monitoring. These foundations reduce rework and make it easier to add features without introducing avoidable risk.",
      },
      {
        heading: "Local delivery across Australia",
        body: "NovationCloud is based in Melbourne and works with businesses across Australia to design, build and improve web and mobile applications using pragmatic engineering practices and cloud-ready architecture.",
      },
    ],
    cta: "Discuss Web & Mobile app development for your Melbourne or Australia-wide project.",
  },
  {
    service: services[2],
    title: "App Modernisation for Australian businesses",
    description:
      "How App Modernisation helps Australian businesses refactor legacy systems, decompose monoliths and improve reliability.",
    intro:
      "App Modernisation is often the most practical path when a business-critical system still works but has become difficult to change. For Australian businesses, modernisation can reduce delivery risk, improve reliability and extend the life of valuable software without forcing a costly full rewrite.",
    sections: [
      {
        heading: "Modernise the parts that create friction",
        body: "The right approach usually starts by identifying the areas that slow releases, cause outages or block new features. That may involve refactoring, improving test coverage, extracting services from a monolith, replacing brittle integrations or moving workloads to a better cloud architecture.",
      },
      {
        heading: "Reduce risk while improving reliability",
        body: "A staged App Modernisation plan keeps the business running while technical debt is reduced. Better observability, deployment pipelines, database boundaries and API contracts can make systems easier to operate and safer to change.",
      },
      {
        heading: "Melbourne engineering support",
        body: "NovationCloud helps Melbourne and Australia-wide teams modernise legacy applications with a practical focus on reliability, maintainability and business continuity.",
      },
    ],
    cta: "Plan an App Modernisation roadmap for your Australian business.",
  },
  {
    service: services[3],
    title: "Cloud Optimisation in Australia",
    description:
      "Cloud Optimisation for Australian businesses that need to reduce cloud spend, right-size infrastructure and remove operational bottlenecks.",
    intro:
      "Cloud Optimisation is more than cutting bills. For Melbourne and Australian businesses, it is about understanding where cloud spend, reliability and operational effort are out of balance, then improving the infrastructure so it supports the business at the right cost.",
    sections: [
      {
        heading: "Find the real cost drivers",
        body: "Useful optimisation looks at compute sizing, storage growth, idle resources, networking, database usage, managed service configuration and deployment patterns. The goal is to reduce cloud spend without making systems fragile or difficult to operate.",
      },
      {
        heading: "Improve performance and operations",
        body: "Cloud Optimisation can also remove bottlenecks by improving scaling rules, observability, CI/CD workflows, environment design and incident response. Better operations often reduce both cost and delivery delays.",
      },
      {
        heading: "Australia-wide cloud support",
        body: "NovationCloud works from Melbourne with businesses across Australia to right-size infrastructure, improve AWS and cloud-native workloads, and build clearer operating practices.",
      },
    ],
    cta: "Review your Cloud Optimisation opportunities with NovationCloud.",
  },
] as const;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.service.slug === slug);
}
