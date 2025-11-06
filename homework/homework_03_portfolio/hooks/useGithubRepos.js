import { useState, useEffect } from 'react';

export default function useGithubRepos(username, limit = 10) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`)
      .then(res => res.json())
      .then(data => { setProjects(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [username, limit]);

  return { projects, loading };
}
