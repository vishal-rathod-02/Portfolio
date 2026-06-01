import {
  ArrowUpRight,
  BarChart3,
  CircleCheck,
  CloudOff,
  ExternalLink,
  GitFork,
  Github,
  Radio,
  Star,
  Users,
} from 'lucide-react';
import { useGitHubProfile } from '../../controllers/useGitHubProfile';
import {
  developer,
  githubLanguageStack,
  githubProofStats,
  githubStats,
  projects,
  topRepositories,
} from '../../models/portfolio.model';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';

const contributionWeeks = Array.from({ length: 52 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => (week * 7 + day) % 5),
);

export function GitHubSection() {
  const { profile, summary, isLoading, isError } = useGitHubProfile(developer.githubUsername);
  const projectLogos = Object.fromEntries(projects.map((project) => [project.name, project.image]));
  const dynamicStats = profile
    ? [
        { label: 'Public Repos', value: profile.public_repos, icon: Github },
        { label: 'Followers', value: profile.followers, icon: Users },
        { label: 'Stars Earned', value: summary.totalStars, icon: Star },
        { label: 'Forks', value: summary.totalForks, icon: GitFork },
      ]
    : githubStats;
  const languageUsage = summary.topLanguages.length ? summary.topLanguages : githubLanguageStack;
  const topLanguageCount = Math.max(...languageUsage.map((item) => item.count), 1);
  const connectionState = isLoading
    ? {
        label: 'Connecting to GitHub',
        detail: 'Fetching public profile and repository activity...',
        className: 'github-status--loading',
        icon: Radio,
      }
    : isError
      ? {
          label: 'Fallback data active',
          detail: 'GitHub data may be temporarily unavailable. Featured projects remain available below.',
          className: 'github-status--fallback',
          icon: CloudOff,
        }
      : {
          label: profile ? 'Live GitHub data' : 'Curated profile data',
          detail: profile
            ? 'Profile, repositories, stars, forks, and languages loaded from the GitHub API.'
            : 'Showing curated project proof while GitHub initializes.',
          className: 'github-status--live',
          icon: CircleCheck,
        };
  const ConnectionIcon = connectionState.icon;
  const repositoryCount = profile?.public_repos ?? '6';
  const githubLocation = profile?.location ?? 'Nagpur, Maharashtra';

  return (
    <section className="content-section github-section section-shell" id="github">
      <SectionHeader
        eyebrow="GitHub"
        title="Developer proof through repositories, stack signals, and project activity."
        copy="A recruiter-friendly GitHub dashboard with live API data when available, curated fallback proof, featured repositories, and technology distribution."
      />

      <div className="github-layout">
        <Reveal className="github-panel">
          <div className={`github-status ${connectionState.className}`}>
            <ConnectionIcon size={18} />
            <div>
              <strong>{connectionState.label}</strong>
              <span>{connectionState.detail}</span>
            </div>
          </div>

          <div className="github-panel__heading">
            <div className="card-icon">
              <Github size={20} />
            </div>
            <div>
              <h3>{profile?.name ?? developer.name}</h3>
              <p>
                {isLoading
                  ? 'Loading live GitHub data...'
                  : isError
                    ? 'Showing fallback data while GitHub is unavailable.'
                    : profile?.bio || `@${developer.githubUsername} | Full-stack developer`}
              </p>
            </div>
          </div>

          <div className="github-profile">
            <div className="github-profile__main">
              <img
                src={profile?.avatar_url ?? developer.profileImage}
                alt={`${profile?.login ?? developer.name} GitHub avatar`}
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="github-profile__eyebrow">Developer identity</span>
                <strong>@{profile?.login ?? developer.githubUsername}</strong>
                <span>
                  {githubLocation} | {repositoryCount} public repositories
                </span>
              </div>
              <a
                className="github-profile__open"
                href={profile?.html_url ?? developer.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="github-profile__chips" aria-label="GitHub profile signals">
              <span>Public code</span>
              <span>Case studies</span>
              <span>Full-stack builds</span>
            </div>
          </div>

          <div className="github-cta-row">
            <a className="github-action-link" href={developer.links.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              View GitHub Profile
            </a>
            <a className="github-action-link" href="#projects">
              Explore Case Studies
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="github-activity-card">
            <div className="github-subhead">
              <h3>Contribution rhythm</h3>
              <span>Activity preview</span>
            </div>
            <div className="contribution-grid" aria-label="Contribution graph preview">
              {contributionWeeks.map((week, weekIndex) => (
                <div className="contribution-week" key={`week-${weekIndex}`}>
                  {week.map((level, dayIndex) => (
                    <span
                      key={`day-${weekIndex}-${dayIndex}`}
                      className={`contribution-cell contribution-cell--${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="github-activity-legend">
              <span>Less</span>
              <i className="contribution-cell contribution-cell--1" />
              <i className="contribution-cell contribution-cell--2" />
              <i className="contribution-cell contribution-cell--3" />
              <i className="contribution-cell contribution-cell--4" />
              <span>More</span>
            </div>
          </div>

          <div className="language-bars">
            <div className="github-subhead">
              <h3>
                <BarChart3 size={17} />
                Language usage
              </h3>
              <span>{summary.topLanguages.length ? 'Live repositories' : 'Portfolio stack'}</span>
            </div>
            {languageUsage.length ? (
              languageUsage.map((item) => (
                <div className="language-row" key={item.language}>
                  <span>{item.language}</span>
                  <div>
                    <i style={{ width: `${(item.count / topLanguageCount) * 100}%` }} />
                  </div>
                  <em>{item.count}</em>
                </div>
              ))
            ) : (
              <p>Language data appears after GitHub repositories load.</p>
            )}
          </div>
        </Reveal>

        <div className="github-side">
          <Reveal className="stats-grid">
            {dynamicStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div className="stat-card" key={stat.label}>
                  <Icon size={18} />
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              );
            })}
          </Reveal>

          <Reveal className="github-proof-grid">
            {githubProofStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div className="github-proof-card" key={stat.label}>
                  <Icon size={18} />
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <p>{stat.detail}</p>
                </div>
              );
            })}
          </Reveal>

          <Reveal className="repo-list">
            <div className="github-subhead">
              <h3>Featured repositories</h3>
              <span>Source and project proof</span>
            </div>
            {topRepositories.map((repo) => (
              <a
                className="repo-card"
                key={repo.name}
                href={repo.html_url ?? developer.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div className="repo-card__top">
                  <span className="repo-favicon" aria-hidden="true">
                    {projectLogos[repo.name] ? (
                      <img src={projectLogos[repo.name]} alt="" loading="lazy" decoding="async" />
                    ) : (
                      <Github size={18} />
                    )}
                  </span>
                  <div>
                    <strong>{repo.name}</strong>
                    <span>{repo.type}</span>
                  </div>
                  <em>{repo.status ?? repo.language}</em>
                </div>
                <p>{repo.description ?? repo.activity ?? 'Repository activity'}</p>
                <div className="repo-stack">
                  {(repo.stack ?? [repo.language]).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
