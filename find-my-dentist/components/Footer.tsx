import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <p className="font-display text-xl text-white">Find My Dentist</p>
            <span className="rounded-full border border-aqua/30 bg-aqua/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-aqua">
              Concept Demo
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A premium dental website concept created to demonstrate a modern,
            patient-first digital experience.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="#" aria-label="Instagram" className="text-white/50 hover:text-aqua transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-white/50 hover:text-aqua transition-colors">
              <Facebook size={18} />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-4">Services</p>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>Cosmetic Dentistry</li>
            <li>Dental Implants</li>
            <li>Teeth Whitening</li>
            <li>Invisalign</li>
            <li>General Dentistry</li>
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-4">Explore</p>
          <ul className="space-y-2 text-white/50 text-sm">
            <li><Link href="/#doctor" className="hover:text-white transition-colors">About Doctor</Link></li>
            <li><Link href="/#gallery" className="hover:text-white transition-colors">Smile Gallery</Link></li>
            <li><Link href="/#booking" className="hover:text-white transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-4">Demo Details</p>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>Premium dental concept</li>
            <li>Patient-first UX</li>
            <li>Responsive by design</li>
            <li>Built for customization</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-white/35 text-xs">
        <p>&copy; {new Date().getFullYear()} Find My Dentist Concept. All rights reserved.</p>
        <p>Designed as a presentation concept · Customizable for any practice</p>
      </div>
    </footer>
  );
}
