import { Typography } from '@mui/material';
import SectionCard from './SectionCard';

export default function AboutMe() {
  return (
    <SectionCard title="About Me">
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
        Full Stack Developer & AI Engineer from Recife-PE, Brazil. Background in Mechanical Engineering (UFPE)
        and Internet Systems (UNICAP). Specializing in scalable applications, NLP models, and cloud infrastructure.
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        This portfolio integrates with GitHub REST API to dynamically display projects, demonstrating React,
        Next.js, Material-UI, and modern web patterns.
      </Typography>
    </SectionCard>
  );
}
