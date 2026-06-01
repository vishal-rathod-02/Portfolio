import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, CheckCircle2, MapPin } from 'lucide-react';
import { useMemo, useState } from 'react';
import { experienceItems, experienceStats } from '../../models/portfolio.model';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { cn, contentSection, glassPanel, sectionShell, stackPillClass, textButtonClass } from '../styles/tailwind';

export function ExperienceSection() {
  const [activeId, setActiveId] = useState(experienceItems[0].id);
  const activeExperience = useMemo(
    () => experienceItems.find((item) => item.id === activeId) ?? experienceItems[0],
    [activeId],
  );
  const ActiveIcon = activeExperience.icon;

  const handleProjectClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={cn(contentSection, sectionShell, 'relative')} id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Professional context behind the projects and engineering decisions."
        copy="A recruiter-focused timeline connecting internships, teaching experience, product work, and full-stack project execution."
      />

      <Reveal className="mb-[18px] grid grid-cols-4 gap-3 max-[720px]:grid-cols-1">
        {experienceStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className="grid min-h-[118px] content-center gap-2 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(117,240,191,0.08),transparent_56%),rgba(255,255,255,0.045)] p-[18px] shadow-[0_18px_52px_rgba(0,0,0,0.16)] backdrop-blur-2xl"
              key={stat.label}
            >
              <Icon className="text-portfolio-mint" size={18} />
              <span className="text-[0.78rem] font-extrabold text-portfolio-muted">{stat.label}</span>
              <strong className="text-base text-portfolio-text">{stat.value}</strong>
            </div>
          );
        })}
      </Reveal>

      <div className="grid grid-cols-[minmax(280px,0.42fr)_minmax(0,1fr)] items-start gap-[18px] max-[980px]:grid-cols-1">
        <Reveal className={cn(glassPanel, "sticky top-[116px] grid gap-4 overflow-hidden rounded-[var(--radius-xl)] p-[18px] before:absolute before:top-[70px] before:bottom-6 before:left-[42px] before:w-px before:bg-[linear-gradient(to_bottom,rgba(117,240,191,0.52),rgba(105,217,239,0.08))] before:content-[''] max-[980px]:relative max-[980px]:top-auto max-[720px]:rounded-[var(--radius-lg)] max-[720px]:before:hidden")} as="div">
          <span className="font-mono text-[0.76rem] font-semibold uppercase text-portfolio-mint">Work Timeline</span>
          <div className="relative grid gap-3" role="tablist" aria-label="Experience timeline">
            {experienceItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.id === activeExperience.id;

              return (
                <button
                  type="button"
                  key={item.id}
                  className={cn(
                    'relative grid min-h-[106px] grid-cols-[48px_auto_minmax(0,1fr)] items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--line)] bg-white/[0.045] p-3 text-left text-inherit transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(117,240,191,0.42)] hover:bg-[linear-gradient(135deg,rgba(117,240,191,0.12),transparent_58%),rgba(255,255,255,0.065)] max-[720px]:grid-cols-[auto_minmax(0,1fr)]',
                    isActive &&
                      'border-[rgba(117,240,191,0.42)] bg-[linear-gradient(135deg,rgba(117,240,191,0.12),transparent_58%),rgba(255,255,255,0.065)]',
                  )}
                  onClick={() => setActiveId(item.id)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className="relative z-[1] grid h-9 w-9 place-items-center rounded-full border border-[rgba(117,240,191,0.28)] bg-[rgba(7,12,10,0.88)] font-mono text-[0.72rem] font-black text-portfolio-mint max-[720px]:hidden">{String(index + 1).padStart(2, '0')}</span>
                  <span className="grid h-[42px] w-[42px] place-items-center rounded-[14px] border border-[rgba(105,217,239,0.24)] bg-[rgba(105,217,239,0.07)] text-portfolio-cyan">
                    <Icon size={18} />
                  </span>
                  <span className="grid min-w-0 gap-1">
                    <strong className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.94rem] text-portfolio-text">{item.role}</strong>
                    <small className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.8rem] text-portfolio-muted">{item.organization}</small>
                    <em className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.72rem] font-black not-italic text-portfolio-amber">{item.period}</em>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal className={cn(glassPanel, 'overflow-hidden rounded-[var(--radius-xl)] max-[720px]:rounded-[var(--radius-lg)]')}>
          <AnimatePresence mode="wait">
            <motion.article
              className="grid gap-[18px] bg-[radial-gradient(circle_at_20%_0%,rgba(117,240,191,0.12),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_54%)] p-[clamp(18px,3vw,28px)]"
              key={activeExperience.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3.5 max-[720px]:items-start">
                <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-[18px] border border-[rgba(117,240,191,0.32)] bg-[rgba(117,240,191,0.09)] text-portfolio-mint shadow-[0_18px_42px_rgba(0,0,0,0.2)]">
                  <ActiveIcon size={24} />
                </span>
                <div>
                  <span className="font-mono text-[0.76rem] font-semibold uppercase text-portfolio-mint">{activeExperience.type}</span>
                  <h3 className="my-1 text-[clamp(1.6rem,3vw,2.5rem)] leading-none text-portfolio-text">{activeExperience.role}</h3>
                  <p className="m-0 leading-relaxed text-portfolio-muted">{activeExperience.organization}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex min-h-[34px] items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.045] px-[11px] text-[0.78rem] font-extrabold text-portfolio-muted">
                  <CalendarDays size={16} />
                  {activeExperience.period}
                </span>
                <span className="inline-flex min-h-[34px] items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.045] px-[11px] text-[0.78rem] font-extrabold text-portfolio-muted">
                  <MapPin size={16} />
                  {activeExperience.location}
                </span>
              </div>

              <p className="m-0 leading-relaxed text-portfolio-muted">{activeExperience.summary}</p>

              <div className="grid grid-cols-3 gap-2.5 max-[720px]:grid-cols-1">
                {activeExperience.metrics.map((metric) => (
                  <div className="grid min-h-[86px] gap-1.5 rounded-[var(--radius-md)] border border-[var(--line)] bg-white/[0.045] p-[13px]" key={metric.label}>
                    <span className="font-mono text-[0.7rem] font-black uppercase tracking-[0.08em] text-[var(--faint)]">{metric.label}</span>
                    <strong className="text-[0.95rem] leading-snug text-portfolio-text">{metric.value}</strong>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] gap-3 max-[720px]:grid-cols-1">
                <div className="grid gap-3 rounded-[var(--radius-lg)] border border-[var(--line)] bg-white/[0.04] p-4">
                  <strong className="text-base text-portfolio-text">What I handled</strong>
                  <ul className="m-0 grid list-none gap-2.5 p-0">
                    {activeExperience.responsibilities.map((item) => (
                      <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-[9px] text-[0.9rem] leading-relaxed text-portfolio-muted" key={item}>
                        <CheckCircle2 className="mt-[0.28em] text-portfolio-mint" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-3 rounded-[var(--radius-lg)] border border-[rgba(246,199,96,0.24)] bg-[rgba(246,199,96,0.055)] p-4">
                  <strong className="text-base text-portfolio-text">Engineering impact</strong>
                  <ul className="m-0 grid list-none gap-2.5 p-0">
                    {activeExperience.impact.map((item) => (
                      <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-[9px] text-[0.9rem] leading-relaxed text-portfolio-muted" key={item}>
                        <CheckCircle2 className="mt-[0.28em] text-portfolio-amber" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeExperience.stack.map((tech) => (
                  <span className={cn(stackPillClass, 'border-[rgba(117,240,191,0.22)] bg-[rgba(117,240,191,0.07)]')} key={tech}>{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {activeExperience.projectId ? (
                  <button type="button" className={textButtonClass} onClick={handleProjectClick}>
                    View Related Project
                    <ArrowUpRight size={17} />
                  </button>
                ) : null}
                <a className={textButtonClass} href="#contact">
                  Discuss Experience
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
