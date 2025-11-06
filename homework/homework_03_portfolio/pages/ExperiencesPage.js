import PageContainer from '@/components/PageContainer';
import PageTitle from '@/components/PageTitle';
import ExperienceSection from '@/components/ExperienceSection';
import { academicExperiences, professionalExperiences } from '@/config/experiences';

export default function ExperiencesPage() {
  return (
    <PageContainer>
      <PageTitle>Experience</PageTitle>
      <ExperienceSection title="Academic Experience" data={academicExperiences} titleKey="degree" subtitleKey="institution" />
      <ExperienceSection title="Professional Experience" data={professionalExperiences} titleKey="title" subtitleKey="company" />
    </PageContainer>
  );
}
