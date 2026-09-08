"use client";

import { useState } from "react";
import { FolderGit, ExternalLink, Sparkles, CheckCircle, Terminal, X, Code, ShieldCheck } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: "apsara",
      title: "Apsara Theater Admin & Web Mobile Platform",
      category: "serverless",
      categoryLabel: "AWS Serverless & Web App",
      description: "Full-stack mobile-friendly theater management platform utilizing AWS Serverless architecture for real-time sales, order delivery, QR code scanning, and KOT generation.",
      highlights: [
        "Built Serverless APIs utilizing AWS Lambda, DynamoDB, and API Gateway.",
        "Implemented Kitchen Order Ticket (KOT) & automated invoice PDF generation.",
        "Integrated QR code scanning for real-time order delivery verification.",
      ],
      tech: ["React.js", "Redux", "Material UI", "AWS Lambda", "DynamoDB", "API Gateway", "Serverless Framework"],
      architecture: "AWS API Gateway -> AWS Lambda Node.js -> DynamoDB NoSQL -> PDF Printer & Mobile QR Scan",
      metrics: "99.99% Serverless Uptime | 5,000+ Daily KOT Receipts",
      gradient: "from-emerald-900/40 via-teal-900/40 to-slate-950",
    },
    {
      id: "mago",
      title: "Mago PrinPro ERP",
      category: "mobile",
      categoryLabel: "Mobile (React Native) & ERP",
      description: "Comprehensive enterprise resource planning solution featuring a React Native mobile application for sales & delivery staff synced in real-time to an administrative web panel.",
      highlights: [
        "Developed cross-platform mobile app for sales & delivery tracking.",
        "Built RESTful APIs in Node.js/Express with automated Order Reports & Invoice PDF generation.",
        "Created responsive admin dashboard UI for team management & order processing.",
      ],
      tech: ["React Native", "Node.js", "Express", "Redux", "React.js", "MongoDB"],
      architecture: "React Native Android/iOS App -> Express REST API -> MongoDB Atlas -> PDF Invoice Engine",
      metrics: "Real-time Order Sync | Automated Invoice Generation",
      gradient: "from-cyan-900/40 via-indigo-900/40 to-slate-950",
    },
    {
      id: "drkoning",
      title: "Dr. Koning Healthcare Website",
      category: "mern",
      categoryLabel: "Live Production & Healthcare",
      description: "Designed and developed the official static website for Dr. Koning. Features a modern responsive design, high performance web vitals, intuitive patient information layout, and seamless inquiry workflows.",
      highlights: [
        "Architected clean, accessible HTML5/CSS3 and JavaScript frontend.",
        "Optimized page load speed, image assets, and cross-device responsiveness.",
        "Implemented clear healthcare patient call-to-actions and service menus.",
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Web Performance"],
      architecture: "Static Edge Distribution -> Modern Semantic HTML5/CSS3 -> Instant Web Vitals Load",
      metrics: "100% Mobile Responsive | Live Production Website",
      demoUrl: "https://www.drkoning.com/",
      gradient: "from-blue-900/40 via-cyan-900/40 to-slate-950",
    },
    {
      id: "vvv",
      title: "VVV Edible Oils IT ERP Modernization",
      category: "erp",
      categoryLabel: "Enterprise ERP & Modernization",
      description: "Outsourced IT enterprise software project for VVV Edible Oils Pvt Ltd via CloudB Software Solutions. Redesigned legacy workflows and built modern React interfaces capable of handling complex manufacturing logic.",
      highlights: [
        "Modernized legacy workflows into high-performance React.js components.",
        "Engineered robust state management and API handlers for complex business rules.",
        "Simplified user experience for in-house enterprise operators.",
      ],
      tech: ["React.js", "JavaScript (ES6+)", "ERP Architecture", "REST APIs", "State Management"],
      architecture: "Legacy Workflow Refactoring -> React.js Modern UI -> State Handlers & API Controllers",
      metrics: "Improved Daily Operator Efficiency & Manufacturing Logistics",
      gradient: "from-amber-900/40 via-emerald-900/40 to-slate-950",
    },
  ];

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "serverless", label: "AWS Serverless" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "mern", label: "Live Web Production" },
    { id: "erp", label: "Enterprise ERP" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass-panel text-xs font-mono font-semibold text-[var(--accent-primary)] border border-[var(--border-card)]">
            <FolderGit className="w-4 h-4" />
            <span>03 // FEATURED PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--text-main)]">
            Production Websites & <span className="accent-gradient-text">Enterprise Software</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg font-sans">
            Client platforms, AWS serverless architectures, and enterprise ERP solutions built for real-world impact.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-slate-950 font-bold shadow-lg"
                  : "cyber-card text-[var(--text-muted)] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cyber-card rounded-2xl overflow-hidden flex flex-col group border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-all duration-300 shadow-xl"
            >
              {/* Header Banner */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden border-b border-[var(--border-card)]`}>
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/80 text-[var(--accent-primary)] text-xs font-mono font-semibold border border-[var(--border-card)]">
                    {project.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/30 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Production System
                  </span>
                </div>

                <div className="z-10">
                  <h3 className="text-2xl font-bold font-mono text-white tracking-wide drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-[var(--border-card)]">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold mb-2">
                    Key Deliverables
                  </h4>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-main)] font-sans">
                      <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills & Actions */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--border-card)]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-muted)] text-[11px] font-mono border border-[var(--border-card)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setActiveModalProject(project);
                      }}
                      className="px-3.5 py-1.5 rounded-lg cyber-card text-xs font-mono font-bold text-[var(--accent-primary)] border border-[var(--border-card)] hover:border-[var(--accent-primary)] transition-colors shrink-0 flex items-center gap-1"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Inspect Specs</span>
                    </button>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-slate-950 font-mono text-xs font-bold transition-all shrink-0 shadow-md"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Specs Inspect Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl cyber-glass-panel rounded-2xl border border-[var(--border-card-hover)] shadow-2xl overflow-hidden font-mono flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="px-5 py-4 bg-[var(--bg-secondary)] border-b border-[var(--border-card)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-[var(--accent-primary)]" />
                <span className="text-sm font-bold text-[var(--text-main)] truncate">
                  ARCHITECTURE: {activeModalProject.title}
                </span>
              </div>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveModalProject(null);
                }}
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs leading-relaxed bg-[var(--bg-primary)]">
              
              <div className="space-y-2">
                <h4 className="text-[11px] uppercase tracking-wider text-[var(--accent-primary)] font-bold">
                  // ARCHITECTURE PIPELINE BLUEPRINT
                </h4>
                <div className="p-3 rounded-xl bg-black/60 border border-[var(--border-card)] text-emerald-300">
                  {activeModalProject.architecture}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-[11px] uppercase tracking-wider text-[var(--accent-secondary)] font-bold">
                  // PRODUCTION BENCHMARK METRICS
                </h4>
                <div className="p-3 rounded-xl bg-black/60 border border-[var(--border-card)] text-amber-300">
                  {activeModalProject.metrics}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
                  // IMPLEMENTATED FEATURES & LOGIC
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[var(--bg-secondary)] border-t border-[var(--border-card)] flex items-center justify-between">
              <span className="text-[11px] text-[var(--text-muted)]">
                Engineered by Hariharasudhan M
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-slate-950 font-bold text-xs"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
