"use client";

import { User, Sparkles, Code, Cpu } from "./Icons";

export default function AboutSection() {
  const metrics = [
    { label: "Experience", value: "1+ Yrs", accent: "from-cyan-500 to-blue-500" },
    { label: "Degree (TCE)", value: "CSBS", accent: "from-indigo-500 to-purple-500" },
    { label: "Enterprise Projects", value: "2+", accent: "from-emerald-500 to-teal-500" },
    { label: "AWS & MERN Stack", value: "100%", accent: "from-amber-500 to-rose-500" },
  ];

  const highlights = [
    {
      title: "MERN Stack Development",
      description: "Building responsive web applications and mobile apps using MongoDB, Express.js, React.js, React Native, Node.js, and Redux.",
      icon: Code,
    },
    {
      title: "AWS Serverless Architecture",
      description: "Architecting scalable cloud backends with AWS Lambda, API Gateway, DynamoDB, S3, EC2, and Serverless Framework to optimize infrastructure costs.",
      icon: Cpu,
    },
    {
      title: "Enterprise Solutions & Mobile",
      description: "Developing cross-platform ERP platforms, admin dashboards, real-time delivery tracking systems with QR codes, order reports, and invoice PDF generators.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400">
            <User className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Scalable Web & <span className="gradient-text">Mobile Applications</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            I hold a <strong className="text-white font-semibold">B.Tech in Computer Science & Business Systems (CSBS)</strong> from Thiagarajar College of Engineering, Madurai (2020 – 2024). Currently serving as a Full Stack Developer at CloudB Software Solutions.
          </p>
        </div>

        {/* Highlight Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group">
              <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${metric.accent} bg-clip-text text-transparent mb-2`}>
                {metric.value}
              </div>
              <div className="text-sm font-medium text-slate-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Pillars / Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 space-y-4 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
