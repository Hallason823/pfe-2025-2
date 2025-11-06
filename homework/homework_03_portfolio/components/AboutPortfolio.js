import { Grid, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import SectionCard from './SectionCard';
import TechStack from './TechStack';
import { techCategories } from '@/config/technologies';

const iconMap = { Web: WebIcon, Storage: StorageIcon, Build: BuildIcon, Code: CodeIcon };

export default function AboutPortfolio() {
  return (
    <SectionCard title="Technologies & Modules Used">
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
        Built with React and Next.js to demonstrate full-stack web development with API integration.
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {techCategories.map(({ title, tech, color, icon }) => {
          const Icon = iconMap[icon];
          return (
            <Grid item xs={12} md={6} key={title}>
              <TechStack title={title} technologies={tech} color={color} icon={<Icon sx={{ mr: 1, color: `${color}.main` }} />} />
            </Grid>
          );
        })}
      </Grid>
    </SectionCard>
  );
}
