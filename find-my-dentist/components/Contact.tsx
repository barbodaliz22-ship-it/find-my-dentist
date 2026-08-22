"use client";

import { MapPin, Phone, Clock3 } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-10 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        <div className="reveal">
          <p className="text-aqua text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-navy mb-10 text-balance">
            Find us in downtown Austin
          </h2>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <MapPin size={22} className="text-aqua shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-navy">Find My Dentist</p>
                <p className="text-ink/60 text-sm">
                  600 Congress Ave, Austin, TX 78701
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={22} className="text-aqua shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-navy">(512) 555-0134</p>
                <p className="text-ink/60 text-sm">Mon–Sat, call or text</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock3 size={22} className="text-aqua shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-navy">Hours</p>
                <p className="text-ink/60 text-sm">
                  Mon–Fri 8am–6pm · Sat 9am–2pm · Sun Closed
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=600+Congress+Ave+Austin+TX+78701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 rounded-xl2 bg-navy text-white font-medium hover:bg-navy/90 transition-colors"
          >
            Get Directions
          </a>
        </div>

        <div className="reveal rounded-xl2 overflow-hidden border border-navy/10 min-h-[360px]" style={{ animationDelay: "0.15s" }}>
          <iframe
            title="Find My Dentist location map"
            className="w-full h-full min-h-[360px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=600+Congress+Ave,+Austin,+TX+78701&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
