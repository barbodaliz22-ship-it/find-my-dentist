"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false });

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-navy"
    >
      {/* 3D floating dental forms */}
      <div className="absolute inset-0 opacity-90">
        <HeroScene />
      </div>

      {/* Portrait */}
      <div className="absolute inset-0 flex items-end justify-center md:justify-end">
        <div className="relative w-full max-w-[560px] h-[78%] md:mr-16">
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
            alt="Confident young woman smiling naturally while taking a bite of an apple"
            fill
            priority
            className="object-cover object-top rounded-t-xl2"
            sizes="(max-width: 768px) 100vw, 560px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/20 to-navy/80" />

      {/* Copy */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-10 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-aqua text-sm tracking-[0.35em] uppercase mb-6 font-medium"
        >
          Austin, Texas — 600 Congress Ave
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] max-w-3xl text-balance"
        >
          A confident smile
          <br />
          starts here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="text-white/70 text-lg mt-8 max-w-md leading-relaxed"
        >
          Luxury dental care built around modern comfort, digital precision,
          and a team that treats your smile like a craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link
            href="/#booking"
            className="px-8 py-4 rounded-xl2 bg-white text-navy font-medium hover:bg-white/90 transition-colors"
          >
            Book Appointment
          </Link>
          <Link
            href="/#services"
            className="px-8 py-4 rounded-xl2 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-[0.25em] uppercase">Scroll</span>
        <span className="h-8 w-px bg-white/30" />
      </motion.div>
    </section>
  );
}
