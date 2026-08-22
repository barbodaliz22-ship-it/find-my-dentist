"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Clock } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { services } from "@/lib/data";

export default function Booking() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your booking backend / email service.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.currentTarget.reset();
  }

  return (
    <section id="booking" className="relative py-28 md:py-36 px-6 md:px-10 bg-navy overflow-hidden">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative"
      >
        <div className="reveal">
          <p className="text-aqua text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Booking
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 text-balance">
            Ready for your confident smile?
          </h2>
          <p className="text-white/60 leading-relaxed mb-10 max-w-md">
            Schedule your consultation with our dental specialists — we&apos;ll
            confirm your appointment within one business day.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/80">
              <ShieldCheck size={20} className="text-aqua shrink-0" />
              <span className="text-sm">Secure &amp; confidential</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Clock size={20} className="text-aqua shrink-0" />
              <span className="text-sm">Quick response within 24 hours</span>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ animationDelay: "0.15s" }}>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl2 p-8 md:p-10 space-y-5 shadow-2xl"
          >
            <div>
              <label className="block text-xs font-medium text-ink/50 mb-2 uppercase tracking-wide">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-xl2 border border-navy/10 focus:border-aqua outline-none transition-colors"
                placeholder="Jane Doe"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-ink/50 mb-2 uppercase tracking-wide">
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl2 border border-navy/10 focus:border-aqua outline-none transition-colors"
                  placeholder="(512) 555-0134"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-ink/50 mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl2 border border-navy/10 focus:border-aqua outline-none transition-colors"
                  placeholder="jane@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-ink/50 mb-2 uppercase tracking-wide">
                  Treatment
                </label>
                <select
                  name="treatment"
                  className="w-full px-4 py-3 rounded-xl2 border border-navy/10 focus:border-aqua outline-none transition-colors bg-white"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-ink/50 mb-2 uppercase tracking-wide">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-4 py-3 rounded-xl2 border border-navy/10 focus:border-aqua outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-ink/50 mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-4 py-3 rounded-xl2 border border-navy/10 focus:border-aqua outline-none transition-colors resize-none"
                placeholder="Anything we should know before your visit?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl2 bg-navy text-white font-medium hover:bg-navy/90 transition-colors"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 left-1/2 z-[70] bg-white text-navy px-6 py-4 rounded-xl2 shadow-2xl flex items-center gap-3"
          >
            <ShieldCheck size={18} className="text-aqua" />
            <span className="text-sm font-medium">
              Your appointment request has been received.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
