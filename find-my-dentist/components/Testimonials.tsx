"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const ref = useReveal<HTMLDivElement>();

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const item = testimonials[index];

  return (
    <section className="py-28 md:py-36 px-6 md:px-10 bg-offwhite">
      <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
        <p className="text-aqua text-sm tracking-[0.3em] uppercase mb-4 font-medium">
          Patient Stories
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-navy mb-14">
          Loved, and it shows
        </h2>

        <div className="min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl2 border border-navy/5 shadow-[0_20px_60px_rgba(11,31,58,0.06)] p-10 md:p-12"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-aqua text-aqua" />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl text-navy leading-snug mb-8 text-balance">
                &ldquo;{item.review}&rdquo;
              </p>
              <div className="w-12 h-12 rounded-full bg-navy/10 mx-auto mb-3 flex items-center justify-center text-navy font-medium">
                {item.name.charAt(0)}
              </div>
              <p className="text-navy font-medium">{item.name}</p>
              <p className="text-ink/40 text-sm">{item.treatment}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-navy" : "w-1.5 bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
