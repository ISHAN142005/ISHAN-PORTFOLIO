import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Download,
  Menu,
  X,
  Github,
  Linkedin,
  Code2,
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_URL } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'About & Education', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience & Wins', href: '#experience' },
  { label: 'Leadership & Certs', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-[#020617]/60 backdrop-blur-md border-b border-slate-900/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Ishan Bohra Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1px] shadow-md shadow-sky-500/20 group-hover:shadow-sky-400/40 transition-all">
            <div className="w-full h-full bg-[#020617] rounded-[11px] flex items-center justify-center">
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
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Code2 className="w-3 h-3" />
                SDE
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:block">
              CGPA 9.53 • Full-Stack • Quant • AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-900/70 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 border border-transparent hover:border-slate-700 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800/70 border border-transparent hover:border-slate-700 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Prominent View / Download Resume Button */}
          <div className="flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 p-[1px] shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-l-[11px] bg-slate-950/90 hover:bg-slate-950/60 text-xs sm:text-sm font-semibold text-slate-100 transition-colors"
              title="Open Resume PDF in new tab"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Resume (PDF)</span>
            </a>
            <a
              href={RESUME_URL}
              download="Ishan_Bohra_Resume.pdf"
              className="inline-flex items-center justify-center px-2.5 py-2 rounded-r-[11px] bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border-l border-sky-400/30 transition-colors"
              title="Download Ishan_Bohra_Resume.pdf"
              aria-label="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden bg-[#020617]/95 backdrop-blur-2xl border-b border-slate-800"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-900/80 transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-3 mt-3 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/20"
                >
                  <FileText className="w-4 h-4" />
                  View Resume (PDF)
                </a>
                <a
                  href={RESUME_URL}
                  download="Ishan_Bohra_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-sky-500/40 text-sky-300 font-semibold text-sm hover:bg-slate-800"
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
