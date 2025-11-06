'use client';

import { Container } from '@mui/material';
import ProfileHeader from '@/components/ProfileHeader';

export default function HomePage({ userProfile }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <ProfileHeader UserProfile={userProfile}/>
    </Container>
  );
}