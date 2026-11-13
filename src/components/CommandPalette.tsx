import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Palette,
  FileText,
  Download,
  FolderGit2,
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  Check,
  X,
  ArrowRight,
  Compass,
} from 'lucide-react';
import { usePortfolioTheme, PORTFOLIO_THEMES } from '../context/ThemeContext';
import { PERSONAL_INFO, PROJECTS_DATA, RESUME_URL } from '../data/portfolioData';

interface CommandAction {
  id: string;
  group: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

export const CommandPalette: React.FC = () => {
  const { theme, setTheme, commandOpen, setCommandOpen } = usePortfolioTheme();
  const [query, setQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (commandOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [commandOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && commandOpen) {
        setCommandOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [commandOpen, setCommandOpen]);

  const jumpTo = (hash: string) => {
    setCommandOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
      setCommandOpen(false);
    }, 900);
  };

  const actions: CommandAction[] = [
    // Themes
    ...PORTFOLIO_THEMES.map((t) => ({
      id: `theme-${t.id}`,
      group: 'Black & Accent Themes',
      label: `Switch Theme: ${t.name}`,
      sublabel: t.tagline,
      icon: (
        <span
          className="w-4 h-4 rounded-full border border-white/20 shrink-0"
          style={{
            background: `linear-gradient(135deg, ${t.swatchPrimary}, ${t.swatchSecondary})`,
          }}
        />
      ),
      onSelect: () => {
        setTheme(t.id);
      },
    })),

    // Resume & Contact
    {
      id: 'open-resume',
      group: 'Resume & Direct Actions',
      label: 'View One-Page Resume (PDF)',
      sublabel: 'Opens Ishan_Bohra_Resume.pdf in a new tab',
      icon: <FileText className="w-4 h-4 text-sky-400" />,
      onSelect: () => {
        window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
        setCommandOpen(false);
      },
    },
    {
      id: 'download-resume',
      group: 'Resume & Direct Actions',
      label: 'Download Resume PDF',
      sublabel: 'Direct download Ishan_Bohra_Resume.pdf',
      icon: <Download className="w-4 h-4 text-sky-400" />,
      onSelect: () => {
        const a = document.createElement('a');
        a.href = RESUME_URL;
        a.download = 'Ishan_Bohra_Resume.pdf';
        a.click();
        setCommandOpen(false);
      },
    },
    {
      id: 'copy-email',
      group: 'Resume & Direct Actions',
      label:
        copiedId === 'copy-email'
          ? 'Copied ishanbohra1414@gmail.com!'
          : 'Copy Email Address',
      sublabel: PERSONAL_INFO.email,
      icon:
        copiedId === 'copy-email' ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Mail className="w-4 h-4 text-sky-400" />
        ),
      onSelect: () => copyText(PERSONAL_INFO.email, 'copy-email'),
    },
    {
      id: 'copy-phone',
      group: 'Resume & Direct Actions',
      label:
        copiedId === 'copy-phone'
          ? 'Copied +91 8290988121!'
          : 'Copy Phone Number',
      sublabel: PERSONAL_INFO.phone,
      icon:
        copiedId === 'copy-phone' ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Phone className="w-4 h-4 text-sky-400" />
        ),
      onSelect: () => copyText(PERSONAL_INFO.phone, 'copy-phone'),
    },

    // Navigation
    {
      id: 'nav-about',
      group: 'Navigate Sections',
      label: 'Go to Education & CGPA (9.53 / 10.0)',
      sublabel: 'The NorthCap University • B.Tech CSE',
      icon: <Compass className="w-4 h-4 text-sky-400" />,
      onSelect: () => jumpTo('#about'),
    },
    {
      id: 'nav-skills',
      group: 'Navigate Sections',
      label: 'Go to Technical Arsenal & Stack',
      sublabel: 'Python, Next.js 16, PyTorch, FastAPI, C++, GTK4',
      icon: <Compass className="w-4 h-4 text-sky-400" />,
      onSelect: () => jumpTo('#skills'),
    },
    {
      id: 'nav-projects',
      group: 'Navigate Sections',
      label: 'Go to Featured Projects Showcase',
      sublabel: '6 Production & Research Systems',
      icon: <FolderGit2 className="w-4 h-4 text-sky-400" />,
      onSelect: () => jumpTo('#projects'),
    },
    {
      id: 'nav-experience',
      group: 'Navigate Sections',
      label: 'Go to Experience, Hackathon Wins & Leadership',
      sublabel: 'Xebia Internship • 1st & 3rd Place • SIH 2026',
      icon: <Compass className="w-4 h-4 text-sky-400" />,
      onSelect: () => jumpTo('#experience'),
    },

    // Projects
    ...PROJECTS_DATA.map((p) => ({
      id: `proj-${p.id}`,
      group: 'Featured Projects',
      label: p.title,
      sublabel: `${p.subtitle} (${p.stack.slice(0, 3).join(', ')})`,
      icon: <FolderGit2 className="w-4 h-4 text-sky-400" />,
      onSelect: () => jumpTo('#projects'),
    })),

    // External Profiles
    {
      id: 'ext-github',
      group: 'External Profiles',
      label: 'Open GitHub (@ISHAN142005)',
      sublabel: PERSONAL_INFO.links.github,
      icon: <Github className="w-4 h-4 text-sky-400" />,
      onSelect: () => {
        window.open(PERSONAL_INFO.links.github, '_blank', 'noopener,noreferrer');
        setCommandOpen(false);
      },
    },
    {
      id: 'ext-linkedin',
      group: 'External Profiles',
      label: 'Open LinkedIn Profile',
      sublabel: PERSONAL_INFO.links.linkedin,
      icon: <Linkedin className="w-4 h-4 text-sky-400" />,
      onSelect: () => {
        window.open(PERSONAL_INFO.links.linkedin, '_blank', 'noopener,noreferrer');
        setCommandOpen(false);
      },
    },
    {
      id: 'ext-leetcode',
      group: 'External Profiles',
      label: 'Open LeetCode Profile',
      sublabel: PERSONAL_INFO.links.leetcode,
      icon: <Code2 className="w-4 h-4 text-amber-400" />,
      onSelect: () => {
        window.open(PERSONAL_INFO.links.leetcode, '_blank', 'noopener,noreferrer');
        setCommandOpen(false);
      },
    },
    {
      id: 'ext-hackerrank',
      group: 'External Profiles',
      label: 'Open HackerRank Profile',
      sublabel: PERSONAL_INFO.links.hackerrank,
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      onSelect: () => {
        window.open(PERSONAL_INFO.links.hackerrank, '_blank', 'noopener,noreferrer');
        setCommandOpen(false);
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.sublabel.toLowerCase().includes(query.toLowerCase()) ||
      a.group.toLowerCase().includes(query.toLowerCase())
  );

  const groups = Array.from(new Set(filtered.map((a) => a.group)));

  return (
    <AnimatePresence>
      {commandOpen && (
        <div className="fixed inset-0 z-[90] flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Command Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#07070c] border border-slate-800 shadow-2xl shadow-black overflow-hidden z-10"
          >
            {/* Top Search Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800/90 bg-[#040408]">
              <Search className="w-5 h-5 text-sky-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, project name, theme, or action..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setCommandOpen(false)}
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-mono"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Theme Pill Strip Inside Command Palette */}
            <div className="px-4 py-2.5 bg-[#090912] border-b border-slate-800/80 flex items-center justify-between gap-2 overflow-x-auto">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 shrink-0">
                <Palette className="w-3.5 h-3.5 text-sky-400" />
                <span>Instant Theme:</span>
              </div>
              <div className="flex items-center gap-1.5">
                {PORTFOLIO_THEMES.map((t) => {
                  const active = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTheme(t.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all shrink-0 ${
                        active
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 font-semibold'
                          : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: t.swatchPrimary }}
                      />
                      <span>{t.name.split(' ')[1] || t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Command List */}
            <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
              {groups.length === 0 ? (
                <div className="py-10 text-center text-sm text-slate-500 font-mono">
                  No matching commands found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                groups.map((group) => (
                  <div key={group} className="space-y-1">
                    <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      {group}
                    </div>
                    {filtered
                      .filter((item) => item.group === group)
                      .map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={item.onSelect}
                          className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-sky-500/10 text-left group transition-all border border-transparent hover:border-sky-500/25"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-sky-500/40 shrink-0">
                              {item.icon}
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-sky-300 truncate">
                                {item.label}
                              </div>
                              <div className="text-[11px] text-slate-400 truncate">
                                {item.sublabel}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </button>
                      ))}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-[#040408] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Press ESC to close • Ctrl+K anywhere to toggle</span>
              <span className="text-sky-400">Ishan Bohra Command Center</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
