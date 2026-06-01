import { useState } from 'react';
import { projects } from '../../models/portfolio.model';
import { ArchitectureModal } from '../components/ArchitectureModal.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { ProjectGalleryModal } from '../components/ProjectGalleryModal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);

  return (
    <section className="content-section project-section section-shell" id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Featured builds with frontend polish and backend thinking."
        copy="Each project is presented like a product surface, with visible implementation notes and architecture previews for the engineering layer."
      />

      <div className="projects-stack">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onArchitectureClick={setActiveProject}
            onGalleryOpen={(galleryProject, mediaIndex) =>
              setActiveGallery({ project: galleryProject, index: mediaIndex })
            }
          />
        ))}
      </div>

      <ArchitectureModal project={activeProject} onClose={() => setActiveProject(null)} />
      <ProjectGalleryModal gallery={activeGallery} onClose={() => setActiveGallery(null)} />
    </section>
  );
}
