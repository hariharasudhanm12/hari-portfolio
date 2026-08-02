"use client";

import { useState } from "react";
import { Cpu } from "./Icons";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frameworks", label: "Frameworks & Frontend" },
    { id: "cloud", label: "AWS & Serverless" },
    { id: "databases", label: "Databases & Tools" },
  ];

  const skills = [
    { name: "React.js", category: "frameworks", level: "Expert", icon: "⚛️" },
    { name: "React Native", category: "frameworks", level: "Advanced", icon: "📱" },
    { name: "Node.js", category: "frameworks", level: "Advanced", icon: "🟩" },
    { name: "Express.js", category: "frameworks", level: "Advanced", icon: "🚀" },
    { name: "Redux", category: "frameworks", level: "Advanced", icon: "🔄" },
    { name: "Material UI", category: "frameworks", level: "Intermediate", icon: "🎨" },
    { name: "JavaScript", category: "frameworks", level: "Master", icon: "🟨" },
    { name: "C/C++", category: "frameworks", level: "Proficient", icon: "⚙️" },

    { name: "AWS Lambda", category: "cloud", level: "Advanced", icon: "⚡" },
    { name: "API Gateway", category: "cloud", level: "Advanced", icon: "🌐" },
    { name: "AWS S3", category: "cloud", level: "Intermediate", icon: "🪣" },
    { name: "AWS EC2", category: "cloud", level: "Intermediate", icon: "💻" },
    { name: "Serverless Framework", category: "cloud", level: "Advanced", icon: "☁️" },

    { name: "MongoDB", category: "databases", level: "Advanced", icon: "🍃" },
    { name: "DynamoDB", category: "databases", level: "Advanced", icon: "⚡" },
    { name: "REST APIs", category: "databases", level: "Expert", icon: "🔗" },
    { name: "Git & GitHub", category: "databases", level: "Expert", icon: "📦" },
    { name: "Postman", category: "databases", level: "Advanced", icon: "🧪" },
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400">
            <Cpu className="w-4 h-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Core stack technologies, languages, cloud services, and database frameworks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25"
                  : "glass-card text-slate-300 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 flex items-center gap-3 hover:scale-[1.03] transition-all group border border-slate-800/60"
            >
              <div className="text-2xl p-2 rounded-lg bg-slate-900 border border-slate-700/50 group-hover:bg-cyan-500/10 transition-colors">
                {skill.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {skill.name}
                </h4>
                <span className="block text-[11px] text-cyan-400 font-medium mt-0.5">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
