import IEducation from "./IEducation";
import IEmployment from "./IEmployment";
import IProfileLinks from "./IProfileLinks";
import ISkills from "./ISkills";

export interface IResume {
  name: string;
  tagline: string;
  location: string;
  skills: ISkills;
  links: IProfileLinks;
  employment: IEmployment[];
  education: IEducation[];
}
