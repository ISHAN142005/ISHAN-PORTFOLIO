import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Terminal,
  Layers,
  Cpu,
  Database,
  Sparkles,
} from 'lucide-react';
import { EDUCATION_DATA, SKILL_CATEGORIES, SkillCategory } from '../data/portfolioData';

const renderCategoryIcon = (iconName: SkillCategory['iconName']) => {
  switch (iconName) {
    case 'Terminal':
      return <Terminal className="w-5 h-5 text-sky-400" />;
    case 'Layers':
      return <Layers className="w-5 h-5 text-blue-400" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-sky-400" />;
    case 'Database':
      return <Database className="w-5 h-5 text-blue-400" />;
  }
};

export const EducationSkillsSection: React.FC = () => {
  return (
    <div className="space-y-24 py-16 md:py-24 bg-[#020205]">
      {/* Education Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/25 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education &amp; Academic Standing
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Consistent academic distinction paired with hands-on systems engineering and research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Primary University Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-8 rounded-2xl obsidian-card border border-slate-800/90 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 uppercase tracking-wider">
                    2025 – 2029 (Expected) • 2nd Year
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {EDUCATION_DATA.university}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 font-medium mt-0.5">
                    {EDUCATION_DATA.degree}
                  </p>
                </div>

                {/* Prominent CGPA Badge */}
                <div className="px-5 py-3 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-sky-400/45 shadow-lg shadow-sky-500/10 text-right">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-sky-300">
                    Current CGPA
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                    {EDUCATION_DATA.cgpa}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
                Pursuing an undergraduate specialization in Computer Science and Engineering with a
                strong focus on quantitative algorithms, full-stack web architecture, deep learning,
                and low-level C/C++ systems development.
              </p>

              {/* Core Focus Pills */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  Core Engineering &amp; Coursework Focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.courseworkFocus.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#040408] text-slate-200 border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* School & Academic Benchmarks Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-4 rounded-2xl obsidian-card border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                <Award className="w-4 h-4" />
                Board Examination Benchmarks
              </div>
              <h3 className="text-lg font-bold text-white">School Academic Record</h3>
              <p className="text-xs text-slate-400 mt-1">
                High-distinction performance in national board examinations.
              </p>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.schoolScores.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-[#040408] border border-slate-800/90 flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-semibold text-slate-200">{item.label}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">Aggregate Score</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-sky-400">
                    {item.score}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/25 text-xs text-sky-200 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                Ranked among top performers in the CSE cohort with a <strong>9.53 / 10.0</strong>{' '}
                cumulative GPA.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/25 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills, Frameworks &amp; Tooling
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Full-spectrum stack spanning quantitative Python engines, modern TypeScript/Next.js web
            apps, PyTorch deep learning, and native C/C++ systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl obsidian-card border border-slate-800/90 hover:border-sky-500/40 p-6 sm:p-7 transition-all"
            >
              <div className="flex items-start gap-3.5 mb-5">
                <div className="p-3 rounded-xl bg-[#040408] border border-slate-800 shrink-0">
                  {renderCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{category.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      skill.highlight
                        ? 'bg-sky-500/15 text-sky-200 border border-sky-500/35 shadow-sm'
                        : 'bg-[#040408] text-slate-300 border border-slate-800/90'
                    }`}
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-black text-slate-400 border border-slate-800">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
