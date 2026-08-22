import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-display text-aqua text-sm tracking-[0.3em] uppercase mb-6">
          Page not found
        </p>
        <h1 className="font-display text-6xl md:text-7xl mb-6">404</h1>
        <p className="text-white/70 mb-10 leading-relaxed">
          This page didn&apos;t make the appointment. Let&apos;s get you back
          to somewhere your smile can be seen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 rounded-xl2 bg-white text-navy font-medium hover:bg-white/90 transition-colors"
          >
            Back Home
          </Link>
          <Link
            href="/#booking"
            className="px-8 py-4 rounded-xl2 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </main>
  );
}
