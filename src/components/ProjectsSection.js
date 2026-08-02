"use client";

import { FolderGit, ExternalLink, Sparkles, CheckCircle } from "./Icons";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Apsara Theater Admin & Web Mobile Platform",
      categoryLabel: "AWS Serverless & Web App",
      description: "Full-stack mobile-friendly theater management platform utilizing AWS Serverless architecture for real-time sales, order delivery, QR code scanning, and KOT generation.",
      highlights: [
        "Built Serverless APIs utilizing AWS Lambda, DynamoDB, and API Gateway.",
        "Implemented Kitchen Order Ticket (KOT) & automated invoice PDF generation.",
        "Integrated QR code scanning for real-time order delivery verification.",
      ],
      tech: ["React.js", "Redux", "Material UI", "AWS Lambda", "DynamoDB", "API Gateway", "Serverless"],
      gradient: "from-purple-600/40 via-pink-600/40 to-rose-800/40",
      featured: true,
    },
    {
      title: "Mago PrinPro ERP",
      categoryLabel: "Mobile & ERP Platform",
      description: "Comprehensive enterprise resource planning solution featuring a React Native mobile application for sales & delivery staff synced in real-time to an administrative web panel.",
      highlights: [
        "Developed cross-platform mobile app for sales & delivery tracking.",
        "Built RESTful APIs in Node.js/Express with automated Order Reports & Invoice PDF generation.",
        "Created responsive admin dashboard UI for team management & order processing.",
      ],
      tech: ["React Native", "Node.js", "Express", "Redux", "React.js", "MongoDB"],
      gradient: "from-cyan-600/40 via-indigo-600/40 to-purple-800/40",
      featured: true,
    },
    {
      title: "Dr. Koning Healthcare Website",
      categoryLabel: "Live Static Website & Healthcare",
      description: "Designed and developed the official static website for Dr. Koning. Features a modern responsive design, high performance web vitals, intuitive patient information layout, and seamless inquiry workflows.",
      highlights: [
        "Architected clean, accessible HTML5/CSS3 and JavaScript frontend.",
        "Optimized page load speed, image assets, and cross-device responsiveness.",
        "Implemented clear healthcare patient call-to-actions and service menus.",
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Web Performance"],
      demoUrl: "https://www.drkoning.com/",
      gradient: "from-blue-600/40 via-cyan-600/40 to-teal-800/40",
      featured: true,
    },
    {
      title: "VVV Edible Oils IT ERP Modernization",
      categoryLabel: "Enterprise ERP & React.js",
      description: "Outsourced IT enterprise software project for VVV Edible Oils Pvt Ltd via CloudB Software Solutions. Redesigned legacy workflows and built modern React interfaces capable of handling complex manufacturing logic.",
      highlights: [
        "Modernized legacy workflows into high-performance React.js components.",
        "Engineered robust state management and API handlers for complex business rules.",
        "Simplified user experience for in-house enterprise operators.",
      ],
      tech: ["React.js", "JavaScript (ES6+)", "ERP System", "REST APIs", "State Management"],
      gradient: "from-amber-600/40 via-emerald-600/40 to-teal-800/40",
      featured: true,
    },


  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400">
            <FolderGit className="w-4 h-4" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Live Projects & <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Production websites, enterprise ERP software, and mobile applications engineered for clients.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Project Header Banner */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 text-cyan-300 text-xs font-semibold backdrop-blur-md border border-cyan-500/30">
                    {project.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold backdrop-blur-md border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Live Production
                  </span>
                </div>

                <div className="z-10">
                  <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2 pt-1 border-t border-slate-800/80">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">Key Highlights</h4>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills & Live Link */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-xs font-mono font-medium border border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 text-xs font-bold border border-cyan-500/30 transition-colors shrink-0"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
