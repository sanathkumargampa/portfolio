import { lazy } from "react";
import { Navbar } from "../components/Navbar";
import DarkVeil from "../components/DarkVeil";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { LazyRender } from "../components/LazyRender";
import { Analytics } from "@vercel/analytics/react"

// Lazy load below-the-fold sections
const AboutSection = lazy(() => import("../components/AboutSection").then(module => ({ default: module.AboutSection })));
const SkillsSection = lazy(() => import("../components/SkillsSection").then(module => ({ default: module.SkillsSection })));
const ProjectsSection = lazy(() => import("../components/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const ContactSection = lazy(() => import("../components/ContactSection").then(module => ({ default: module.ContactSection })));

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 w-full h-full z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={0.25}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section - Eager Load */}
        <HeroSection />

        {/* Lazy Loaded Sections with Intersection Observer */}
        <LazyRender id="about" minHeight="min-h-[80vh]">
          <AboutSection />
        </LazyRender>

        <LazyRender id="skills" minHeight="min-h-[60vh]">
          <SkillsSection />
        </LazyRender>

        <LazyRender id="projects" minHeight="min-h-[100vh]">
          <ProjectsSection />
        </LazyRender>

        <LazyRender id="contact" minHeight="min-h-[70vh]">
          <ContactSection />
        </LazyRender>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};




