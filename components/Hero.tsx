import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <Image
            src="/novationcloud-icon.png"
            alt="NovationCloud"
            width={180}
            height={40}
            className="mb-8"
          />

          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
            Cloud · DevOps · Software
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Accelerating{" "}
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              cloud transformation
            </span>{" "}
            with engineering excellence.
          </h1>

          <p className="text-gray-300 max-w-md mb-6">
            We help teams migrate, modernise and operate cloud workloads with
            automation, reliability and security.
          </p>

          <div className="flex gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:brightness-110"
            >
              Book consultation
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>

        <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
          <h2 className="text-sm text-gray-300 mb-4">
            Why teams work with NovationCloud
          </h2>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <strong className="text-lg text-white block">40% faster</strong>
              <span className="text-gray-400 text-xs">delivery cycles</span>
            </div>
            <div>
              <strong className="text-lg text-white block">99.9% uptime</strong>
              <span className="text-gray-400 text-xs">architectures</span>
            </div>
            <div>
              <strong className="text-lg text-white block">Cloud-native</strong>
              <span className="text-gray-400 text-xs">solutions</span>
            </div>
            <div>
              <strong className="text-lg text-white block">Engineering-first</strong>
              <span className="text-gray-400 text-xs">approach</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
