"use client";

import { Briefcase, CheckCircle } from "./Icons";

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
    <section id="experience" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400">
            <Briefcase className="w-4 h-4" />
            <span>Experience & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            My work experience at CloudB Software Solutions and academic background at TCE Madurai.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-700/60 ml-4 sm:ml-8 space-y-12">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-cyan-500/50" />

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 hover:border-cyan-500/40 transition-all border border-slate-800/60">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                      {item.type === "work" ? "Professional Work Experience" : "Academic Degree"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm font-semibold text-indigo-400">
                      {item.organization}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30">
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Client Engagement Sub-section if present */}
                {item.clientEngagement && (
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <h4 className="text-xs sm:text-sm font-bold text-cyan-300 font-mono">
                        Key Client Deployment: {item.clientEngagement.clientName}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {item.clientEngagement.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Standard Highlights */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">Internal & AWS Cloud Highlights</h4>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-semibold border border-indigo-500/20"
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
