import { Box } from '@mui/material';
import PageContainer from '@/components/PageContainer';
import HomePage from '@/pages/HomePage';
import { userProfile } from '@/config/userProfile';

export default function Home() {
  return (
    <PageContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
        <HomePage UserProfile={userProfile}/>
      </Box>
    </PageContainer>
  );
}
