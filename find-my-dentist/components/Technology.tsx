"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const items = [
  {
    title: "Digital Dentistry",
    text: "Full digital scans replace messy impressions and speed up every treatment plan.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Advanced Technology",
    text: "3D-guided implant placement and intraoral imaging for millimeter precision.",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Modern Equipment",
    text: "Continuously updated instruments chosen for accuracy and patient comfort.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Comfortable Treatment",
    text: "Quiet, ergonomic treatment rooms designed to lower anxiety, not just treat teeth.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
  },
];

function BeamCard({
  title,
  text,
  image,
  delay,
}: {
  title: string;
  text: string;
  image: string;
  delay: number;
}) {
  return (
    <div
      className="reveal group relative min-h-[330px] rounded-xl2 overflow-hidden bg-navy"
      style={{ animationDelay: `${delay}s` }}
    >
      <Image
        src={image}
        alt={`${title} in a modern dental clinic`}
        fill
        className="object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10" />
      <div className="pointer-events-none absolute inset-0 rounded-xl2 border border-white/10" />
      <div className="absolute inset-x-0 bottom-0 p-8">
        <h3 className="font-display text-xl text-white mb-3">{title}</h3>
        <p className="text-white/65 text-sm leading-relaxed max-w-md">{text}</p>
      </div>
      <div className="absolute top-5 right-5 h-9 w-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export default function Technology() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-28 md:py-36 px-6 md:px-10 bg-navy">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="reveal max-w-xl mb-16">
          <p className="text-aqua text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Technology
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white text-balance">
            Precision, built in
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <BeamCard
              key={it.title}
              title={it.title}
              text={it.text}
              image={it.image}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
