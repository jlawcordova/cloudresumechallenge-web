interface IResumeListProps {
  items: string[];
}

export default function ResumeList({ items }: IResumeListProps) {
  return (
    <ul>
      {items.map((i: string) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
