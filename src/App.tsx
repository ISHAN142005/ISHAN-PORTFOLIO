import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { HeroSection } from './components/HeroSection';
import { EducationSkillsSection } from './components/EducationSkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceAchievementsSection } from './components/ExperienceAchievementsSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#020205] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
        <Navbar />
        <CommandPalette />
        <main>
          <HeroSection />
          <div className="border-t border-white/[0.06]">
            <EducationSkillsSection />
          </div>
          <div className="border-t border-white/[0.06] bg-[#020205]">
            <ProjectsSection />
          </div>
          <div className="border-t border-white/[0.06]">
            <ExperienceAchievementsSection />
          </div>
          <div className="border-t border-white/[0.06] bg-[#020205]">
            <ContactFooterSection />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
