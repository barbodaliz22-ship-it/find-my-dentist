"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const cases = [
  {
    label: "Veneers, 6 Units",
    before:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=800&auto=format&fit=crop",
  },
  {
    label: "Invisalign, 11 Months",
    before:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800&auto=format&fit=crop",
  },
  {
    label: "Full Whitening",
    before:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=800&auto=format&fit=crop",
  },
];

export default function SmileGallery() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="py-28 md:py-36 px-6 md:px-10 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="reveal max-w-xl mb-16">
          <p className="text-aqua text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Smile Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-navy text-balance">
            Real transformations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.label}
              className="reveal group relative rounded-xl2 overflow-hidden aspect-[3/4]"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <Image
                src={c.before}
                alt={`Before ${c.label}`}
                fill
                className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Image
                src={c.after}
                alt={`After ${c.label}`}
                fill
                className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-6">
                <p className="text-white text-sm font-medium">{c.label}</p>
                <p className="text-white/60 text-xs mt-1 uppercase tracking-wide">
                  Hover to see after
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
