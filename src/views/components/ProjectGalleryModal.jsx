import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export function ProjectGalleryModal({ gallery, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = gallery?.project;
  const mediaItems = useMemo(() => project?.media ?? [], [project]);
  const activeMedia = mediaItems[activeIndex] ?? mediaItems[0];

  useEffect(() => {
    if (!gallery) {
      return;
    }

    setActiveIndex(gallery.index ?? 0);
  }, [gallery]);

  useEffect(() => {
    if (!gallery || !mediaItems.length) {
      return undefined;
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % mediaItems.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + mediaItems.length) % mediaItems.length);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [gallery, mediaItems.length, onClose]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + mediaItems.length) % mediaItems.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % mediaItems.length);
  };

  return (
    <AnimatePresence>
      {gallery && project && activeMedia ? (
        <motion.div
          className="gallery-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-title"
          onMouseDown={onClose}
        >
          <motion.div
            className="project-gallery-modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className="gallery-close" onClick={onClose} aria-label="Close gallery">
              <X size={18} />
            </button>

            <div className="gallery-header">
              <span className="gallery-brand-mark" aria-hidden="true">
                <img src={project.image} alt="" loading="lazy" decoding="async" />
              </span>
              <div className="gallery-title">
                <span>Project Gallery</span>
                <h3 id="gallery-title">
                  {project.name}
                </h3>
                <p>{project.type}</p>
              </div>
              <span className="gallery-counter">
                {String(activeIndex + 1).padStart(2, '0')} / {String(mediaItems.length).padStart(2, '0')}
              </span>
            </div>

            <div className="gallery-stage">
              <button type="button" className="gallery-nav gallery-nav--prev" onClick={showPrevious} aria-label="Previous screenshot">
                <ArrowLeft size={19} />
              </button>

              <AnimatePresence mode="wait">
                <motion.figure
                  className="gallery-figure"
                  key={activeMedia.src}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                >
                  <img
                    className="gallery-image"
                    src={activeMedia.src}
                    alt={activeMedia.alt}
                    loading="eager"
                    decoding="async"
                  />
                </motion.figure>
              </AnimatePresence>

              <button type="button" className="gallery-nav gallery-nav--next" onClick={showNext} aria-label="Next screenshot">
                <ArrowRight size={19} />
              </button>
            </div>

            <div className="gallery-footer">
              <div className="gallery-caption-card">
                <span>
                  <Maximize2 size={15} />
                  {activeMedia.label}
                </span>
                <strong>{activeMedia.description}</strong>
              </div>

              <div className="gallery-thumbnail-wrap">
                <div className="gallery-thumbnails" aria-label={`${project.name} gallery thumbnails`}>
                  {mediaItems.map((item, index) => {
                    const thumbClassName =
                      index === activeIndex ? 'gallery-thumb gallery-thumb--active' : 'gallery-thumb';

                    return (
                      <button
                        type="button"
                        key={item.src}
                        className={thumbClassName}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show ${item.label}`}
                      >
                        <img src={item.src} alt="" loading="lazy" decoding="async" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
