import { ExternalLink, GitFork, Github, Star, Users } from 'lucide-react';
import { useGitHubProfile } from '../../controllers/useGitHubProfile';
import { developer, githubStats, topRepositories } from '../../models/portfolio.model';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';

const contributionWeeks = Array.from({ length: 52 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => (week * 7 + day) % 5),
);

export function GitHubSection() {
  const { profile, summary, isLoading, isError } = useGitHubProfile(developer.githubUsername);
  const dynamicStats = profile
    ? [
        { label: 'Public Repos', value: profile.public_repos, icon: Github },
        { label: 'Followers', value: profile.followers, icon: Users },
        { label: 'Stars Earned', value: summary.totalStars, icon: Star },
        { label: 'Forks', value: summary.totalForks, icon: GitFork },
      ]
    : githubStats;
  const repositories = summary.latestRepos.length ? summary.latestRepos : topRepositories;
  const topLanguageCount = Math.max(...summary.topLanguages.map((item) => item.count), 1);

  return (
    <section className="content-section github-section section-shell" id="github">
      <SectionHeader
        eyebrow="GitHub"
        title="Live public GitHub profile and repository activity."
        copy="The dashboard now loads your public GitHub profile, repositories, stars, forks, and language usage directly from the GitHub API."
      />

      <div className="github-layout">
        <Reveal className="github-panel">
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
                    : profile?.bio || `@${developer.githubUsername}`}
              </p>
            </div>
          </div>

          {profile ? (
            <div className="github-profile">
              <img src={profile.avatar_url} alt={`${profile.login} GitHub avatar`} loading="lazy" />
              <div>
                <strong>@{profile.login}</strong>
                <span>
                  {profile.location ? `${profile.location} · ` : ''}
                  {profile.public_repos} public repositories
                </span>
              </div>
              <a href={profile.html_url} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
                <ExternalLink size={18} />
              </a>
            </div>
          ) : null}

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

          <div className="language-bars">
            <h3>Language usage</h3>
            {summary.topLanguages.length ? (
              summary.topLanguages.map((item) => (
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

          <Reveal className="repo-list">
            <h3>{profile ? 'Updated repositories' : 'Top repositories'}</h3>
            {repositories.map((repo) => (
              <a
                className="repo-row"
                key={repo.name}
                href={repo.html_url ?? developer.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <strong>{repo.name}</strong>
                  <span>{repo.description ?? repo.activity ?? 'Repository activity'}</span>
                </div>
                <em>{repo.language ?? 'Repo'}</em>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
