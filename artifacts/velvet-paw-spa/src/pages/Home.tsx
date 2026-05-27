import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import DogShowcase from "@/components/sections/DogShowcase";
import TrustBadges from "@/components/sections/TrustBadges";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FacebookCTA from "@/components/sections/FacebookCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <DogShowcase />
      <TrustBadges />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <FacebookCTA />
      <Contact />
      <Footer />
    </main>
  );
}