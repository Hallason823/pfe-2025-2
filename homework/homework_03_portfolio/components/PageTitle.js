import { Typography } from '@mui/material';

export default function PageTitle({ children }) {
  return <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>{children}</Typography>;
}
