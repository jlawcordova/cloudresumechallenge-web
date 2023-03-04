import { ReactNode } from "react";

interface IResumeSectionProps {
  heading: string;
  children?: ReactNode;
}

export default function ResumeSection({
  heading,
  children,
}: IResumeSectionProps) {
  return (
    <section>
      <h2>{heading}</h2>
      <div>{children}</div>
    </section>
  );
}
