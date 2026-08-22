# Find My Dentist — Luxury Dental Clinic Website

A premium Next.js 14 (App Router) site for a fictional Austin, TX dental
studio, built as a client-ready template: Playfair Display + Inter type
system, navy/aqua luxury-healthcare palette, glass navbar, an R3F/Three.js
floating hero scene, Framer Motion micro-interactions, and every section
from the brief (trust bar, expandable services tabs, doctor profile,
border-beam technology cards, hover before/after gallery, rotating
testimonials, tabbed FAQ, a non-generic booking form with toast
confirmation, embedded map, and footer).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes for reuse on other dentist projects

- Swap copy, colors (`tailwind.config.ts`), and photography (`components/Hero.tsx`,
  `components/DoctorProfile.tsx`, `components/SmileGallery.tsx` all pull from
  Unsplash placeholder URLs — replace with the client's real photography and licensed images).
- All content lives in `lib/data.ts` (services, FAQ, testimonials, trust stats) — edit there first.
- The booking form in `components/Booking.tsx` currently just shows a
  confirmation toast; wire `handleSubmit` to your email/CRM/booking backend.
- Real address/phone/hours are in `components/Contact.tsx` and `components/Footer.tsx`.
- `HeroScene.tsx` is intentionally abstract (soft floating spheres, not a
  literal tooth model) to stay tasteful for a healthcare brand — swap in a
  GLTF model via `@react-three/drei`'s `useGLTF` if a client wants a literal
  3D tooth/implant.
