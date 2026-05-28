import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, X } from 'lucide-react';
import { useEffect } from 'react';

export function ArchitectureModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="architecture-title"
          onMouseDown={onClose}
        >
          <motion.div
            className="architecture-modal"
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 18 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className="icon-button modal-close" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
            <span className="eyebrow">Architecture Preview</span>
            <h3 id="architecture-title">{project.name} request flow</h3>
            <p>{project.architectureNote}</p>

            <div className="modal-project-meta" aria-label={`${project.name} project summary`}>
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>{project.status ?? 'Case study'}</strong>
              </div>
              <div>
                <span>Stack</span>
                <strong>{project.techStack.slice(0, 4).join(' / ')}</strong>
              </div>
            </div>

            {project.caseStudy ? (
              <div className="case-study-grid">
                <article>
                  <span>Problem</span>
                  <p>{project.caseStudy.problem}</p>
                </article>
                <article>
                  <span>Solution</span>
                  <p>{project.caseStudy.solution}</p>
                </article>
                <article>
                  <span>Outcome</span>
                  <p>{project.caseStudy.outcome}</p>
                </article>
              </div>
            ) : null}

            {project.engineeringHighlights?.length ? (
              <div className="modal-engineering">
                <span className="eyebrow">Engineering Highlights</span>
                <div className="modal-engineering-grid">
                  {project.engineeringHighlights.map((highlight) => (
                    <article key={highlight.title}>
                      <strong>{highlight.title}</strong>
                      <p>{highlight.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            <h4 className="architecture-subtitle">Request lifecycle</h4>
            <div className="architecture-flow">
              {project.architecture.map((step, index) => (
                <div key={step} className="architecture-step-group">
                  <div className="architecture-step">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step}</strong>
                  </div>
                  {index < project.architecture.length - 1 ? (
                    <ArrowDown className="architecture-arrow" size={20} />
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
