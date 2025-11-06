import { Container } from '@mui/material';

export default function PageContainer({ children, maxWidth = "lg" }) {
  return <Container maxWidth={maxWidth} sx={{ mt: 4, mb: 4 }}>{children}</Container>;
}
