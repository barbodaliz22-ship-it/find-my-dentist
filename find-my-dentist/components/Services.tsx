"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

const serviceImages: Record<string, string> = {
  cosmetic:
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1400&auto=format&fit=crop",
  implants:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1400&auto=format&fit=crop",
  whitening:
    "https://images.unsplash.com/photo-1606265752439-1f18756aa3f4?q=80&w=1400&auto=format&fit=crop",
  invisalign:
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1400&auto=format&fit=crop",
  general:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
};

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-10 bg-offwhite">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="reveal max-w-xl mb-16">
          <p className="text-aqua text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-navy text-balance">
            Care shaped around your smile
          </h2>
        </div>

        <div className="reveal flex flex-col md:flex-row gap-2 md:gap-3 rounded-xl2 bg-white p-2 md:p-3 shadow-[0_20px_60px_rgba(11,31,58,0.06)] border border-navy/5">
          {services.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`relative flex-1 text-left px-5 py-4 rounded-xl2 transition-colors duration-300 ${
                  isActive ? "text-white" : "text-ink/70 hover:text-navy"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="service-pill"
                    className="absolute inset-0 rounded-xl2 bg-navy"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  <span className="block text-sm font-medium">{s.title}</span>
                  <span className={`block text-xs mt-0.5 ${isActive ? "text-white/70" : "text-ink/40"}`}>
                    {s.short}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {services
            .filter((s) => s.id === active)
            .map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center bg-white rounded-xl2 p-6 md:p-10 border border-navy/5 overflow-hidden"
              >
                <div className="md:pl-2">
                  <h3 className="font-display text-3xl text-navy mb-4">{s.title}</h3>
                  <p className="text-ink/60 leading-relaxed mb-8">{s.description}</p>
                  <a
                    href="/#booking"
                    className="inline-flex px-6 py-3 rounded-xl2 bg-navy text-white text-sm font-medium hover:bg-navy/90 transition-colors"
                  >
                    Book Consultation
                  </a>
                </div>

                <div className="relative aspect-[4/3] rounded-xl2 overflow-hidden bg-navy">
                  <Image
                    src={serviceImages[s.id]}
                    alt={`${s.title} at a modern dental clinic`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-navy backdrop-blur-sm">
                      Modern care
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
