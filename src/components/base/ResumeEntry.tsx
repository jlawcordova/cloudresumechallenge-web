import "./ResumeEntry.css";
import { ReactNode } from "react";

interface IResumeEntryProps {
  children?: ReactNode;
}

export default function ResumeEntry({ children }: IResumeEntryProps) {
  return <div className="entry">{children}</div>;
}
