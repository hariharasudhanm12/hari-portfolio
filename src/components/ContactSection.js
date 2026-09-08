"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Linkedin, Download, Github, Terminal, Sparkles } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const presets = [
    {
      label: "🚀 Full Stack Role",
      subject: "Opportunity: Full Stack / Serverless Developer Position",
      message: "Hi Hariharasudhan, I reviewed your portfolio and would like to discuss a Full Stack / AWS Serverless role with our team.",
    },
    {
      label: "⚡ ERP Modernization",
      subject: "Project Inquiry: Enterprise ERP Software",
      message: "Hi Hari, we have a web/mobile project requirement similar to your ERP modernization work. Let's connect!",
    },
    {
      label: "☕ Tech Chat",
      subject: "Quick Tech Chat & Networking",
      message: "Hey Hariharasudhan, loved your portfolio HUD! Would love to connect over coffee and talk tech.",
    },
  ];

  const handlePresetSelect = (preset) => {
    soundFx.playClick();
    setFormData({
      ...formData,
      subject: preset.subject,
      message: preset.message,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playClick();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3a6e9a05-1811-477a-bfa6-b18c5e6d6bb1",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          to_email: "harihs1210@gmail.com",
        }),
      });

      const result = await response.json();
      if (result.success || response.ok) {
        soundFx.playSuccess();
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        triggerMailto();
      }
    } catch (err) {
      console.error("Email send error:", err);
      triggerMailto();
    }
  };

  const triggerMailto = () => {
    soundFx.playClick();
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:harihs1210@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass-panel text-xs font-mono font-semibold text-[var(--accent-primary)] border border-[var(--border-card)]">
            <Mail className="w-4 h-4" />
            <span>05 // DISPATCH DIRECT MESSAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--text-main)]">
            Send Me a <span className="accent-gradient-text">Direct Message</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg font-sans">
            Delivered directly to <strong className="text-[var(--accent-primary)] font-mono">harihs1210@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="cyber-card rounded-2xl p-6 flex items-start gap-4 border border-[var(--border-card)]">
              <div className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--border-card)]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="font-mono">
                <h4 className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">Direct Email</h4>
                <a href="mailto:harihs1210@gmail.com" onClick={() => soundFx.playClick()} className="text-base font-bold text-white hover:text-[var(--accent-primary)] transition-colors">
                  harihs1210@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="cyber-card rounded-2xl p-6 flex items-start gap-4 border border-[var(--border-card)]">
              <div className="p-3 rounded-xl bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] border border-[var(--border-card)]">
                <span className="text-xl">📞</span>
              </div>
              <div className="font-mono">
                <h4 className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">Phone Contact</h4>
                <a href="tel:+919025097137" onClick={() => soundFx.playClick()} className="text-base font-bold text-white hover:text-[var(--accent-secondary)] transition-colors">
                  +91 9025097137
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="cyber-card rounded-2xl p-6 flex items-start gap-4 border border-[var(--border-card)]">
              <div className="p-3 rounded-xl bg-[var(--accent-tertiary)]/10 text-[var(--accent-tertiary)] border border-[var(--border-card)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="font-mono">
                <h4 className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">Location</h4>
                <p className="text-base font-bold text-white">
                  Virudhunagar, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Profiles & PDF */}
            <div className="cyber-card rounded-2xl p-6 space-y-4 border border-[var(--border-card)]">
              <h4 className="text-sm font-bold font-mono text-white">
                GitHub & Professional Profiles
              </h4>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <a
                  href="https://github.com/hariharasudhanm12"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl cyber-card text-white hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                >
                  <Github className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/mhari12"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl cyber-card text-white hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  download="Hariharasudhan_M_Resume.pdf"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-slate-950 font-bold shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Terminal Form */}
          <div className="lg:col-span-7">
            <div className="cyber-glass-panel rounded-2xl p-8 border border-[var(--border-card)] shadow-2xl font-mono">
              
              {/* Preset Chips */}
              <div className="mb-6 space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                  Quick Message Templates:
                </span>
                <div className="flex flex-wrap gap-2">
                  {presets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handlePresetSelect(preset)}
                      className="px-3 py-1.5 rounded-lg cyber-card text-xs text-[var(--text-main)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                    <span>Message dispatched to <strong>harihs1210@gmail.com</strong>! Will respond shortly.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--border-card)] text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--border-card)] text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Full Stack Role"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--border-card)] text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Message Content *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your inquiry message here..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--border-card)] text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-slate-950 font-bold shadow-lg hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span className="animate-pulse">Dispatching to harihs1210@gmail.com...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Email</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={triggerMailto}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-xl cyber-card text-xs font-semibold text-[var(--text-muted)] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Open Email App</span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
