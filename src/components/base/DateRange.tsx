interface IDateRangeProps {
    startDate?: Date;
    endDate?: Date;
}

export default function DateRange({startDate, endDate}: IDateRangeProps) {
  // Only show the months for the recent 2 years.
  const start = <>
    {startDate == null
      || new Date().getFullYear() - startDate?.getFullYear() > 2 ?
      "" : new Intl.DateTimeFormat('en', { month: 'short' }).format(startDate)}
      &nbsp;
    {new Intl.DateTimeFormat('en', { year: 'numeric' }).format(startDate)}
  </>
  const end = endDate == null ? <>Present</> : <>
    {endDate == null
    || new Date().getFullYear() - endDate?.getFullYear() > 2 ?
      "" : new Intl.DateTimeFormat('en', { month: 'short' }).format(endDate)}
      &nbsp;
    {new Intl.DateTimeFormat('en', { year: 'numeric' }).format(endDate)}
  </>

  return (
    <span> 
      {start} - {end}
    </span>
  );
}