import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Clipboard, Code2, Layers3 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useClipboard } from '../../controllers/useClipboard';
import { insightCategories, insights } from '../../models/portfolio.model';
import { SectionHeader } from '../components/SectionHeader.jsx';

export function InsightsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeInsightId, setActiveInsightId] = useState(insights[0].id);
  const { copiedValue, copy } = useClipboard();
  const filteredInsights = useMemo(
    () =>
      activeCategory === 'All'
        ? insights
        : insights.filter((insight) => insight.category === activeCategory),
    [activeCategory],
  );
  const activeInsight =
    filteredInsights.find((insight) => insight.id === activeInsightId) ?? filteredInsights[0];
  const ActiveIcon = activeInsight.icon;
  const copied = copiedValue === activeInsight.snippet;

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const nextInsight =
      category === 'All' ? insights[0] : insights.find((insight) => insight.category === category);

    if (nextInsight) {
      setActiveInsightId(nextInsight.id);
    }
  };

  const scrollToProject = () => {
    document.getElementById(activeInsight.projectTarget)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="content-section insights-section section-shell" id="insights">
      <SectionHeader
        eyebrow="Insights"
        title="An interactive engineering notebook for real implementation decisions."
        copy="Filter technical notes, inspect the reasoning behind each decision, and see how frontend, backend, API, and security choices connect to actual projects."
      />

      <div className="insight-filters" role="tablist" aria-label="Insight categories">
        {insightCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? 'insight-filter insight-filter--active' : 'insight-filter'}
            onClick={() => handleCategoryClick(category)}
            role="tab"
            aria-selected={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="insights-workbench">
        <div className="insight-list" aria-label="Engineering insight list">
          {filteredInsights.map((insight, index) => {
            const Icon = insight.icon;
            const isActive = activeInsight.id === insight.id;

            return (
              <motion.button
                type="button"
                key={insight.id}
                className={isActive ? 'insight-card insight-card--active' : 'insight-card'}
                onClick={() => setActiveInsightId(insight.id)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <span>{insight.category}</span>
                <div className="card-icon">
                  <Icon size={19} />
                </div>
                <h3>{insight.title}</h3>
                <p>{insight.body}</p>
                <em>{insight.project}</em>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            className="insight-reader"
            key={activeInsight.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <header className="insight-reader__header">
              <div className="card-icon">
                <ActiveIcon size={21} />
              </div>
              <div>
                <span className="eyebrow">{activeInsight.category}</span>
                <h3>{activeInsight.title}</h3>
                <p>{activeInsight.impact}</p>
              </div>
            </header>

            <div className="insight-meta-grid">
              <span>
                <Layers3 size={16} />
                {activeInsight.project}
              </span>
              <span>{activeInsight.level}</span>
              <span>{activeInsight.stack.join(' / ')}</span>
            </div>

            <div className="insight-reader__body">
              <section>
                <strong>Problem</strong>
                <p>{activeInsight.problem}</p>
              </section>
              <section>
                <strong>Approach</strong>
                <p>{activeInsight.approach}</p>
              </section>
              <section>
                <strong>Implementation</strong>
                <p>{activeInsight.implementation}</p>
              </section>
              <section>
                <strong>Result</strong>
                <p>{activeInsight.result}</p>
              </section>
            </div>

            <div className="insight-timeline" aria-label="Implementation timeline">
              {activeInsight.timeline.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="insight-code">
              <div>
                <Code2 size={16} />
                <span>Implementation snippet</span>
              </div>
              <code>{activeInsight.snippet}</code>
            </div>

            <div className="insight-actions">
              <button type="button" className="text-button" onClick={() => copy(activeInsight.snippet)}>
                {copied ? <Check size={17} /> : <Clipboard size={17} />}
                {copied ? 'Copied' : 'Copy snippet'}
              </button>
              <button type="button" className="text-button" onClick={scrollToProject}>
                Open project
                <ArrowUpRight size={17} />
              </button>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
