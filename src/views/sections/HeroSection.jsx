import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDownToLine, ArrowRight, Check, Copy, Mail, Sparkles } from 'lucide-react';
import { useClipboard } from '../../controllers/useClipboard';
import { DeveloperProfileCard } from '../components/DeveloperProfileCard.jsx';
import { developer, heroConsoleLines, heroFocusItems, heroMetrics } from '../../models/portfolio.model';

export function HeroSection() {
  const [focusIndex, setFocusIndex] = useState(0);
  const { copiedValue, copy } = useClipboard();
  const activeFocus = heroFocusItems[focusIndex];
  const copiedEmail = copiedValue === developer.email;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFocusIndex((current) => (current + 1) % heroFocusItems.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-section section-shell" id="home">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="signal-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-topline">
            <span className="eyebrow">Modern full-stack engineering</span>
            <span className="availability-pill">
              <span className="status-dot" />
              {developer.status}
            </span>
          </div>
          <h1>
            {developer.name}
            <span>{developer.role}</span>
          </h1>
          <p>{developer.headline}</p>

          <div className="hero-focus-card" aria-label="Engineering focus">
            <span>
              <Sparkles size={16} />
              Current focus
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFocus.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: 'easeOut' }}
              >
                <strong>{activeFocus.label}</strong>
                <h2>{activeFocus.title}</h2>
                <p>{activeFocus.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a className="button button--secondary" href={developer.resumeUrl} download>
              Download Resume
              <ArrowDownToLine size={18} />
            </a>
            <a className="button button--ghost" href="#contact">
              Contact Me
              <Mail size={18} />
            </a>
            <button
              type="button"
              className="button button--utility"
              onClick={() => copy(developer.email)}
            >
              {copiedEmail ? 'Email Copied' : 'Copy Email'}
              {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>

          <div className="hero-console" aria-label="Hero build console">
            <div className="hero-console__bar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>launch.sequence</span>
            </div>
            <div className="hero-console__body">
              {heroConsoleLines.map((line, index) => (
                <motion.code
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.45 + index * 0.12 }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {line}
                </motion.code>
              ))}
              <AnimatePresence mode="wait">
                <motion.code
                  key={activeFocus.command}
                  className="hero-console__active"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.24 }}
                >
                  <span>04</span>
                  {activeFocus.command}
                </motion.code>
              </AnimatePresence>
            </div>
          </div>

          <div className="hero-proof" aria-label="Developer summary">
            {heroMetrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.span
                  key={metric.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.65 + index * 0.1 }}
                >
                  <Icon size={18} />
                  <strong>{metric.value}</strong>
                  {metric.label}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        <DeveloperProfileCard />
      </div>
    </section>
  );
}
