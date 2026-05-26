import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';

export function SectionDivider({ divider }) {
  const handleClick = () => {
    document.getElementById(divider.target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="section-divider section-shell"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-divider__rail" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <button
        type="button"
        className="section-divider__chip"
        onClick={handleClick}
        data-cursor="Scroll"
        aria-label={`Scroll from ${divider.from} to ${divider.to}`}
      >
        <span className="section-divider__index">{divider.index}</span>
        <span className="section-divider__route">
          {divider.from}
          <ChevronRight size={14} />
          <strong>{divider.to}</strong>
        </span>
        <span className="section-divider__signal">
          <i />
          {divider.signal}
        </span>
        <ArrowDown className="section-divider__arrow" size={16} />
      </button>

      <code className="section-divider__command">{divider.command}</code>
    </motion.div>
  );
}
