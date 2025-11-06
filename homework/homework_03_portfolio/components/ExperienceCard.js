import { Typography, Box } from '@mui/material';

export default function ExperienceCard({ title, subtitle, period, location, description }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="subtitle1" color="primary" gutterBottom>{subtitle}</Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>{period} • {location}</Typography>
      {description && <Typography variant="body1" sx={{ mt: 1 }}>{description}</Typography>}
    </Box>
  );
}
