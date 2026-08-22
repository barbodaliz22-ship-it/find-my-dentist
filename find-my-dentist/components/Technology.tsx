"use client";

import { useReveal } from "@/lib/useReveal";

const items = [
  {
    title: "Digital Dentistry",
    text: "Full digital scans replace messy impressions and speed up every treatment plan.",
  },
  {
    title: "Advanced Technology",
    text: "3D-guided implant placement and intraoral imaging for millimeter precision.",
  },
  {
    title: "Modern Equipment",
    text: "Continuously updated instruments chosen for accuracy and patient comfort.",
  },
  {
    title: "Comfortable Treatment",
    text: "Quiet, ergonomic treatment rooms designed to lower anxiety, not just treat teeth.",
  },
];

function BeamCard({ title, text, delay }: { title: string; text: string; delay: number }) {
  return (
    <div
      className="reveal group relative rounded-xl2 bg-navy p-8 overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl2 [mask:linear-gradient(#fff,#fff)_content-box,linear-gradient(#fff,#fff)] [mask-composite:exclude] p-px">
        <div className="absolute inset-0 rounded-xl2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,transparent_0deg,#14B8A6_60deg,transparent_120deg)] animate-[spin_3s_linear_infinite]" />
      </div>
      <h3 className="relative font-display text-xl text-white mb-3">{title}</h3>
      <p className="relative text-white/55 text-sm leading-relaxed">{text}</p>
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
            <BeamCard key={it.title} title={it.title} text={it.text} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
