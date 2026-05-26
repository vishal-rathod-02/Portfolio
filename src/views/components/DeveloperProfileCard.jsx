import { motion } from 'framer-motion';
import { Activity, Code2, RadioTower } from 'lucide-react';
import { useMagneticTilt } from '../../controllers/useMagneticTilt';
import { developer } from '../../models/portfolio.model';

const codeLines = [
  'const stack = ["React", "Node", "MongoDB"];',
  'async function ship(product) {',
  '  return build.scalable(product);',
  '}',
];

const particles = Array.from({ length: 14 }, (_, index) => index + 1);

export function DeveloperProfileCard() {
  const { transform, pointerHandlers } = useMagneticTilt(16);

  return (
    <div className="profile-scene" aria-label="Interactive developer profile">
      <div className="profile-ambient" aria-hidden="true">
        <span className="profile-ring profile-ring--outer" />
        <span className="profile-ring profile-ring--inner" />
        {particles.map((particle) => (
          <span key={particle} className={`profile-particle profile-particle--${particle}`} />
        ))}
      </div>

      <motion.div
        className="code-panel"
        data-cursor="Inspect"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="code-panel__toolbar">
          <span />
          <span />
          <span />
        </div>
        {codeLines.map((line) => (
          <code key={line}>{line}</code>
        ))}
      </motion.div>

      <motion.div
        className="profile-card-shell"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <article
          className="profile-card"
          data-cursor="Tilt"
          style={{
            transform: `perspective(900px) translate3d(${transform.translateX}px, ${transform.translateY}px, 0) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          }}
          {...pointerHandlers}
        >
          <div className="profile-card__image-wrap">
            <img
              src={developer.profileImage}
              alt="Vishal Rathod"
              className="profile-card__image"
              loading="eager"
            />
          </div>
          <div className="profile-card__content">
            <div>
              <span className="profile-kicker">
                <Code2 size={15} />
                Software Engineering
              </span>
              <h3>{developer.name}</h3>
              <p>{developer.role}</p>
            </div>
            <div className="live-status">
              <span className="status-dot" />
              {developer.status}
              <RadioTower size={16} />
            </div>
            <div className="profile-metrics">
              <span>
                <strong>10+</strong>
                Projects
              </span>
              <span>
                <strong>5</strong>
                Core Stacks
              </span>
              <span>
                <Activity size={18} />
                Active
              </span>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
