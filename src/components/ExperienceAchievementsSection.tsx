import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Trophy,
  Users,
  BadgeCheck,
  ExternalLink,
  CheckCircle2,
  Award,
  Sparkles,
} from 'lucide-react';
import {
  EXPERIENCE_DATA,
  ACHIEVEMENTS_DATA,
  LEADERSHIP_DATA,
  CERTIFICATIONS_DATA,
} from '../data/portfolioData';

export const ExperienceAchievementsSection: React.FC = () => {
  return (
    <div className="space-y-24 py-16 md:py-24 bg-[#020205]">
      {/* Experience & Hackathon Achievements */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/25 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              Industry &amp; Competitive Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience &amp; Hackathon Wins
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Enterprise engineering training paired with podium finishes across consecutive
            university and national hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Left: Industry Internship Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 rounded-2xl obsidian-card border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                Industry Internship
              </div>

              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.company} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <div className="text-base font-semibold text-sky-400 mt-0.5">
                      {exp.role}
                    </div>
                    <div className="text-xs font-mono text-slate-400 mt-1">
                      {exp.duration} • {exp.location}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-medium">
                    <Award className="w-3.5 h-3.5" />
                    Awarded {exp.badge}
                  </div>

                  <ul className="space-y-3 pt-2">
                    {exp.highlights.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Enterprise Workflows • Data &amp; BI</span>
              <span className="text-sky-400">Verified Internship</span>
            </div>
          </motion.div>

          {/* Right: Hackathon Achievements Stack */}
          <div className="lg:col-span-7 space-y-4">
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl obsidian-card border border-slate-800/90 hover:border-sky-500/40 p-6 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-sky-400 font-semibold">
                    {ach.organization}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                      ach.type === 'winner'
                        ? 'bg-amber-400/15 text-amber-300 border border-amber-400/35'
                        : ach.type === 'podium'
                        ? 'bg-sky-500/15 text-sky-300 border border-sky-400/35'
                        : 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/35'
                    }`}
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    {ach.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {ach.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-2">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Certifications Section */}
      <section
        id="leadership"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Leadership & Campus Responsibilities */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/25 mb-3">
                <Users className="w-3.5 h-3.5" />
                Leadership &amp; Extracurricular
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Campus Technical Leadership
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Driving student engineering chapters, cloud communities, and academic representation
                at The NorthCap University.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEADERSHIP_DATA.map((item, idx) => (
                <motion.div
                  key={item.role + item.organization}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.07 }}
                  className="p-5 rounded-2xl obsidian-card border border-slate-800/90 hover:border-sky-500/35 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-sky-400 uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      {item.scope}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                      {item.role}
                    </h3>
                    <div className="text-xs font-medium text-slate-400 mt-0.5">
                      {item.organization}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Verifiable Certifications */}
          <div id="certifications" className="lg:col-span-5 space-y-6 scroll-mt-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/25 mb-3">
                <BadgeCheck className="w-3.5 h-3.5" />
                Credentials &amp; Training
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Certifications
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Verified machine learning and cloud engineering coursework.
              </p>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl obsidian-card border border-slate-800/90 hover:border-sky-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      {cert.date}
                    </span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-sky-400">
                    {cert.issuer}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {cert.credentialNote}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
