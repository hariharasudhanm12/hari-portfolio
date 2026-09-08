"use client";

import { useState, useEffect } from "react";
import { Sparkles, Terminal, Volume2, VolumeX, Menu, X, Download, ShieldCheck, Sun } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function Navbar({ onOpenTerminal, currentTheme, setTheme, soundEnabled, setSoundEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themes = [
    { id: "theme-matrix", name: "Matrix Emerald", icon: "🟢" },
    { id: "theme-synthwave", name: "Synthwave Sunset", icon: "🌸" },
    { id: "theme-cyberblue", name: "Hyper Blue", icon: "⚡" },
    { id: "theme-monochrome", name: "Minimal Carbon", icon: "⚪" },
  ];

  const handleThemeChange = (themeId) => {
    soundFx.playClick();
    setTheme(themeId);
    setThemeDropdownOpen(false);
  };

  const toggleSound = () => {
    const active = soundFx.toggleSound();
    setSoundEnabled(active);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "demo----------", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "py-3 bg-[var(--bg-secondary)]/90 backdrop-blur-md border-b border-[var(--border-card)] shadow-2xl"
        : "py-5 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => soundFx.playClick()}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] p-[2px] shadow-lg shadow-[var(--accent-glow)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[var(--bg-primary)] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[var(--accent-primary)] animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-main)] font-mono">
              Hariharasudhan<span className="accent-gradient-text">.dev</span>
            </span>
            <span className="text-[10px] text-[var(--accent-primary)] font-mono font-semibold tracking-wider uppercase">
              Full Stack & Cloud
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 cyber-glass-panel px-4 py-1.5 rounded-full border border-[var(--border-card)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => soundFx.playHover()}
              className="px-4 py-2 text-xs font-semibold font-mono text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* HUD Action Controls */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenTerminal();
            }}
            className="px-3 py-1.5 rounded-xl cyber-card text-xs font-mono font-bold text-[var(--text-main)] hover:text-[var(--accent-primary)] border border-[var(--border-card)] flex items-center gap-1.5 hover:border-[var(--accent-primary)] transition-all"
            title="Open Console (Cmd+K / Ctrl+K)"
          >
            <Terminal className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Cmd+K</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl cyber-card text-[var(--text-muted)] hover:text-[var(--accent-primary)] border border-[var(--border-card)] transition-colors"
            title={soundEnabled ? "Mute UI Sound Effects" : "Enable UI Sound Effects"}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[var(--accent-primary)]" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Theme Preset Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                soundFx.playClick();
                setThemeDropdownOpen(!themeDropdownOpen);
              }}
              className="px-3 py-1.5 rounded-xl cyber-card text-xs font-mono text-[var(--text-main)] border border-[var(--border-card)] flex items-center gap-2 hover:border-[var(--accent-primary)] transition-colors"
            >
              <Sun className="w-4 h-4 text-[var(--accent-secondary)]" />
              <span>Theme</span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 cyber-glass-panel rounded-xl border border-[var(--border-card-hover)] p-2 shadow-2xl space-y-1 z-50 animate-fadeIn">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleThemeChange(t.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono font-medium flex items-center justify-between transition-colors ${currentTheme === t.id
                      ? "bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-bold"
                      : "text-[var(--text-muted)] hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <span>{t.name}</span>
                    <span>{t.icon}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Resume PDF Action */}
          <a
            href="/resume.pdf"
            target="_blank"
            download="Hariharasudhan_M_Resume.pdf"
            onClick={() => soundFx.playClick()}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-slate-950 font-mono font-bold text-xs shadow-lg shadow-[var(--accent-glow)] hover:opacity-95 transition-all transform active:scale-95 flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>

        </div>

        {/* Mobile Controls Toggle */}
        <div className="flex lg:hidden items-center gap-2">

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenTerminal();
            }}
            className="p-2 rounded-lg cyber-card text-[var(--accent-primary)] border border-[var(--border-card)]"
            title="Terminal Console"
          >
            <Terminal className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg cyber-card text-[var(--text-main)] border border-[var(--border-card)]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden cyber-glass-panel border-b border-[var(--border-card)] px-4 pt-4 pb-6 mt-3 space-y-4 animate-fadeIn">
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-lg font-mono text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[var(--border-card)] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-muted)]">Color Deck:</span>
              <div className="flex gap-1">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleThemeChange(t.id)}
                    className="p-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-card)]"
                  >
                    {t.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[var(--text-muted)]">Audio Effects:</span>
              <button
                onClick={toggleSound}
                className="px-3 py-1.5 rounded bg-[var(--bg-card)] text-[var(--accent-primary)] border border-[var(--border-card)] flex items-center gap-1"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{soundEnabled ? "ON" : "MUTED"}</span>
              </button>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              download="Hariharasudhan_M_Resume.pdf"
              className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-slate-950 font-bold"
            >
              Download Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
