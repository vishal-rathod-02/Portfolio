import { useMemo, useState } from 'react';
import { useActiveSection } from '../../controllers/useActiveSection';
import { navItems } from '../../models/portfolio.model';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`site-header ${isOpen ? 'site-header--menu-open' : ''}`}>
      <nav className="navbar" aria-label="Main navigation">
        <button
          type="button"
          className="brand-button"
          onClick={() => handleNavClick('home')}
          aria-label="Scroll to home"
        >
          <span className="brand-mark">VR</span>
          <span className="brand-copy">
            <strong>Vishal Rathod</strong>
            <small>Full-Stack Developer</small>
          </span>
        </button>

        <div className={`nav-links ${isOpen ? 'nav-links--open' : ''}`} id="mobile-navigation">
          <div className="nav-mobile-status" aria-hidden="true">
            <span className="status-dot" />
            Navigate portfolio
          </div>

          {navItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeSection === item.id ? 'nav-link--active' : ''}`}
              style={{ '--nav-index': index }}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="nav-link__index">{String(index + 1).padStart(2, '0')}</span>
              <span>{item.label}</span>
            </button>
          ))}

          <div className="nav-menu-footer" aria-hidden="true">
            <span>Scroll with intent</span>
            <strong>Full-stack portfolio</strong>
          </div>
        </div>

        <button
          type="button"
          className={`icon-button nav-toggle ${isOpen ? 'nav-toggle--open' : ''}`}
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          data-cursor={isOpen ? 'Close' : 'Menu'}
        >
          <span className="nav-toggle__halo" />
          <span className="nav-toggle__lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>
    </header>
  );
}
