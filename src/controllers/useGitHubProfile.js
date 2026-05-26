import { useEffect, useMemo, useState } from 'react';
import {
  getGitHubProfile,
  getGitHubRepositories,
  summarizeRepositories,
} from '../services/github.service';

export function useGitHubProfile(username) {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!username) {
      return undefined;
    }

    const controller = new AbortController();

    async function loadGitHub() {
      try {
        setStatus('loading');
        setError('');

        const [profileData, repositoryData] = await Promise.all([
          getGitHubProfile(username),
          getGitHubRepositories(username),
        ]);

        if (controller.signal.aborted) {
          return;
        }

        setProfile(profileData);
        setRepositories(repositoryData);
        setStatus('success');
      } catch (currentError) {
        if (controller.signal.aborted) {
          return;
        }

        setError(currentError.message);
        setStatus('error');
      }
    }

    loadGitHub();

    return () => controller.abort();
  }, [username]);

  const summary = useMemo(() => summarizeRepositories(repositories), [repositories]);

  return {
    profile,
    repositories,
    summary,
    isLoading: status === 'loading',
    isError: status === 'error',
    error,
  };
}
