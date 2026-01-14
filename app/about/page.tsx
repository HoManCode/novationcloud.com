import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NovationCloud | Engineering-led Cloud Consultancy",
  description:
    "Learn about NovationCloud: engineering-first cloud migration, DevOps automation, and modernisation consultancy serving Australia first and global customers.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About NovationCloud",
    description:
      "Engineering-first cloud migration, DevOps automation, and modernisation consultancy for Australia and worldwide.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">About NovationCloud</h1>

      <p className="text-gray-300 max-w-2xl mb-6 sm:mb-8 text-sm sm:text-base">
        NovationCloud is an engineering-led cloud consultancy that helps
        companies modernise their infrastructure, accelerate delivery and
        improve reliability without the complexity of large consultancies.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <AboutCard title="Engineering-first">
          We care about working systems, not PowerPoints and theory.
        </AboutCard>

        <AboutCard title="Pragmatic">
          We offer real-world, practical solutions — not hype-driven nonsense.
        </AboutCard>

        <AboutCard title="Senior Expertise">
          Hands-on cloud, DevOps and modernisation engineering experience.
        </AboutCard>
      </div>
    </main>
  );
}

function AboutCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-gray-300">
      <h2 className="font-bold mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
