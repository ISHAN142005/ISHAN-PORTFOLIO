import React from 'react';
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
} from 'lucide-react';
import { PERSONAL_INFO, HERO_METRICS, RESUME_URL } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

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
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-300 border border-sky-500/25 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for SDE, Quant & AI/ML Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/25">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                CGPA: 9.53 / 10.0
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono text-sky-400 tracking-wide uppercase">
                Software Development Engineer Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-50 leading-[1.08]">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 leading-snug pt-1">
                {PERSONAL_INFO.role} •{' '}
                <span className="text-sky-400">{PERSONAL_INFO.tagline}</span>
              </h2>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.headline} Currently pursuing a B.Tech in CSE at{' '}
              <span className="text-slate-100 font-medium">
                The NorthCap University, Gurugram
              </span>{' '}
              with a <span className="text-sky-400 font-semibold">9.53 CGPA</span>, combining
              rigorous algorithmic foundations with production-ready engineering.
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
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-sky-300 border border-sky-500/30 hover:border-sky-400/60 font-semibold text-sm sm:text-base transition-all"
                title="Direct Download PDF"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm sm:text-base transition-all group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Coding & Professional Profiles Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all"
              >
                <Github className="w-4 h-4 text-sky-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={PERSONAL_INFO.links.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>HackerRank</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Developer Terminal Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#0f172a]/90 border border-slate-800/90 shadow-2xl shadow-sky-950/30 overflow-hidden backdrop-blur-xl">
              {/* Terminal Top Bar */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>ishan@portfolio:~/engineering-profile.ts</span>
                </div>
                <span className="text-[11px] font-mono text-sky-400/80">UTF-8</span>
              </div>

              {/* Code Content */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-3 text-slate-300">
                <div>
                  <span className="text-sky-400">const</span>{' '}
                  <span className="text-blue-300 font-semibold">engineer</span> = {'{'}
                </div>
                <div className="pl-4 space-y-1.5">
                  <div>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">&apos;Ishan Bohra&apos;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">university:</span>{' '}
                    <span className="text-emerald-300">
                      &apos;The NorthCap University (B.Tech CSE)&apos;
                    </span>
                    ,
                  </div>
                  <div>
                    <span className="text-slate-400">cgpa:</span>{' '}
                    <span className="text-amber-300 font-bold">9.53</span>,{' '}
                    <span className="text-slate-500">// Class of 2029</span>
                  </div>
                  <div>
                    <span className="text-slate-400">domains:</span> [
                    <span className="text-sky-300">&apos;Full-Stack Web&apos;</span>,{' '}
                    <span className="text-sky-300">&apos;Quant Systems&apos;</span>,{' '}
                    <span className="text-sky-300">&apos;AI/ML &amp; C++&apos;</span>],
                  </div>
                  <div>
                    <span className="text-slate-400">flagshipSystems:</span> [
                    <div className="pl-4 text-xs text-slate-300 space-y-1 py-1">
                      <div>
                        • <span className="text-sky-400 font-semibold">Chronovect</span> (NSE Nifty
                        100 Quant • 213 Tests)
                      </div>
                      <div>
                        • <span className="text-sky-400 font-semibold">Together</span> (33+ Campus
                        Next.js 16 Platform)
                      </div>
                      <div>
                        • <span className="text-sky-400 font-semibold">SamudraVedh</span> (SIH 2026
                        3D Ocean U-Net AI)
                      </div>
                    </div>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-400">hackathons:</span>{' '}
                    <span className="text-emerald-300">
                      &apos;1st Place &amp; 3rd Place (Xebia) • SIH 2026&apos;
                    </span>
                  </div>
                </div>
                <div>{'};'}</div>

                {/* Quick Status Footer Inside Terminal */}
                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    Status: Ready to build &amp; ship
                  </span>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 underline underline-offset-4 font-semibold"
                  >
                    open_resume.pdf →
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
              className="p-5 rounded-2xl bg-[#0f172a]/75 hover:bg-[#0f172a] border border-slate-800/90 hover:border-sky-500/40 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent group-hover:from-sky-300 group-hover:to-blue-300">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-100 mt-1">{metric.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{metric.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
