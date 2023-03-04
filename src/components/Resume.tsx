import "./Resume.css";
import { IResume } from "../interfaces/IResume";
import EducationSection from "./EducationSection";
import EmploymentSection from "./EmploymentSection";
import ProfileLinks from "./ProfileLinks";
import SkillsSection from "./SkillsSection";

interface IResumeProps {
  resume: IResume;
}

export default function Resume({ resume }: IResumeProps) {
  return (
    <>
      <header className="container resumer-header">
        <hgroup>
          <h1>{resume.name}</h1>
          <span className="tagline">{resume.tagline}</span>
          <span className="location">{resume.location}</span>
        </hgroup>
        <ProfileLinks
          website={resume.links.website}
          github={resume.links.github}
          linkedin={resume.links.linkedin}
        ></ProfileLinks>
      </header>
      <main className="container">
        <EmploymentSection employment={resume.employment}></EmploymentSection>
        <EducationSection education={resume.education}></EducationSection>
        <SkillsSection skills={resume.skills} />
      </main>
      <footer className="container">
        Copyright © {new Date().getFullYear()} jlawcordova. <br />
        All Rights Reserved.
      </footer>
    </>
  );
}
