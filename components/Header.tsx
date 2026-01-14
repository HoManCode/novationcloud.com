"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-white/10 bg-dark/95">
          <div className="px-4 py-4 flex flex-col gap-4 text-sm text-gray-300">
            <Link href="/services" className="hover:text-white" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/about" className="hover:text-white" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
