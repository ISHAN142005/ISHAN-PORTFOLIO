import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  FileText,
  Download,
  Menu,
  X,
  Palette,
  Command,
  Code2,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_URL } from '../data/portfolioData';
import { usePortfolioTheme, PORTFOLIO_THEMES } from '../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Education', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme, setCommandOpen } = usePortfolioTheme();
  const currentThemeMeta =
    PORTFOLIO_THEMES.find((t) => t.id === theme) || PORTFOLIO_THEMES[0];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030307]/90 backdrop-blur-2xl border-b border-slate-800/80 shadow-2xl shadow-black py-3'
          : 'bg-[#030307]/70 backdrop-blur-xl border-b border-white/[0.06] py-4'
      }`}
    >
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 origin-left z-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
          aria-label="Ishan Bohra Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-400/40 transition-all">
            <div className="w-full h-full bg-[#030307] rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-bold text-sm tracking-tight bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                IB
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 tracking-tight text-base group-hover:text-sky-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/25">
                <Code2 className="w-3 h-3" />
                SDE
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono hidden xl:block">
              CGPA 9.53 • Full-Stack • Quant • AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-1 bg-[#08080f]/90 border border-white/[0.07] rounded-full px-2 py-1"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-white/[0.04] transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Controls: Theme Switcher + Command Palette + Resume CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Ctrl+K Command Palette Button */}
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#090912] hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-300 hover:text-sky-300 transition-all"
            title="Open Command Palette (Ctrl + K)"
          >
            <Command className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden xl:inline">Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-slate-400 border border-slate-800">
              Ctrl K
            </kbd>
          </button>

          {/* Theme Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setThemeDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#090912] hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-200 transition-all"
              title="Switch Black & Accent Color Theme"
              aria-expanded={themeDropdownOpen}
            >
              <span
                className="w-3 h-3 rounded-full ring-2 ring-white/20"
                style={{
                  background: `linear-gradient(135deg, ${currentThemeMeta.swatchPrimary}, ${currentThemeMeta.swatchSecondary})`,
                }}
              />
              <Palette className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden xl:inline">{currentThemeMeta.name}</span>
            </button>

            <AnimatePresence>
              {themeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#07070d] border border-slate-800 shadow-2xl shadow-black p-2 z-50"
                >
                  <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800/80 mb-1">
                    Pitch-Black Accent Themes
                  </div>
                  {PORTFOLIO_THEMES.map((t) => {
                    const active = theme === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setTheme(t.id);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl text-left transition-all ${
                          active
                            ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                            : 'hover:bg-white/[0.04] text-slate-300 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/20"
                            style={{
                              background: `linear-gradient(135deg, ${t.swatchPrimary}, ${t.swatchSecondary})`,
                            }}
                          />
                          <div>
                            <div className="text-xs font-semibold">{t.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              {t.tagline.replace('Pitch Black • ', '')}
                            </div>
                          </div>
                        </div>
                        {active && <Check className="w-3.5 h-3.5 text-sky-400" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Prominent View / Download Resume Button */}
          <div className="flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 p-[1px] shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-l-[11px] bg-[#040409] hover:bg-[#040409]/70 text-xs sm:text-sm font-semibold text-slate-100 transition-colors"
              title="Open Resume PDF in new tab"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Resume</span>
            </a>
            <a
              href={RESUME_URL}
              download="Ishan_Bohra_Resume.pdf"
              className="inline-flex items-center justify-center px-2.5 py-2 rounded-r-[11px] bg-sky-500/25 hover:bg-sky-500/35 text-sky-200 border-l border-sky-400/30 transition-colors"
              title="Download Ishan_Bohra_Resume.pdf"
              aria-label="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="p-2.5 rounded-xl bg-[#090912] border border-slate-800 text-sky-400"
            aria-label="Open Command Palette"
          >
            <Command className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#090912] border border-slate-800 text-slate-200 hover:text-sky-400 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden bg-[#030307]/98 backdrop-blur-2xl border-b border-slate-800"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {/* Mobile Theme Selector */}
              <div className="p-3 rounded-xl bg-[#080810] border border-slate-800/90">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-sky-400" />
                  Select Black &amp; Accent Theme
                </div>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_THEMES.map((t) => {
                    const active = theme === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTheme(t.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          active
                            ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 font-semibold'
                            : 'bg-black text-slate-400 border border-slate-800'
                        }`}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: t.swatchPrimary }}
                        />
                        <span>{t.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-white/[0.04] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20"
                >
                  <FileText className="w-4 h-4" />
                  View Resume (PDF)
                </a>
                <a
                  href={RESUME_URL}
                  download="Ishan_Bohra_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#090912] border border-sky-500/40 text-sky-300 font-semibold text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
