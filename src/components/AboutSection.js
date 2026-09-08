"use client";

import { User, Sparkles, Code, Cpu, ShieldCheck, Award, GraduationCap, Briefcase } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function AboutSection() {
  const metrics = [
    { label: "Production Exp.", value: "1+ Yrs", desc: "Full Stack Engineer @ CloudB" },
    { label: "Degree (TCE)", value: "B.Tech CSBS", desc: "Thiagarajar College of Eng." },
    { label: "Enterprise Projects", value: "2+ Systems", desc: "ERP & Serverless Apps" },
    { label: "AWS & MERN Stack", value: "100% Stack", desc: "Full Production Uptime" },
  ];

  const pillars = [
    {
      title: "MERN & React Native Engineering",
      description: "Building responsive Web & Mobile platforms using React.js, React Native, Redux, Node.js, and Express. Engineered real-time sales & delivery tracking with QR code scanning.",
      icon: Code,
      accent: "text-[var(--accent-primary)]",
    },
    {
      title: "AWS Serverless Cloud Backends",
      description: "Architecting cloud microservices with AWS Lambda, API Gateway, DynamoDB, S3, EC2, and Serverless Framework. High throughput, zero server management, and automated scaling.",
      icon: Cpu,
      accent: "text-[var(--accent-secondary)]",
    },
    {
      title: "Enterprise ERP & Modernization",
      description: "Delivering outsourced enterprise software for clients like VVV Edible Oils Pvt Ltd via CloudB. Refactored legacy workflows into high-performance React components with automated PDF invoices.",
      icon: Sparkles,
      accent: "text-[var(--accent-tertiary)]",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass-panel text-xs font-mono font-semibold text-[var(--accent-primary)] border border-[var(--border-card)]">
            <User className="w-4 h-4" />
            <span>01 // SYSTEM OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--text-main)]">
            Engineering Scalable <span className="accent-gradient-text">Web & Mobile Apps</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg font-sans">
            Graduated with a <strong className="text-[var(--text-main)]">B.Tech in Computer Science & Business Systems (CSBS)</strong> from Thiagarajar College of Engineering, Madurai (2020–2024). Currently engineering full-stack cloud applications at CloudB Software Solutions.
          </p>
        </div>

        {/* Bento Grid Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="cyber-card rounded-2xl p-6 text-center space-y-2 group border border-[var(--border-card)] hover:border-[var(--accent-primary)] transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black font-mono accent-gradient-text">
                {metric.value}
              </div>
              <div className="text-xs font-bold font-mono text-[var(--text-main)] uppercase tracking-wider">
                {metric.label}
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-mono">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Core Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => soundFx.playHover()}
                className="cyber-card rounded-2xl p-8 space-y-4 hover:border-[var(--accent-primary)] transition-all duration-300 border border-[var(--border-card)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center border border-[var(--border-card)]">
                    <IconComp className={`w-6 h-6 ${pillar.accent}`} />
                  </div>
                  <h3 className="text-xl font-bold font-mono text-[var(--text-main)]">
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-card)] flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Production Validated</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
