import { Navbar } from './views/components/Navbar.jsx';
import { AboutSection } from './views/sections/AboutSection.jsx';
import { ContactSection } from './views/sections/ContactSection.jsx';
import { GitHubSection } from './views/sections/GitHubSection.jsx';
import { HeroSection } from './views/sections/HeroSection.jsx';
import { InsightsSection } from './views/sections/InsightsSection.jsx';
import { ProjectsSection } from './views/sections/ProjectsSection.jsx';
import { SkillsSection } from './views/sections/SkillsSection.jsx';
import { TerminalSection } from './views/sections/TerminalSection.jsx';
import { ScrollProgress } from './views/components/ScrollProgress.jsx';
import { DeveloperCursor } from './views/components/DeveloperCursor.jsx';
import { SectionDivider } from './views/components/SectionDivider.jsx';
import { sectionDividers } from './models/portfolio.model.js';

export default function App() {
  return (
    <>
      <DeveloperCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider divider={sectionDividers[0]} />
        <AboutSection />
        <SectionDivider divider={sectionDividers[1]} />
        <SkillsSection />
        <SectionDivider divider={sectionDividers[2]} />
        <ProjectsSection />
        <SectionDivider divider={sectionDividers[3]} />
        <InsightsSection />
        <SectionDivider divider={sectionDividers[4]} />
        <TerminalSection />
        <SectionDivider divider={sectionDividers[5]} />
        <GitHubSection />
        <SectionDivider divider={sectionDividers[6]} />
        <ContactSection />
      </main>
    </>
  );
}
