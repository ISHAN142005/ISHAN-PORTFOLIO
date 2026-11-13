import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  Award,
  Sparkles,
  Terminal,
  ExternalLink,
  Palette,
  Play,
  RotateCcw,
} from 'lucide-react';
import { PERSONAL_INFO, HERO_METRICS, RESUME_URL } from '../data/portfolioData';
import { usePortfolioTheme, PORTFOLIO_THEMES } from '../context/ThemeContext';

type TerminalCmd = 'whoami' | 'projects' | 'quant' | 'cgpa' | 'wins' | 'certs';

const TERMINAL_OUTPUTS: Record<
  TerminalCmd,
  { command: string; lines: { label?: string; text: string; highlight?: string }[] }
> = {
  whoami: {
    command: 'ishan --profile --verbose',
    lines: [
      { label: 'NAME', text: 'Ishan Bohra (B.Tech CSE @ NorthCap University, Gurugram)' },
      { label: 'ROLE', text: 'Full-Stack, Quantitative Systems & AI/ML Developer' },
      { label: 'ACADEMICS', text: '9.53 / 10.0 CGPA • Class XII: 88.0% • Class X: 92.17%', highlight: '9.53 CGPA' },
      { label: 'STACK', text: 'Python, TypeScript, Next.js 16, React 19, FastAPI, PyTorch, C++/SFML, C/GTK4' },
      { label: 'STATUS', text: 'Open for SDE, Quantitative & AI/ML Internships' },
    ],
  },
  projects: {
    command: 'ls -la ~/flagship-systems/',
    lines: [
      { label: '01', text: 'Chronovect — NSE Nifty 100 Quant Backtesting Engine (213 Passing Tests)' },
      { label: '02', text: 'Together — Multi-Campus Platform across 33+ Indian Universities (Next.js 16)' },
      { label: '03', text: 'SamudraVedh — 3D Ocean Thermal Reconstruction U-Net AI (SIH 2026 PS26066)' },
      { label: '04', text: 'The Rise of Luminary — C++/SFML 2D RPG with Modular FSM (3rd Place Xebia)' },
      { label: '05', text: 'GUI Hangman: Haunted Forest — Native C/GTK4 + Firebase Web App' },
      { label: '06', text: 'Royal Diwali — 6-Stage HTML5 Canvas Physics & Web Audio Experience' },
    ],
  },
  quant: {
    command: 'pytest chronovect/ --market=NSE_NIFTY_100',
    lines: [
      { label: 'ENGINE', text: 'Zero look-ahead bias (deterministic next_open execution)' },
      { label: 'COSTS', text: 'Statutory Indian equities: STT + NSE Charges + SEBI + Stamp Duty + GST' },
      { label: 'STORAGE', text: 'Columnar Apache Parquet / PyArrow lake with automated data audit gate' },
      { label: 'RESULT', text: '213 passed in 1.48s — 100% deterministic attribution verified ✓' },
    ],
  },
  cgpa: {
    command: 'cat ~/academics/transcript.json',
    lines: [
      { label: 'UNIVERSITY', text: 'The NorthCap University, Gurugram (2025 – 2029)' },
      { label: 'DEGREE', text: 'B.Tech in Computer Science and Engineering (2nd Year)' },
      { label: 'CGPA', text: '9.53 / 10.0 (Distinction Standing)' },
      { label: 'BOARDS', text: 'Class X: 92.17% | Class XII: 88.0%' },
    ],
  },
  wins: {
    command: 'ishan --achievements --leadership',
    lines: [
      { label: '1ST PLACE', text: 'Winner — First-Semester Hackathon organized by Xebia' },
      { label: '3RD PLACE', text: '2nd Runner-Up — Second-Semester Xebia Hackathon (The Rise of Luminary)' },
      { label: 'SIH 2026', text: 'Cleared Smart India Hackathon 2026 Internal Round (SamudraVedh PS26066)' },
      { label: 'INTERN', text: 'Xebia IT Architects Virtual Intern (Certificate of Appreciation)' },
      { label: 'LEADERSHIP', text: 'Exec Secretary (Optica) • Tech Head (CLOUD IoT) • Sec (Brainstorming) • CR' },
    ],
  },
  certs: {
    command: 'verify --credentials --all',
    lines: [
      { label: 'STANFORD', text: 'Supervised Machine Learning: Regression & Classification (DeepLearning.AI)' },
      { label: 'VERIFY', text: 'https://coursera.org/verify/2JFMXNK53ZWU (Oct 2026)' },
      { label: 'GOOGLE', text: 'Introduction to AIML Using Google Cloud — Organized by Xebia (Nov 2025)' },
    ],
  },
};

export const HeroSection: React.FC = () => {
  const { theme, setTheme } = usePortfolioTheme();
  const [activeCmd, setActiveCmd] = useState<TerminalCmd>('whoami');

  const currentOutput = TERMINAL_OUTPUTS[activeCmd];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center bg-[#020205]"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-sky-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-[32rem] h-[32rem] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Identity & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status & CGPA Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#090912] text-sky-300 border border-sky-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for SDE, Quant &amp; AI/ML Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-500/15 text-sky-300 border border-sky-500/35">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                CGPA: 9.53 / 10.0
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono text-sky-400 tracking-widest uppercase">
                // Software Development Engineer Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06]">
                Ishan{' '}
                <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Bohra
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 leading-snug pt-1">
                {PERSONAL_INFO.role} •{' '}
                <span className="text-sky-400">{PERSONAL_INFO.tagline}</span>
              </h2>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.headline} Pursuing B.Tech CSE at{' '}
              <span className="text-white font-semibold">
                The NorthCap University, Gurugram
              </span>{' '}
              with a <span className="text-sky-400 font-bold">9.53 / 10.0 CGPA</span>.
            </p>

            {/* Location & Direct Contact Strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300 font-mono pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                {PERSONAL_INFO.location}
              </span>
              <a
                href={PERSONAL_INFO.emailHref}
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                {PERSONAL_INFO.email}
              </a>
              <a
                href={PERSONAL_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 stroke-[2.5]" />
                <span>View / Download Resume (PDF)</span>
              </a>

              <a
                href={RESUME_URL}
                download="Ishan_Bohra_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#090912] hover:bg-slate-900 text-sky-300 border border-sky-500/35 hover:border-sky-400/70 font-semibold text-sm sm:text-base transition-all"
                title="Direct Download PDF"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#090912] hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 font-semibold text-sm sm:text-base transition-all group"
              >
                <span>Explore Systems</span>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Coding Profiles + Instant Theme Switcher Bar */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#080810] hover:bg-slate-900 border border-slate-800/90 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all"
                >
                  <Github className="w-4 h-4 text-sky-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#080810] hover:bg-slate-900 border border-slate-800/90 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#080810] hover:bg-slate-900 border border-slate-800/90 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={PERSONAL_INFO.links.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#080810] hover:bg-slate-900 border border-slate-800/90 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>HackerRank</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* Live Black + Colored Theme Dock */}
              <div className="inline-flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-[#07070d] border border-slate-800/90">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-slate-400">
                  <Palette className="w-3.5 h-3.5 text-sky-400" />
                  <span>Theme:</span>
                </span>
                {PORTFOLIO_THEMES.map((t) => {
                  const active = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTheme(t.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-mono transition-all ${
                        active
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 font-semibold shadow-sm'
                          : 'bg-[#030307] text-slate-400 hover:text-slate-200 border border-slate-800/80'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${t.swatchPrimary}, ${t.swatchSecondary})`,
                        }}
                      />
                      <span>{t.name.split(' ')[1] || t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Engineering Shell */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl obsidian-card border border-slate-800/90 overflow-hidden">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-[#040408] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>ishan@ncu-sde: ~/interactive-shell</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCmd('whoami')}
                  className="text-[11px] font-mono text-slate-400 hover:text-sky-400 inline-flex items-center gap-1"
                  title="Reset terminal"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>reset</span>
                </button>
              </div>

              {/* Interactive Command Selector Bar */}
              <div className="px-4 py-2.5 bg-[#080810] border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto">
                <span className="text-[11px] font-mono text-slate-500 shrink-0 mr-1">
                  Run:
                </span>
                {(
                  [
                    { id: 'whoami', label: 'whoami' },
                    { id: 'projects', label: 'projects' },
                    { id: 'quant', label: 'quant-test' },
                    { id: 'cgpa', label: 'academics' },
                    { id: 'wins', label: 'wins' },
                    { id: 'certs', label: 'certs' },
                  ] as { id: TerminalCmd; label: string }[]
                ).map((item) => {
                  const active = activeCmd === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveCmd(item.id)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-all shrink-0 ${
                        active
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 font-semibold'
                          : 'bg-[#030307] text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      <Play className="w-2.5 h-2.5 text-sky-400" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Terminal Live Output Body */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-3.5 min-h-[290px] flex flex-col justify-between bg-[#050509]">
                <div className="space-y-3">
                  {/* Command Prompt Line */}
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-sky-400 font-bold">➜</span>
                    <span className="text-blue-400 font-semibold">~</span>
                    <span className="text-white font-semibold">
                      {currentOutput.command}
                    </span>
                    <span className="w-2 h-4 bg-sky-400 animate-pulse inline-block" />
                  </div>

                  {/* Output Lines */}
                  <motion.div
                    key={activeCmd}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 pt-1 border-l-2 border-sky-500/30 pl-3.5"
                  >
                    {currentOutput.lines.map((line, i) => (
                      <div key={i} className="text-xs sm:text-[13px] leading-relaxed">
                        {line.label && (
                          <span className="inline-block px-1.5 py-0.5 mr-2 rounded text-[10px] font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                            {line.label}
                          </span>
                        )}
                        <span className="text-slate-200">{line.text}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Terminal Footer */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Exit code: 0 (OK)
                  </span>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 underline underline-offset-4 font-semibold"
                  >
                    open Ishan_Bohra_Resume.pdf →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Highlight Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-2xl obsidian-card border border-slate-800/90 hover:border-sky-500/45 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-100 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{metric.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
