import "./ProfileLinks.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProfileLinksProps {
  website: string;
  github: string;
  linkedin: string;
}

export default function ProfileLinks({
  website,
  github,
  linkedin,
}: IProfileLinksProps) {
  return (
    <div className="profile-links">
      <span>
        <span className="icon">
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        <a href={website} target="_blank" rel="noreferrer">
          {website}
        </a>
      </span>
      <span>
        <span className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <a href={github} target="_blank" rel="noreferrer">
          {github}
        </a>
      </span>
      <span>
        <span className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
        <a href={linkedin} target="_blank" rel="noreferrer">
          {linkedin}
        </a>
      </span>
    </div>
  );
}
