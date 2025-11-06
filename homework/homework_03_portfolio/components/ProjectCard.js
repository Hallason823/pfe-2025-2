import { Card, CardContent, Typography, Chip, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ name, description, language, url, updated }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <GitHubIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" component="h3">{name}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>{description || 'No description available'}</Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          {language && <Chip label={language} size="small" color="primary" />}
          <Chip label={new Date(updated).toLocaleDateString()} size="small" variant="outlined" />
        </Box>
        <Link href={url} target="_blank" rel="noopener" sx={{ textDecoration: 'none' }}>View on GitHub →</Link>
      </CardContent>
    </Card>
  );
}
