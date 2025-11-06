import SectionCard from './SectionCard';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection({ title, data, titleKey, subtitleKey }) {
  return (
    <SectionCard title={title}>
      {data.map((exp, i) => (
        <ExperienceCard
          key={i}
          title={exp[titleKey]}
          subtitle={exp[subtitleKey]}
          period={exp.period}
          location={exp.location}
          description={exp.description}
        />
      ))}
    </SectionCard>
  );
}
