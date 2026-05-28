import { motion } from 'framer-motion';
import { ArrowUpRight, Blocks, Github, Play } from 'lucide-react';

export function ProjectCard({ project, onArchitectureClick, index }) {
  const Icon = project.icon;
  const previewStats = project.preview?.stats ?? [];

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-preview">
        <div className="project-preview__window">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="project-logo-frame">
            <img src={project.image} alt={`${project.name} logo`} loading="lazy" />
            <div className="project-preview-copy">
              <strong>{project.preview?.title ?? project.name}</strong>
              <p>{project.preview?.subtitle ?? project.overview}</p>
            </div>
            <div className="project-preview-tags" aria-label={`${project.name} preview highlights`}>
              {previewStats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
            <span className="project-preview-status">
              <Play size={15} fill="currentColor" />
              {project.status ?? 'Case study'}
            </span>
          </div>
          <div className="preview-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="project-content">
        <span className="project-type">
          <Icon size={16} />
          {project.type}
        </span>
        <h3>{project.name}</h3>
        <p>{project.overview}</p>

        <div className="project-role">
          <span>Role</span>
          <strong>{project.role}</strong>
        </div>

        <div className="project-metrics" aria-label={`${project.name} project metrics`}>
          {project.metrics?.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>

        <div className="project-list">
          <strong>Key features</strong>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="stack-row">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-highlights">
          {project.highlights.map((highlight) => (
            <p key={highlight}>{highlight}</p>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl ? (
            <a className="text-button" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
              <ArrowUpRight size={17} />
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a className="text-button" href={project.sourceUrl} target="_blank" rel="noreferrer">
              <Github size={17} />
              Source
            </a>
          ) : null}
          <button type="button" className="text-button" onClick={() => onArchitectureClick(project)}>
            <Blocks size={17} />
            Architecture
          </button>
          <a className="text-button" href="#contact">
            Discuss project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
