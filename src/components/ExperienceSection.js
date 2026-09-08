"use client";

import { Briefcase, GraduationCap, CheckCircle, ShieldCheck } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function ExperienceSection() {
  const timelineItems = [
    {
      type: "work",
      title: "Full Stack Developer",
      organization: "CloudB Software Solutions",
      period: "DEC 2024 - PRESENT",
      description: "Building scalable web and mobile applications using MERN stack and AWS Serverless infrastructure, and delivering outsourced enterprise IT solutions for key corporate clients.",
      clientEngagement: {
        clientName: "VVV Edible Oils Pvt Ltd (Client Project via CloudB)",
        details: [
          "Spearheaded the modernization of in-house enterprise IT software & ERP systems using React.js.",
          "Modernized legacy workflows and redesigned existing frontend & API architectures to improve operational efficiency.",
          "Architected custom solutions to handle complex business logic for manufacturing, inventory, and supply chain operations.",
          "Refactored data handlers and state management, ensuring smooth transition from legacy code to modern React interfaces.",
        ]
      },
      highlights: [
        "Collaborated with team members to implement RESTful APIs using Node.js & Express, ensuring seamless data flow between frontend and backend.",
        "Designed and deployed backend services using Serverless architecture (AWS Lambda, API Gateway, DynamoDB), improving scalability and reducing infrastructure costs.",
      ],
      skills: ["React.js", "JavaScript (ES6+)", "Node.js", "Express.js", "AWS Lambda", "DynamoDB", "MongoDB", "ERP Architecture", "REST APIs"],
    },
    {
      type: "education",
      title: "B.Tech - Computer Science and Business Systems (CSBS)",
      organization: "Thiagarajar College of Engineering (TCE), Madurai",
      period: "2020 - 2024",
      description: "Graduated with strong foundation in full stack development, cloud architecture, algorithm design, and business principles.",
      highlights: [
        "Studied advanced data structures, object-oriented programming (C/C++, JavaScript), and software architecture.",
        "Engineered multiple hands-on capstone projects using React, Node.js, and relational/NoSQL databases.",
      ],
      skills: ["JavaScript", "C/C++", "MERN Stack", "Cloud Computing", "Software Architecture"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10 bg-[var(--bg-secondary)]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass-panel text-xs font-mono font-semibold text-[var(--accent-primary)] border border-[var(--border-card)]">
            <Briefcase className="w-4 h-4" />
            <span>04 // CAREER & EDUCATION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--text-main)]">
            Professional <span className="accent-gradient-text">Milestones</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg font-sans">
            Work experience at CloudB Software Solutions and academic background at TCE Madurai.
          </p>
        </div>

        {/* Vertical Cyber Timeline */}
        <div className="relative border-l-2 border-[var(--border-card-hover)] ml-4 sm:ml-8 space-y-12">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:scale-125 transition-all shadow-md shadow-[var(--accent-glow)]" />

              {/* Experience Card */}
              <div
                onMouseEnter={() => soundFx.playHover()}
                className="cyber-card rounded-2xl p-6 sm:p-8 space-y-6 hover:border-[var(--accent-primary)] transition-all border border-[var(--border-card)]"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-card)] pb-4 font-mono">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[var(--accent-primary)] font-bold block mb-1">
                      {item.type === "work" ? "PRO WORK EXPERIENCE" : "ACADEMIC DEGREE"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm font-semibold text-[var(--accent-secondary)]">
                      {item.organization}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black/60 text-[var(--accent-primary)] text-xs font-semibold border border-[var(--border-card)]">
                    {item.period}
                  </span>
                </div>

                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Client Engagement Highlight */}
                {item.clientEngagement && (
                  <div className="p-4 sm:p-5 rounded-xl bg-black/60 border border-[var(--border-card)] space-y-3 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-ping" />
                      <h4 className="text-xs sm:text-sm font-bold text-[var(--accent-primary)]">
                        KEY CLIENT DEPLOYMENT: {item.clientEngagement.clientName}
                      </h4>
                    </div>
                    <div className="space-y-2 font-sans">
                      {item.clientEngagement.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Internal Highlights */}
                <div className="space-y-2 pt-1 font-sans">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold mb-2">
                    Core Technical Impact
                  </h4>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-[var(--accent-secondary)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-[var(--bg-primary)] text-[var(--accent-secondary)] text-xs font-mono border border-[var(--border-card)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
