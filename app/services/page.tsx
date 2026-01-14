import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services | NovationCloud",
  description:
    "Cloud migration, DevOps automation, application modernisation, and cloud optimisation services for AWS and Azure — serving Australia and global teams.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Cloud & DevOps Services | NovationCloud",
    description:
      "Migration, DevOps automation, modernisation, and optimisation services for AWS and Azure, globally.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-lightBg text-black min-h-screen py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">

      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Services</h1>

      <p className="text-gray-600 max-w-xl mb-8 sm:mb-10 text-sm sm:text-base">
        We deliver practical engineering services that reduce risk, improve release
        velocity and enhance reliability.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <ServiceCard
          title="Cloud Migration"
          description="AWS/Azure landing zones, security baselines, and guided migration with minimal downtime."
        />
        <ServiceCard
          title="DevOps Automation"
          description="CI/CD pipelines, IaC, environment automation and developer productivity tooling."
        />
        <ServiceCard
          title="App Modernisation"
          description="Refactoring, decomposing monoliths and improving system reliability."
        />
        <ServiceCard
          title="Cloud Optimisation"
          description="Reduce cloud spend, right-size infrastructure and eliminate operational bottlenecks."
        />
      </div>
    </main>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
