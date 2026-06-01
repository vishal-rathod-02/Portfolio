import { Copy, Send } from 'lucide-react';
import { useClipboard } from '../../controllers/useClipboard';
import { contactMethods, developer } from '../../models/portfolio.model';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';

export function ContactSection() {
  const { copiedValue, copy } = useClipboard();

  return (
    <section className="content-section contact-section section-shell" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s connect the portfolio to your real professional links next."
        copy="The contact surface is ready for your email, LinkedIn, GitHub, and resume. Clipboard actions are already wired."
      />

      <Reveal className="contact-card">
        <div className="contact-card__intro">
          <span className="eyebrow">Available for collaboration</span>
          <h3>Full-stack projects, React interfaces, API architecture, and production-ready portfolio work.</h3>
          <a className="button button--primary" href={`mailto:${developer.email}`}>
            Send Message
            <Send size={18} />
          </a>
        </div>

        <div className="contact-methods">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isCopied = copiedValue === method.value;

            return (
              <div className="contact-method" key={method.label}>
                <a href={method.href}>
                  <Icon size={19} />
                  <span>
                    <strong>{method.label}</strong>
                    <small>{method.value}</small>
                  </span>
                </a>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => copy(method.value)}
                  aria-label={`Copy ${method.label}`}
                >
                  <Copy size={17} />
                </button>
                {isCopied ? <em>Copied</em> : null}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
