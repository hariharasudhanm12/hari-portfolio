"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, X, Sparkles, Code, FolderGit, Cpu, Mail, Volume2, VolumeX, ShieldCheck, Sun } from "./Icons";
import { soundFx } from "@/utils/soundEffects";

export default function CommandPalette({ isOpen, onClose, currentTheme, setTheme, soundEnabled, setSoundEnabled }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "HARIHARASUDHAN.DEV OS [Version 3.6.0]" },
    { type: "sys", text: "Type 'help' to view available system commands or click a quick action below." },
  ]);

  const inputRef = useRef(null);
  const historyEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      soundFx.playTerminal();
    }
  }, [isOpen]);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === "Escape" && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    soundFx.playClick();

    if (!trimmed) return;

    const newHistory = [...history, { type: "user", text: `$ ${cmdStr}` }];

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available commands:
• projects  - View live production & enterprise ERP projects
• skills    - Display core MERN & AWS Serverless tech stack
• contact   - View contact info & send direct email
• theme     - Switch theme [matrix | synthwave | cyberblue | monochrome]
• sound     - Toggle Web Audio sound effects ON/OFF
• hire      - Display candidate elevator pitch & qualifications
• clear     - Clear terminal screen
• exit      - Close command palette console`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `🚀 Featured Live Projects:
1. Apsara Theater Admin & Web Mobile Platform (AWS Serverless + KOT QR)
2. Mago PrinPro ERP (React Native + Node.js Express)
3. Dr. Koning Healthcare Official Website (https://www.drkoning.com/)
4. VVV Edible Oils ERP Modernization (Enterprise React Workflows)`,
        });
        window.location.hash = "#projects";
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `⚡ Tech Stack Summary:
• Frontend: React.js, Redux, Material UI, JavaScript (ES6+), HTML5/CSS3
• Mobile: React Native (Sales & Delivery ERP Apps)
• Backend: Node.js, Express.js, REST APIs
• AWS Cloud: AWS Lambda, API Gateway, DynamoDB, S3, EC2, Serverless Framework
• Databases & Tools: MongoDB, DynamoDB, Git/GitHub, Postman, C/C++`,
        });
        window.location.hash = "#skills";
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `📧 Direct Contact:
• Email: harihs1210@gmail.com
• Phone: +91 9025097137
• Location: Virudhunagar, Tamil Nadu, India
• Current Role: Full Stack Developer @ CloudB Software Solutions`,
        });
        window.location.hash = "#contact";
        break;

      case "hire":
        newHistory.push({
          type: "output",
          text: `🎯 Why Hire Hariharasudhan M?
• B.Tech CSBS Graduate from Thiagarajar College of Engineering (TCE), Madurai.
• Hands-on production experience engineering AWS Serverless backends & MERN stack enterprise solutions.
• Proven track record refactoring complex enterprise legacy workflows into modern React interfaces for clients like VVV Edible Oils.`,
        });
        break;

      case "theme matrix":
        setTheme("theme-matrix");
        newHistory.push({ type: "success", text: "Switched color deck to: Cyber Matrix 🟢" });
        break;
      case "theme synthwave":
        setTheme("theme-synthwave");
        newHistory.push({ type: "success", text: "Switched color deck to: Synthwave Sunset 🌸" });
        break;
      case "theme cyberblue":
        setTheme("theme-cyberblue");
        newHistory.push({ type: "success", text: "Switched color deck to: Hyper Blue ⚡" });
        break;
      case "theme monochrome":
        setTheme("theme-monochrome");
        newHistory.push({ type: "success", text: "Switched color deck to: Minimal Carbon ⚪" });
        break;

      case "sound":
        const updated = soundFx.toggleSound();
        setSoundEnabled(updated);
        newHistory.push({ type: "success", text: `Audio UI Feedback: ${updated ? "ENABLED 🔊" : "MUTED 🔇"}` });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        onClose(false);
        return;

      default:
        if (trimmed.startsWith("theme")) {
          newHistory.push({
            type: "error",
            text: "Invalid theme name. Use: 'theme matrix', 'theme synthwave', 'theme cyberblue', or 'theme monochrome'.",
          });
        } else {
          newHistory.push({
            type: "error",
            text: `Command not recognized: '${cmdStr}'. Type 'help' for command manual.`,
          });
        }
    }

    setHistory(newHistory);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl cyber-glass-panel rounded-2xl border border-[var(--border-card-hover)] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border-card)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-xs font-mono font-bold text-[var(--text-main)] tracking-wide">
              HARIHARASUDHAN_TERMINAL.EXE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border-card)]">
              ESC to Close
            </span>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose(false);
              }}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="p-4 flex-1 overflow-y-auto space-y-2.5 font-mono text-xs leading-relaxed max-h-[360px] bg-black/40">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`${
                item.type === "user"
                  ? "text-[var(--accent-secondary)] font-semibold"
                  : item.type === "success"
                  ? "text-[var(--accent-primary)]"
                  : item.type === "error"
                  ? "text-rose-400"
                  : item.type === "sys"
                  ? "text-[var(--accent-tertiary)] opacity-90"
                  : "text-slate-300 whitespace-pre-wrap"
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={historyEndRef} />
        </div>

        {/* Command Line Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="p-3 bg-[var(--bg-secondary)] border-t border-[var(--border-card)] flex items-center gap-2"
        >
          <span className="text-[var(--accent-primary)] font-mono font-bold text-sm select-none">
            &gt;
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'skills', or 'theme matrix'..."
            className="w-full bg-transparent text-sm font-mono text-[var(--text-main)] placeholder:text-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-[var(--accent-primary)] text-slate-950 font-mono font-bold text-xs hover:opacity-90 transition-opacity"
          >
            EXEC
          </button>
        </form>

        {/* Quick Command Buttons Bar */}
        <div className="px-3 py-2 bg-black/60 border-t border-[var(--border-card)] flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-[10px] uppercase text-slate-400 font-semibold mr-1">Quick:</span>
          
          <button
            onClick={() => handleCommand("projects")}
            className="px-2.5 py-1 rounded bg-[var(--bg-card)] text-cyan-300 border border-[var(--border-card)] hover:border-[var(--accent-primary)] transition-colors flex items-center gap-1"
          >
            <FolderGit className="w-3 h-3" />
            <span>projects</span>
          </button>

          <button
            onClick={() => handleCommand("skills")}
            className="px-2.5 py-1 rounded bg-[var(--bg-card)] text-emerald-300 border border-[var(--border-card)] hover:border-[var(--accent-primary)] transition-colors flex items-center gap-1"
          >
            <Cpu className="w-3 h-3" />
            <span>skills</span>
          </button>

          <button
            onClick={() => handleCommand("contact")}
            className="px-2.5 py-1 rounded bg-[var(--bg-card)] text-purple-300 border border-[var(--border-card)] hover:border-[var(--accent-primary)] transition-colors flex items-center gap-1"
          >
            <Mail className="w-3 h-3" />
            <span>contact</span>
          </button>

          <button
            onClick={() => handleCommand("theme synthwave")}
            className="px-2.5 py-1 rounded bg-[var(--bg-card)] text-pink-300 border border-[var(--border-card)] hover:border-[var(--accent-primary)] transition-colors flex items-center gap-1"
          >
            <Sun className="w-3 h-3" />
            <span>synthwave</span>
          </button>

          <button
            onClick={() => handleCommand("sound")}
            className="px-2.5 py-1 rounded bg-[var(--bg-card)] text-amber-300 border border-[var(--border-card)] hover:border-[var(--accent-primary)] transition-colors flex items-center gap-1 ml-auto"
          >
            {soundEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
            <span>sound</span>
          </button>
        </div>

      </div>
    </div>
  );
}
