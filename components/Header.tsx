import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/novationcloud-icon.png"
            alt="NovationCloud"
            width={32}
            height={32}
          />
          <span className="font-semibold text-sm tracking-wide">NovationCloud</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
