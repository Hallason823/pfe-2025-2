'use client';
import { Grid, Typography } from '@mui/material';
import PageContainer from '@/components/PageContainer';
import PageTitle from '@/components/PageTitle';
import ProjectCard from '@/components/ProjectCard';
import LoadingState from '@/components/LoadingState';
import useGithubRepos from '@/hooks/useGithubRepos';

export default function ProjectsPage() {
  const { projects, loading } = useGithubRepos('Hallason823', 15);

  if (loading) return <LoadingState title="Projects" />;

  return (
    <PageContainer>
      <PageTitle>Projects</PageTitle>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Latest projects from GitHub
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard name={project.name} description={project.description} language={project.language} url={project.html_url} updated={project.updated_at} />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
