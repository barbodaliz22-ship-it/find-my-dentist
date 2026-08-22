"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

export default function DoctorProfile() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="doctor" className="py-28 md:py-36 px-6 md:px-10 bg-white">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-center"
      >
        <div className="reveal relative">
          <div className="relative aspect-[4/5] rounded-xl2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
              alt="Portrait of the lead dentist at Find My Dentist"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-navy text-white rounded-xl2 px-6 py-5 shadow-xl hidden sm:block">
            <p className="font-display text-2xl">5,000+</p>
            <p className="text-white/60 text-xs uppercase tracking-wide">
              Smile Transformations
            </p>
          </div>
        </div>

        <div className="reveal" style={{ animationDelay: "0.15s" }}>
          <p className="text-aqua text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            About the Doctor
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-navy mb-3 text-balance">
            Dr. Elena Marsh, DDS
          </h2>
          <p className="text-ink/50 mb-8">
            Cosmetic &amp; Restorative Dentistry Specialist
          </p>

          <p className="text-ink/60 leading-relaxed mb-10 max-w-lg">
            With over fifteen years dedicated to cosmetic and restorative
            dentistry, Dr. Marsh combines an artist&apos;s eye with a
            precision-driven, digitally guided approach — treating every case
            as a unique smile design, not a routine procedure.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10 max-w-md">
            <div>
              <p className="font-display text-3xl text-navy">15+</p>
              <p className="text-ink/40 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl text-navy">Board</p>
              <p className="text-ink/40 text-sm">Certified, ABCD</p>
            </div>
          </div>

          <a
            href="/#booking"
            className="inline-flex px-8 py-4 rounded-xl2 bg-navy text-white font-medium hover:bg-navy/90 transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
