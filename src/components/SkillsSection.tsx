import ISkills from "../interfaces/ISkills";
import ResumeList from "./base/ResumeList";
import ResumeSection from "./base/ResumeSection";

interface ISkillsSectionProps {
  skills: ISkills;
}

export default function SkillsSection({ skills }: ISkillsSectionProps) {
  const skillsList = [
    "Languages — " + skills.languages.join(", "),
    "Frameworks and Libraries — " + skills.frameworks.join(", "),
    "Infrastructure and Tools — " + skills.tools.join(", "),
  ];

  return (
    <ResumeSection heading={"Technologies"}>
      <ResumeList items={skillsList} />
    </ResumeSection>
  );
}
