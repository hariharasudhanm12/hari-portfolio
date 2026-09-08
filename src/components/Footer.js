"use client";

import { useState, useEffect } from "react";
import { Sparkles, Github, Linkedin, Mail, ArrowUp } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function Footer() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-card)] bg-[var(--bg-secondary)]/80 relative z-10 font-mono text-xs text-[var(--text-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-card)]">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] flex items-center justify-center border border-[var(--border-card)]">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-white tracking-wide">
                Hariharasudhan<span className="accent-gradient-text">.dev</span>
              </span>
              <p className="text-[10px] text-[var(--text-muted)]">
                Full Stack & AWS Serverless Engineer
              </p>
            </div>
          </div>

          {/* HUD System Clock & Status */}
          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg cyber-card border border-[var(--border-card)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEM: ONLINE</span>
            </div>

            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg cyber-card border border-[var(--border-card)] text-[var(--accent-secondary)]">
              <span>IST CLOCK: {timeStr || "10:00:00 PM"}</span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl cyber-card hover:text-[var(--accent-primary)] border border-[var(--border-card)] transition-colors flex items-center gap-1"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="hidden sm:inline">TOP</span>
          </button>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-[11px]">
            © {new Date().getFullYear()} Hariharasudhan M. Engineered with Next.js, React & Cyber HUD Design.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/hariharasudhanm12"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mhari12"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:harihs1210@gmail.com"
              onClick={() => soundFx.playClick()}
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
