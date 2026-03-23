"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/[0.06]">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="MySubscribe Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="hidden sm:block font-bold text-xl text-white">MySubscribe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/app/my-subscribe/id6757849924"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/assets/Download_on_the_App_Store_Badge_US.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
              />
            </a>
          </div>

          {/* Mobile: Get App pill + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://apps.apple.com/app/my-subscribe/id6757849924"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-gradient-to-r from-[#007AFF] to-[#0060DD] text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_10px_rgba(0,122,255,0.35)] hover:opacity-90 transition-opacity"
            >
              Get App
            </a>
            <button
              className="p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-4 bg-[#0D0D14] rounded-xl mt-3 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
