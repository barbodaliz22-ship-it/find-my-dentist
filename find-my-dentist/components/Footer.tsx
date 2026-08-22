import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-xl text-white mb-4">Find My Dentist</p>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A confident smile starts here. Luxury dental care in the heart of
            downtown Austin.
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
          <p className="text-white text-sm font-medium mb-4">About</p>
          <ul className="space-y-2 text-white/50 text-sm">
            <li><Link href="/#doctor" className="hover:text-white transition-colors">About Doctor</Link></li>
            <li><Link href="/#gallery" className="hover:text-white transition-colors">Smile Gallery</Link></li>
            <li><Link href="/#booking" className="hover:text-white transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-4">Contact</p>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>600 Congress Ave</li>
            <li>Austin, TX 78701</li>
            <li>(512) 555-0134</li>
            <li>Mon–Fri 8am–6pm</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-white/35 text-xs">
        <p>&copy; {new Date().getFullYear()} Find My Dentist. All rights reserved.</p>
        <p>600 Congress Ave, Austin, TX 78701</p>
      </div>
    </footer>
  );
}
