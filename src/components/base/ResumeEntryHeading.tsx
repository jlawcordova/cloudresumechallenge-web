import "./ResumeEntryHeading.css";
import DateRange from "./DateRange";

interface IResumeEntryHeading {
  title: string;
  subtitle?: string;
  startDate?: Date;
  endDate?: Date;
}

export default function ResumeEntryHeading({
  title,
  subtitle,
  startDate,
  endDate,
}: IResumeEntryHeading) {
  return (
    <div className="entry-heading">
      <hgroup>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </hgroup>
      <div className="entry-subtitle">
        <DateRange startDate={startDate} endDate={endDate} />
      </div>
    </div>
  );
}
