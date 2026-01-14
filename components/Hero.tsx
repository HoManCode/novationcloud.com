import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 sm:py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">

        <div>
          <Image
            src="/novationcloud-icon.png"
            alt="NovationCloud"
            width={180}
            height={40}
            className="mb-6 sm:mb-8 w-32 sm:w-44 h-auto"
          />

          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-3 sm:mb-4">
            Cloud · DevOps · Software
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4">
            Accelerating{" "}
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              cloud transformation
            </span>{" "}
            with engineering excellence.
          </h1>

          <p className="text-gray-300 max-w-md mb-6 text-sm sm:text-base">
            We help teams migrate, modernise and operate cloud workloads with
            automation, reliability and security.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-center text-sm sm:text-base"
            >
              Book consultation
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-center text-sm sm:text-base"
            >
              View services
            </Link>
          </div>
        </div>

        <div className="p-5 sm:p-6 bg-black/40 border border-white/10 rounded-2xl">
          <h2 className="text-sm text-gray-300 mb-4">
            Why teams work with NovationCloud
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 text-sm">
            <div>
              <strong className="text-base sm:text-lg text-white block">40% faster</strong>
              <span className="text-gray-400 text-xs">delivery cycles</span>
            </div>
            <div>
              <strong className="text-base sm:text-lg text-white block">99.9% uptime</strong>
              <span className="text-gray-400 text-xs">architectures</span>
            </div>
            <div>
              <strong className="text-base sm:text-lg text-white block">Cloud-native</strong>
              <span className="text-gray-400 text-xs">solutions</span>
            </div>
            <div>
              <strong className="text-base sm:text-lg text-white block">Engineering-first</strong>
              <span className="text-gray-400 text-xs">approach</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
