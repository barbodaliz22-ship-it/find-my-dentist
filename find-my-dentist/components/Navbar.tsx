"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Smile Gallery", href: "/#gallery" },
  { label: "About Doctor", href: "/#doctor" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-[0_8px_30px_rgba(11,31,58,0.06)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <Link
          href="/#home"
          className={`font-display text-xl tracking-tight transition-colors ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          Find My Dentist
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled ? "text-ink/80 hover:text-navy" : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#booking"
          className={`hidden md:inline-flex items-center px-6 py-2.5 rounded-xl2 text-sm font-medium transition-all ${
            scrolled
              ? "bg-navy text-white hover:bg-navy/90"
              : "bg-white/95 text-navy hover:bg-white"
          }`}
        >
          Book Appointment
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-nav border-t border-navy/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#booking"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-6 py-3 rounded-xl2 bg-navy text-white font-medium"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
