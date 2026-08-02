"use client";

import { Sparkles, Github, Linkedin, Mail, Download, Code, MapPin } from "./Icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Ambient Glows */}
      <div className="glow-spot w-96 h-96 bg-cyan-500 top-20 -left-20 animate-pulse-glow" />
      <div className="glow-spot w-96 h-96 bg-purple-600 bottom-10 -right-20 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Full Stack Developer @ CloudB Software Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Hi, I'm <span className="gradient-text">Hariharasudhan M</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
              Full Stack Engineer specializing in <strong className="text-cyan-400 font-semibold">MERN Stack</strong> (MongoDB, Express, React, Node.js) & <strong className="text-indigo-400 font-semibold">AWS Serverless Architecture</strong> (Lambda, API Gateway, DynamoDB).
            </p>

            {/* Contact Quick Info Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Virudhunagar, Tamil Nadu, India
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card">
                <Sparkles className="w-4 h-4 text-purple-400" />
                B.Tech CSBS @ TCE Madurai
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="/resume.pdf"
                target="_blank"
                download="Hariharasudhan_M_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl glass-card font-semibold text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
              >
                <Code className="w-5 h-5 text-cyan-400" />
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 border-t border-slate-800/60 text-slate-400 text-sm">
              <span className="font-medium text-slate-300">Connect:</span>
              <a
                href="https://github.com/hariharasudhanm12"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg glass-card hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-2 text-xs font-semibold"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com/in/mhari12"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg glass-card hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-2 text-xs font-semibold"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:harihs1210@gmail.com"
                className="px-3 py-1.5 rounded-lg glass-card hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-2 text-xs font-semibold"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>harihs1210@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

              {/* Profile Image Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden glass-card p-2 border border-slate-700/60 shadow-2xl bg-slate-900">
                <img
                  src="/profile.jpg"
                  alt="Hariharasudhan M"
                  className="w-full h-full object-cover rounded-xl object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-xl border border-slate-700/60 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Hariharasudhan M</h4>
                      <p className="text-xs text-cyan-400 font-medium">Full Stack & Mobile Developer</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
