import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Activity, Boxes, Gauge, Layers3 } from 'lucide-react';
import { skillDashboardStats, skillGroups } from '../../models/portfolio.model';
import { SectionHeader } from '../components/SectionHeader.jsx';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillGroups[0].category);
  const [activeSkillName, setActiveSkillName] = useState(skillGroups[0].skills[0].name);

  const activeGroup = useMemo(
    () => skillGroups.find((group) => group.category === activeCategory) ?? skillGroups[0],
    [activeCategory],
  );
  const activeSkill = useMemo(
    () =>
      activeGroup.skills.find((skill) => skill.name === activeSkillName) ?? activeGroup.skills[0],
    [activeGroup, activeSkillName],
  );
  const totalProjects = activeGroup.skills.reduce((total, skill) => total + skill.projects, 0);
  const averageStrength = Math.round(
    activeGroup.skills.reduce((total, skill) => total + skill.proficiency, 0) /
      activeGroup.skills.length,
  );
  const ActiveIcon = activeGroup.icon;
  const orbitSkills = activeGroup.skills.slice(0, 6);

  useEffect(() => {
    setActiveSkillName(activeGroup.skills[0].name);
  }, [activeGroup]);

  return (
    <section className="content-section skills-section section-shell" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="A practical stack mapped to real full-stack product work."
        copy="The stack is organized by how modern applications are delivered: interface quality, backend structure, data modeling, programming logic, and developer tooling."
      />

      <div className="skills-dashboard">
        <div className="skill-tabs" role="tablist" aria-label="Skill categories">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeGroup.category === group.category;

          return (
            <button
              key={group.category}
              type="button"
              className={`skill-tab skill-tab--${group.accent} ${isActive ? 'skill-tab--active' : ''}`}
              onClick={() => setActiveCategory(group.category)}
              role="tab"
              aria-selected={isActive}
            >
              <Icon size={18} />
              <span>{group.category}</span>
            </button>
          );
        })}
        </div>

        <div className={`skills-command skills-command--${activeGroup.accent}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.category}
              className="skills-command__main"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
            >
              <div className="skill-focus-header">
                <div className="card-icon">
                  <ActiveIcon size={21} />
                </div>
                <div>
                  <span className="eyebrow">{activeGroup.category}</span>
                  <h3>{activeGroup.summary}</h3>
                </div>
              </div>

              <div className="skill-focus-metrics" aria-label="Selected category metrics">
                <div>
                  <Gauge size={18} />
                  <strong>{averageStrength}%</strong>
                  <span>Average strength</span>
                </div>
                <div>
                  <Boxes size={18} />
                  <strong>{activeGroup.skills.length}</strong>
                  <span>Tracked skills</span>
                </div>
                <div>
                  <Layers3 size={18} />
                  <strong>{totalProjects}</strong>
                  <span>Project uses</span>
                </div>
              </div>

              <div className="skill-meter-list">
                {activeGroup.skills.map((skill, index) => {
                  const isSelected = activeSkill.name === skill.name;

                  return (
                    <button
                      type="button"
                      className={`skill-meter-card ${isSelected ? 'skill-meter-card--active' : ''}`}
                      key={skill.name}
                      onMouseEnter={() => setActiveSkillName(skill.name)}
                      onFocus={() => setActiveSkillName(skill.name)}
                      onClick={() => setActiveSkillName(skill.name)}
                    >
                      <span className="skill-mark">{skill.mark}</span>
                      <span className="skill-meter-card__copy">
                        <strong>{skill.name}</strong>
                        <small>{skill.note}</small>
                      </span>
                      <span className="skill-level">{skill.level}</span>
                      <span className="skill-progress" aria-hidden="true">
                        <motion.i
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.75, delay: index * 0.08, ease: 'easeOut' }}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <aside className="skill-visual-panel" aria-label="Selected skill details">
            <div className="skill-orbit">
              <span className="orbit-ring orbit-ring--outer" />
              <span className="orbit-ring orbit-ring--inner" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.name}
                  className="skill-core"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.24 }}
                >
                  <strong>{activeSkill.mark}</strong>
                  <span>{activeSkill.name}</span>
                </motion.div>
              </AnimatePresence>

              {orbitSkills.map((skill, index) => (
                <motion.button
                  type="button"
                  className={`orbit-skill orbit-skill--${index + 1} ${
                    activeSkill.name === skill.name ? 'orbit-skill--active' : ''
                  }`}
                  key={skill.name}
                  aria-label={`Show ${skill.name} details`}
                  onClick={() => setActiveSkillName(skill.name)}
                  animate={{ y: [0, index % 2 ? 7 : -7, 0] }}
                  transition={{ duration: 4.6 + index, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {skill.mark}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                className="skill-detail-card"
                key={activeSkill.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
              >
                <span>
                  <Activity size={16} />
                  {activeSkill.level} capability
                </span>
                <h3>{activeSkill.name}</h3>
                <p>{activeSkill.focus}</p>
                <div>
                  <strong>{activeSkill.projects}</strong>
                  <small>project touchpoints</small>
                </div>
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>

        <div className="skill-dashboard-stats">
          {skillDashboardStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
