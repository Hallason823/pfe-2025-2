import { Box, Chip, Typography } from '@mui/material';

export default function TechStack({ title, technologies, color = "primary", icon }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {technologies.map((tech) => <Chip key={tech} label={tech} color={color} variant="outlined" />)}
      </Box>
    </Box>
  );
}
