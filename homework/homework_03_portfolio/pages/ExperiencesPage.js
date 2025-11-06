import PageContainer from '@/components/PageContainer';
import PageTitle from '@/components/PageTitle';
import ExperienceSection from '@/components/ExperienceSection';
import { academicExperiences, professionalExperiences } from '@/config/experiences';

export default function ExperiencesPage() {
  return (
    <PageContainer>
      <PageTitle>Experiences</PageTitle>
      <ExperienceSection title="Academic" data={academicExperiences} titleKey="degree" subtitleKey="institution" />
      <ExperienceSection title="Professional" data={professionalExperiences} titleKey="title" subtitleKey="company" />
    </PageContainer>
  );
}
