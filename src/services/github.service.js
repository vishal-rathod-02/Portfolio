const GITHUB_API = 'https://api.github.com';

async function requestGitHub(path) {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed with status ${response.status}`);
  }

  return response.json();
}

export async function getGitHubProfile(username) {
  return requestGitHub(`/users/${username}`);
}

export async function getGitHubRepositories(username) {
  const repositories = await requestGitHub(`/users/${username}/repos?sort=updated&per_page=100`);

  return repositories
    .filter((repository) => !repository.fork)
    .sort((first, second) => {
      const starDifference = second.stargazers_count - first.stargazers_count;

      if (starDifference !== 0) {
        return starDifference;
      }

      return new Date(second.updated_at).getTime() - new Date(first.updated_at).getTime();
    });
}

export function summarizeRepositories(repositories) {
  const languageCounts = repositories.reduce((summary, repository) => {
    if (!repository.language) {
      return summary;
    }

    summary[repository.language] = (summary[repository.language] ?? 0) + 1;
    return summary;
  }, {});

  const topLanguages = Object.entries(languageCounts)
    .sort((first, second) => second[1] - first[1])
    .slice(0, 5)
    .map(([language, count]) => ({ language, count }));

  const totalStars = repositories.reduce(
    (total, repository) => total + repository.stargazers_count,
    0,
  );

  const totalForks = repositories.reduce((total, repository) => total + repository.forks_count, 0);

  return {
    topLanguages,
    totalStars,
    totalForks,
    latestRepos: repositories.slice(0, 5),
  };
}
