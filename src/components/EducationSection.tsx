import IEducation from "../interfaces/IEducation";
import ResumeEntry from "./base/ResumeEntry";
import ResumeEntryHeading from "./base//ResumeEntryHeading";
import ResumeList from "./base/ResumeList";
import ResumeSection from "./base/ResumeSection";

interface IEducationSectionProps {
  education: IEducation[];
}

export default function EducationSection({
  education,
}: IEducationSectionProps) {
  return (
    <ResumeSection heading={"Education"}>
      {education.map((e: IEducation) => (
        <ResumeEntry key={e.school}>
          <ResumeEntryHeading
            title={e.school}
            subtitle={e.location}
            startDate={e.startDate}
            endDate={e.endDate}
          />
          <ResumeList items={[e.degree, e.honors]} />
        </ResumeEntry>
      ))}
    </ResumeSection>
  );
}
