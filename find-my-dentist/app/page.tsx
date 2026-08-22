import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import Technology from "@/components/Technology";
import SmileGallery from "@/components/SmileGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <DoctorProfile />
      <Technology />
      <SmileGallery />
      <Testimonials />
      <FAQ />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
