import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  Github,
  Lock,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Code2,
} from 'lucide-react';
import {
  PROJECTS_DATA,
  ProjectCategory,
  PERSONAL_INFO,
} from '../data/portfolioData';

const FILTER_TABS: ProjectCategory[] = [
  'All',
  'Full-Stack',
  'AI & Quant',
  'Systems & Games',
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((project) =>
      project.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  const getCategoryCount = (cat: ProjectCategory) => {
    if (cat === 'All') return PROJECTS_DATA.length;
    return PROJECTS_DATA.filter((p) => p.categories.includes(cat)).length;
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      {/* Header & Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
            Featured Systems &amp; Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Production full-stack platforms, Indian-market quantitative backtesting engines,
            satellite deep-learning models, and native C/C++ desktop architectures.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#0f172a] border border-slate-800/90 self-start lg:self-auto"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab;
            const count = getCategoryCount(tab);
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(tab)}
                className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'text-slate-300 hover:text-sky-300 hover:bg-slate-900/70'
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                    isActive
                      ? 'bg-slate-950/25 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl bg-[#0f172a]/90 border border-slate-800/90 hover:border-sky-500/45 overflow-hidden flex flex-col justify-between transition-all shadow-xl shadow-black/20 hover:shadow-sky-950/25"
            >
              {/* Subtle top gradient banner */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${
                  project.isPublic
                    ? 'from-sky-400 via-blue-500 to-emerald-400'
                    : 'from-sky-400 via-blue-500 to-indigo-500'
                }`}
              />

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                {/* Top Metadata & Title */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/25"
                        >
                          {cat}
                        </span>
                      ))}
                      {project.badge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          <Sparkles className="w-3 h-3 text-sky-400" />
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Repo Visibility Badge */}
                    {project.isPublic && project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Public Repo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-400 bg-slate-900/90 border border-slate-800">
                        <Lock className="w-3 h-3 text-amber-400/80" />
                        <span>Private Repo</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-50 group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-sky-400/90 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Quantitative / Engineering Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2.5 sm:p-3 rounded-xl bg-slate-950/75 border border-slate-800/80"
                      >
                        <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase truncate">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-sm font-bold font-mono text-sky-300 mt-0.5 truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Engineering Highlights Bullet List */}
                  <ul className="space-y-2 pt-1">
                    {project.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack & Action Footer */}
                <div className="pt-5 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {project.isPublic && project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Explore Source Code on GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=Architecture%20Walkthrough%20Request:%20${encodeURIComponent(
                          project.title
                        )}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors"
                      >
                        <Code2 className="w-4 h-4 text-sky-400" />
                        <span>Private Repository • Request Architecture Walkthrough →</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
