"use client";

import { Sparkles, ArrowUp, Linkedin, Mail, Download } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="text-lg font-bold text-white">
              Hariharasudhan<span className="gradient-text">.dev</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-400 text-center">
            © {new Date().getFullYear()} Hariharasudhan M. All rights reserved. Built with Next.js, React & Tailwind CSS.
          </div>

          {/* Actions & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              download="Hariharasudhan_M_Resume.pdf"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5 text-xs font-semibold"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-2 text-xs font-semibold"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
