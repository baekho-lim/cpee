import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <AcademySection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
