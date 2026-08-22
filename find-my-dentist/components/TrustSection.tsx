"use client";

import { useReveal } from "@/lib/useReveal";
import { trustStats } from "@/lib/data";

export default function TrustSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative -mt-16 z-20 px-6 md:px-10">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {trustStats.map((s, i) => (
          <div
            key={s.label}
            className="reveal bg-white rounded-xl2 shadow-[0_20px_60px_rgba(11,31,58,0.08)] border border-navy/5 px-6 py-8 text-center"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <p className="font-display text-3xl md:text-4xl text-navy mb-1">
              {s.value}
            </p>
            <p className="text-ink/50 text-xs md:text-sm tracking-wide uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
