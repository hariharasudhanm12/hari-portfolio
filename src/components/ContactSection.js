"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Linkedin, Download, Github } from "./Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Send Me a <span className="gradient-text">Real Message</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Messages submitted here deliver directly to <strong className="text-cyan-400 font-semibold">harihs1210@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-slate-800/60">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email</h4>
                <a href="mailto:harihs1210@gmail.com" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                  harihs1210@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-slate-800/60">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Phone Number</h4>
                <a href="tel:+919025097137" className="text-base font-bold text-white hover:text-emerald-400 transition-colors">
                  +91 9025097137
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-slate-800/60">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Location</h4>
                <p className="text-base font-bold text-white">
                  Virudhunagar, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="glass-card rounded-2xl p-6 space-y-4 border border-slate-800/60">
              <h4 className="text-base font-bold text-white">
                GitHub & Profiles
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/hariharasudhanm12"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-sm font-semibold text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                >
                  <Github className="w-5 h-5 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/mhari12"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-sm font-semibold text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  download="Hariharasudhan_M_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold shadow-md"
                >
                  <Download className="w-5 h-5" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Real Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-slate-800/60 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Your message has been sent to <strong>harihs1210@gmail.com</strong>! I will reply soon.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span className="animate-pulse">Sending to harihs1210@gmail.com...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Email Now</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={triggerMailto}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Open in Email App</span>
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
