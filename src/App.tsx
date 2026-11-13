import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EducationSkillsSection } from './components/EducationSkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceAchievementsSection } from './components/ExperienceAchievementsSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />
      <main>
        <HeroSection />
        <div className="border-t border-slate-900/80">
          <EducationSkillsSection />
        </div>
        <div className="border-t border-slate-900/80 bg-[#020617]">
          <ProjectsSection />
        </div>
        <div className="border-t border-slate-900/80">
          <ExperienceAchievementsSection />
        </div>
        <div className="border-t border-slate-900/80">
          <ContactFooterSection />
        </div>
      </main>
    </div>
  );
};

export default App;
