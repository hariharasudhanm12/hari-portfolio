"use client";

import { useState, useEffect } from "react";
import { Sparkles, Github, Linkedin, Mail, Download, Code, MapPin, Terminal, Cpu, ShieldCheck } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function HeroSection({ onOpenTerminal }) {
  const [activeCodeTab, setActiveCodeTab] = useState("lambda");
  const [roleIndex, setRoleIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const roles = [
    "AWS Serverless Architect",
    "MERN Stack Specialist",
    "React Native Mobile Engineer",
    "Enterprise ERP Architect",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const codeSnippets = {
    lambda: `// AWS Lambda Serverless Microservice
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const handler = async (event) => {
  const { orderId, kotItems } = JSON.parse(event.body);
  
  // Real-time sales order & KOT receipt generation
  const receipt = await processKotTicket(orderId, kotItems);
  
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ status: "SUCCESS", receipt })
  };
};`,

    erp: `{
  "system": "Mago PrinPro ERP Modernization",
  "client": "VVV Edible Oils Pvt Ltd / CloudB",
  "architecture": {
    "frontend": "React.js + Redux Toolkit",
    "mobile": "React Native (Sales & Delivery)",
    "backend": "Node.js RESTful Microservices",
    "database": "MongoDB + DynamoDB NoSQL"
  },
  "metrics": {
    "orderUptime": "99.99%",
    "pdfReceiptsGenerated": "5,000+/day"
  }
}`,

    sys: `HARIHARASUDHAN_M_SYSTEM_PROFILE
================================
• Degree: B.Tech CSBS @ TCE Madurai (2020-2024)
• Experience: Full Stack Developer @ CloudB
• Location: Virudhunagar, Tamil Nadu, India
• Specialization: High-Performance Enterprise ERPs, 
  Serverless API Gateways, & React Native Apps.
================================
Status: OPEN TO NEW OPPORTUNITIES`,
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden cyber-grid-bg">
      {/* Glowing Laser Spotlights */}
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-[var(--accent-primary)] opacity-15 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[var(--accent-secondary)] opacity-15 blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-glass-panel border border-[var(--accent-primary)]/40 text-xs font-mono text-[var(--accent-primary)] shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
              <span>Full Stack Developer @ CloudB Software Solutions</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-main)] font-mono">
                Hi, I'm <span className="accent-gradient-text">Hariharasudhan M</span>
              </h1>
              
              {/* Dynamic Typewriter Role */}
              <div className="h-9 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl font-bold font-mono text-[var(--accent-secondary)]">
                  &gt; {roles[roleIndex]}
                  <span className="animate-pulse">_</span>
                </span>
              </div>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl font-sans leading-relaxed">
              Engineered for scale. Specializing in <strong className="text-[var(--accent-primary)] font-semibold">MERN Stack</strong> (MongoDB, Express, React, Node.js) & <strong className="text-[var(--accent-secondary)] font-semibold">AWS Serverless Cloud</strong> (Lambda, API Gateway, DynamoDB) with proven enterprise ERP deployments.
            </p>

            {/* Quick Meta Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl cyber-card text-[var(--text-main)]">
                <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
                Virudhunagar, Tamil Nadu, India
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl cyber-card text-[var(--text-main)]">
                <Sparkles className="w-4 h-4 text-[var(--accent-tertiary)]" />
                B.Tech CSBS @ TCE Madurai
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-slate-950 font-mono font-bold text-sm shadow-xl shadow-[var(--accent-glow)] hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                Explore Projects
              </a>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenTerminal();
                }}
                className="px-6 py-3.5 rounded-xl cyber-card font-mono font-semibold text-xs text-[var(--text-main)] hover:text-[var(--accent-primary)] border border-[var(--border-card)] hover:border-[var(--accent-primary)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
              >
                <Terminal className="w-5 h-5 text-[var(--accent-primary)]" />
                Launch Console (Cmd+K)
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                download="Hariharasudhan_M_Resume.pdf"
                onClick={() => soundFx.playClick()}
                className="px-5 py-3.5 rounded-xl cyber-card font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 border-t border-[var(--border-card)] text-[var(--text-muted)] text-xs font-mono">
              <span className="font-semibold text-[var(--text-main)]">Profiles:</span>
              <a
                href="https://github.com/hariharasudhanm12"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="px-3 py-1.5 rounded-lg cyber-card hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/mhari12"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="px-3 py-1.5 rounded-lg cyber-card hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:harihs1210@gmail.com"
                onClick={() => soundFx.playClick()}
                className="px-3 py-1.5 rounded-lg cyber-card hover:text-[var(--accent-secondary)] hover:border-[var(--accent-secondary)] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-[var(--accent-secondary)]" />
                <span>harihs1210@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Holographic Tilt Card & Code Workbench */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* Interactive Code Workbench Box */}
            <div className="w-full cyber-glass-panel rounded-2xl border border-[var(--border-card)] shadow-2xl overflow-hidden font-mono">
              
              {/* Workbench Tab Header */}
              <div className="px-4 py-2.5 bg-[var(--bg-secondary)] border-b border-[var(--border-card)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-[var(--text-muted)] ml-2">code_workbench.v3</span>
                </div>
                
                <div className="flex gap-1 text-[11px]">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveCodeTab("lambda");
                    }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeCodeTab === "lambda"
                        ? "bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-bold"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    Lambda.js
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveCodeTab("erp");
                    }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeCodeTab === "erp"
                        ? "bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] font-bold"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    ERP.json
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveCodeTab("sys");
                    }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeCodeTab === "sys"
                        ? "bg-[var(--accent-tertiary)]/20 text-[var(--accent-tertiary)] font-bold"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    System.sys
                  </button>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 bg-black/60 text-xs leading-relaxed overflow-x-auto text-emerald-300/90 h-[220px]">
                <pre>{codeSnippets[activeCodeTab]}</pre>
              </div>

            </div>

            {/* Profile Hologram Card with 3D Mouse Tilt */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative group w-72 h-80 sm:w-80 sm:h-88 rounded-2xl cyber-card p-2 border border-[var(--border-card-hover)] shadow-2xl bg-[var(--bg-secondary)]"
            >
              {/* Outer Glow Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] rounded-2xl blur-md opacity-40 group-hover:opacity-80 transition duration-500" />

              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Hariharasudhan M"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                />

                {/* Cyber Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 cyber-glass-panel p-3 rounded-xl border border-[var(--border-card)] backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold font-mono text-white">Hariharasudhan M</h4>
                      <p className="text-[11px] text-[var(--accent-primary)] font-mono">Full Stack Engineer</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>ACTIVE</span>
                    </div>
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
