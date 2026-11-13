import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  FileText,
  Download,
  Copy,
  Check,
  ExternalLink,
  ArrowUp,
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_URL } from '../data/portfolioData';

export const ContactFooterSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (value: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="rounded-3xl obsidian-card border border-slate-800/90 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Pitch & Direct Contact */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/25">
                <Mail className="w-3.5 h-3.5" />
                Let&apos;s Connect
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Open for SDE, Quantitative &amp; AI/ML Roles
              </h2>

              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-xl">
                Whether you&apos;re recruiting for software engineering internships, looking to
                collaborate on quantitative systems or deep-learning research, or want a walkthrough
                of my private repositories — reach out directly below.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-[#040408] border border-slate-800/90 flex items-center justify-between gap-3">
                  <a
                    href={PERSONAL_INFO.emailHref}
                    className="flex items-center gap-3 min-w-0 group"
                  >
                    <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Email</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-sky-400 truncate transition-colors">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-[#090912] hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-800 transition-colors shrink-0"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-[#040408] border border-slate-800/90 flex items-center justify-between gap-3">
                  <a
                    href={PERSONAL_INFO.phoneHref}
                    className="flex items-center gap-3 min-w-0 group"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Phone</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-sky-400 truncate transition-colors">
                        {PERSONAL_INFO.phone}
                      </div>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-[#090912] hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-800 transition-colors shrink-0"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Profiles */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#040408] border border-slate-800 text-xs font-mono text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {PERSONAL_INFO.location}
                </span>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#040408] hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-200 hover:text-sky-300 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#040408] hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-200 hover:text-sky-300 transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-sky-400" />
                  GitHub
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#040408] hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-200 hover:text-sky-300 transition-all"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  LeetCode
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={PERSONAL_INFO.links.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#040408] hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-200 hover:text-sky-300 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  HackerRank
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Right Column: Resume Snapshot Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-5 rounded-2xl bg-[#040408] border border-sky-500/35 p-6 sm:p-8 space-y-5 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">One-Page Resume</h3>
                    <p className="text-xs font-mono text-slate-400">Ishan_Bohra_Resume.pdf</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                  Verified PDF
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 space-y-2 border-y border-slate-800/80 py-4 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">University:</span>
                  <span className="text-slate-200">NorthCap Univ. (B.Tech CSE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cumulative GPA:</span>
                  <span className="text-sky-400 font-bold">9.53 / 10.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Key Domains:</span>
                  <span className="text-slate-200">Full-Stack • Quant • AI/ML</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
                <a
                  href={RESUME_URL}
                  download="Ishan_Bohra_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#090912] hover:bg-slate-800 text-sky-300 border border-sky-500/35 font-semibold text-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#020205] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#080810] border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-sky-400">
              IB
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              © {new Date().getFullYear()}{' '}
              <span className="text-slate-200 font-semibold">{PERSONAL_INFO.name}</span>. Built with
              React 18, TypeScript, Tailwind CSS &amp; Framer Motion.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
            >
              Resume (PDF)
            </a>
            <span className="text-slate-800">•</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
