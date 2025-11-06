import { Paper, Typography } from '@mui/material';

export default function SectionCard({ title, children }) {
  return (
    <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
      {title && <Typography variant="h5" gutterBottom>{title}</Typography>}
      {children}
    </Paper>
  );
}
