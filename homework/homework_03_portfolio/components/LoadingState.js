import { CircularProgress } from '@mui/material';
import PageContainer from './PageContainer';
import PageTitle from './PageTitle';

export default function LoadingState({ title }) {
  return (
    <PageContainer>
      <PageTitle>{title}</PageTitle>
      <CircularProgress sx={{ display: 'block', mx: 'auto' }} />
    </PageContainer>
  );
}
