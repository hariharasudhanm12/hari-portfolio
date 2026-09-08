"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("theme-matrix");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [scanlines, setScanlines] = useState(true);

  // Apply theme class to document root
  useEffect(() => {
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  return (
    <div className={`relative min-h-screen ${currentTheme} selection:bg-[var(--accent-primary)] selection:text-slate-950 font-sans transition-colors duration-500 overflow-x-hidden`}>
      
      {/* Optional CRT Scanlines Effect */}
      {scanlines && <div className="scanlines-overlay" />}

      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer Bar */}
      <Footer />

      {/* Interactive Cmd+K Command Palette Console */}
      <CommandPalette
        isOpen={terminalOpen}
        onClose={setTerminalOpen}
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

    </div>
  );
}
