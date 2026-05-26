import { Reveal } from './Reveal.jsx';

export function SectionHeader({ eyebrow, title, copy, align = 'left' }) {
  return (
    <Reveal className={`section-header section-header--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </Reveal>
  );
}
