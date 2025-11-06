import PageContainer from '@/components/PageContainer';
import ProfileHeader from '@/components/ProfileHeader';

export default function HomePage({ userProfile }) {
  return (
    <PageContainer>
      <ProfileHeader UserProfile={userProfile}/>
    </PageContainer>
  );
}
