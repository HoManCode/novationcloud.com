import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-7">
              <Image
                src="/new-logo.jpeg"
                alt="NovationCloud"
                width={64}
                height={64}
                className="w-14 h-14 rounded-xl object-cover border border-white/10"
                priority
              />
              <div>
                <p className="text-sm font-semibold text-white">NovationCloud</p>
                <p className="text-xs text-gray-400">
                  Smarter Operations Through AI and Cloud
                </p>
              </div>
            </div>

            <p className="text-xs uppercase tracking-[0.18em] text-blue-400 mb-4">
              AI Automation · App Development · Cloud Optimisation
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5 max-w-3xl">
              Build smarter software and automate the work that slows you down.
            </h1>

            <p className="text-gray-300 max-w-2xl mb-7 text-base sm:text-lg leading-8">
              We help Australian businesses design reliable web and mobile apps,
              modernise legacy systems, automate customer and internal workflows,
              and reduce cloud costs with practical engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 text-center text-sm sm:text-base font-semibold"
              >
                Book consultation
              </Link>

              <Link
                href="/services"
                className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-center text-sm sm:text-base font-semibold"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-blue-300 mb-4">
                Services
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <ServiceLink
                  href="/blog/ai-automation-service-melbourne"
                  title="AI automation"
                  description="Chatbots, workflow automation and system integrations."
                />
                <ServiceLink
                  href="/blog/web-mobile-app-development-melbourne"
                  title="Web & mobile apps"
                  description="Secure, scalable applications for business operations."
                />
                <ServiceLink
                  href="/blog/app-modernisation-australia"
                  title="App modernisation"
                  description="Refactor legacy systems and improve reliability."
                />
                <ServiceLink
                  href="/blog/cloud-optimisation-australia"
                  title="Cloud optimisation"
                  description="Reduce spend and remove infrastructure bottlenecks."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <strong className="text-lg text-white block">Melbourne</strong>
                <span className="text-gray-400 text-sm">local base</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <strong className="text-lg text-white block">Australia-wide</strong>
                <span className="text-gray-400 text-sm">remote delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-white/10 bg-black/30 p-4 hover:bg-white/10 transition"
    >
      <h2 className="text-base font-semibold text-white mb-2">{title}</h2>
      <p className="text-sm leading-6 text-gray-400">{description}</p>
    </Link>
  );
}
