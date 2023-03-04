import IEmployment from "../interfaces/IEmployment";
import ResumeEntry from "./base/ResumeEntry";
import ResumeEntryHeading from "./base/ResumeEntryHeading";
import ResumeList from "./base/ResumeList";
import ResumeSection from "./base/ResumeSection";

interface IEmploymentSectionProps {
  employment: IEmployment[];
}

export default function EmploymentSection({
  employment,
}: IEmploymentSectionProps) {
  return (
    <ResumeSection heading={"Employment"}>
      {employment.map((e: IEmployment) => (
        <ResumeEntry key={e.company + e.role}>
          <ResumeEntryHeading
            title={e.company}
            subtitle={e.role}
            startDate={e.startDate}
            endDate={e.endDate}
          />
          <ResumeList items={e.contributions} />
        </ResumeEntry>
      ))}
    </ResumeSection>
  );
}
