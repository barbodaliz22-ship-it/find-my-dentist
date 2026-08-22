"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqCategories } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export default function FAQ() {
  const [cat, setCat] = useState(faqCategories[0].id);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();

  const active = faqCategories.find((c) => c.id === cat)!;

  return (
    <section className="py-28 md:py-36 px-6 md:px-10 bg-white">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-aqua text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            FAQ
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-navy text-balance">
            Questions, answered
          </h2>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setCat(c.id);
                setOpenIdx(0);
              }}
              className={`px-5 py-2.5 rounded-xl2 text-sm font-medium transition-colors ${
                cat === c.id
                  ? "bg-navy text-white"
                  : "bg-offwhite text-ink/60 hover:text-navy"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="reveal space-y-3">
          {active.items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={item.q}
                className="border border-navy/10 rounded-xl2 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-navy">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-navy/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 overflow-hidden"
                    >
                      <p className="text-ink/60 leading-relaxed pb-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
