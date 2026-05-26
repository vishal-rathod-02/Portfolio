import { motion } from 'framer-motion';
import {
  aboutCodeSnippet,
  aboutHighlights,
  aboutStack,
  aboutStats,
} from '../../models/portfolio.model';
import { AnimatedCounter } from '../components/AnimatedCounter.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function AboutSection() {
  return (
    <section className="content-section about-section section-shell" id="about">
      <div className="about-grid-bg" aria-hidden="true" />

      <div className="about-layout">
        <Reveal className="about-copy" as="div">
          <span className="eyebrow">About me</span>
          <h2>Building modern full-stack applications with scalable architecture and clean UI/UX.</h2>
          <div className="about-description">
            <p>
              I am a Full-Stack Developer focused on building modern, scalable, and user-centric web
              applications using technologies like React.js, Node.js, Express.js, MongoDB, and Python.
            </p>
            <p>
              I enjoy developing interactive frontend experiences while also designing efficient backend
              systems, APIs, and application architectures that support real-world functionality.
            </p>
            <p>
              My projects combine responsive UI/UX, performance optimization, backend engineering, and
              modern development practices to create applications that are both functional and
              production-oriented.
            </p>
          </div>

          <div className="about-philosophy">
            I believe great software is not only visually appealing but also scalable, maintainable, and
            engineered for real-world usability.
          </div>

          <div className="about-stats" aria-label="Developer highlights">
            {aboutStats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="developer-workspace" delay={0.1}>
          <div className="workspace-glow" aria-hidden="true" />
          <div className="workspace-toolbar">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <span>developer.workspace</span>
          </div>

          <div className="workspace-code">
            {aboutCodeSnippet.map((line, index) => (
              <motion.code
                key={line}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {line}
              </motion.code>
            ))}
          </div>

          <div className="workspace-stack">
            {aboutStack.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  className={`stack-node stack-node--${index + 1}`}
                  key={tech.name}
                  animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
                  transition={{ duration: 4.8 + index, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Icon size={19} />
                  <span>
                    <strong>{tech.name}</strong>
                    <small>{tech.detail}</small>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="about-cards">
        {aboutHighlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.08} className="about-card">
              <div className="card-icon">
                <Icon size={20} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
