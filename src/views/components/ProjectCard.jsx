import { motion } from 'framer-motion';
import { ArrowUpRight, Blocks, Github, Maximize2, Play } from 'lucide-react';
import { useState } from 'react';

export function ProjectCard({ project, onArchitectureClick, onGalleryOpen, index }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const Icon = project.icon;
  const previewStats = project.preview?.stats ?? [];
  const mediaItems = project.media ?? [];
  const activeMedia = mediaItems[activeMediaIndex] ?? mediaItems[0];

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
          <div className={`project-logo-frame ${activeMedia ? 'project-logo-frame--media' : ''}`}>
            {activeMedia ? (
              <>
                <button
                  type="button"
                  className="project-media-frame project-media-frame--button"
                  onClick={() => onGalleryOpen(project, activeMediaIndex)}
                  aria-label={`Open ${project.name} ${activeMedia.label} screenshot gallery`}
                  data-cursor="Gallery"
                >
                  <img
                    className="project-media-image"
                    src={activeMedia.src}
                    alt={activeMedia.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-media-caption">
                    <span>{activeMedia.label}</span>
                    <strong>{activeMedia.description}</strong>
                  </div>
                  <span className="project-media-expand">
                    <Maximize2 size={15} />
                    View gallery
                  </span>
                </button>
                <div className="project-media-controls" aria-label={`${project.name} screenshots`}>
                  {mediaItems.map((item, mediaIndex) => (
                    <button
                      type="button"
                      key={item.label}
                      className={mediaIndex === activeMediaIndex ? 'project-media-dot project-media-dot--active' : 'project-media-dot'}
                      onClick={() => setActiveMediaIndex(mediaIndex)}
                      aria-label={`Show ${item.label} preview`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <img src={project.image} alt={`${project.name} logo`} loading="lazy" decoding="async" />
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
              </>
            )}
          </div>
          {activeMedia ? (
            <div className="project-preview-meta">
              <span>
                <Play size={15} fill="currentColor" />
                {project.status ?? 'Case study'}
              </span>
              {previewStats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
          ) : (
            <div className="preview-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
      </div>

      <div className="project-content">
        <span className="project-type">
          <Icon size={16} />
          {project.type}
        </span>
        <div className="project-title-lockup">
          <span className="project-favicon" aria-hidden="true">
            <img src={project.image} alt="" loading="lazy" decoding="async" />
          </span>
          <div>
            <h3>{project.name}</h3>
            <span>{project.status ?? 'Case study'}</span>
          </div>
        </div>
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
