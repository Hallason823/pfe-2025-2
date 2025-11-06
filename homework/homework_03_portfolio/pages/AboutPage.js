import PageContainer from '@/components/PageContainer';
import PageTitle from '@/components/PageTitle';
import AboutPortfolio from '@/components/AboutPortfolio';
import AboutMe from '@/components/AboutMe';

export default function AboutPage() {
  return (
    <PageContainer>
      <PageTitle>About This Portfolio</PageTitle>
      <AboutPortfolio />
      <AboutMe />
    </PageContainer>
  );
}
