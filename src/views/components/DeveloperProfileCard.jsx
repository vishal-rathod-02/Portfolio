import { motion } from 'framer-motion';
import { Activity, Code2, Database, GitBranch, RadioTower, Server, ShieldCheck } from 'lucide-react';
import { useMagneticTilt } from '../../controllers/useMagneticTilt';
import { developer } from '../../models/portfolio.model';

const codeLines = [
  'const stack = ["React", "Node", "MongoDB"];',
  'async function ship(product) {',
  '  return build.scalable(product);',
  '}',
];

const particles = Array.from({ length: 14 }, (_, index) => index + 1);

const profileSignals = [
  {
    label: 'Interface',
    value: 'React UI',
    icon: Code2,
  },
  {
    label: 'Server',
    value: 'Express APIs',
    icon: Server,
  },
  {
    label: 'Data',
    value: 'MongoDB',
    icon: Database,
  },
];

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
          style={{
            transform: `perspective(900px) translate3d(${transform.translateX}px, ${transform.translateY}px, 0) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          }}
          {...pointerHandlers}
        >
          <div className="profile-card__topbar">
            <span className="profile-topbar__status">
              <span className="status-dot" />
              Available for full-stack roles
            </span>
            <span className="profile-topbar__id">VR / 02</span>
          </div>

          <div className="profile-card__image-wrap">
            <img src={developer.profileImage} alt="Vishal Rathod" className="profile-card__image" loading="eager" />
            <span className="profile-image-badge">
              <ShieldCheck size={14} />
              Product-minded developer
            </span>
          </div>

          <div className="profile-card__content">
            <div className="profile-card__identity">
              <span className="profile-kicker">
                <Code2 size={15} />
                Software Developer Profile
              </span>
              <h3>{developer.name}</h3>
              <p>{developer.role} focused on scalable React interfaces, Node.js APIs, and production-ready web systems.</p>
            </div>

            <div className="profile-live-panel">
              <div>
                <span className="status-dot" />
                <strong>{developer.status}</strong>
                <small>Current engineering focus</small>
              </div>
              <RadioTower size={16} />
            </div>

            <div className="profile-signal-grid" aria-label="Developer profile signals">
              {profileSignals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <span key={signal.label}>
                    <Icon size={16} />
                    <small>{signal.label}</small>
                    <strong>{signal.value}</strong>
                  </span>
                );
              })}
            </div>

            <div className="profile-readiness">
              <div>
                <span>
                  <GitBranch size={15} />
                  Stack readiness
                </span>
                <strong>MERN-focused delivery</strong>
              </div>
              <div className="profile-readiness__bar" aria-hidden="true">
                <span />
              </div>
              <small>
                <Activity size={14} />
                Projects, APIs, dashboards, and authenticated workflows
              </small>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
