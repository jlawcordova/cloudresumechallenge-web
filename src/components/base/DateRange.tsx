interface IDateRangeProps {
  startDate?: Date;
  endDate?: Date;
}

export default function DateRange({ startDate, endDate }: IDateRangeProps) {
  // Only show the months for the recent 2 years.
  // The year is always displayed.
  const start = (
    <>
      {startDate == null ||
      new Date().getFullYear() - startDate?.getFullYear() > 2
        ? ""
        : new Intl.DateTimeFormat("en", { month: "short" }).format(startDate) +
          " "}

      {new Intl.DateTimeFormat("en", { year: "numeric" }).format(startDate)}
    </>
  );

  // Similarly, the end date should
  // only show the months for the recent 2 years.
  // The year is always displayed.
  // It is assumed that the date is ongoing at the present time
  // if no end date is provided.
  const end =
    endDate == null ? (
      <>Present</>
    ) : (
      <>
        {endDate == null ||
        new Date().getFullYear() - endDate?.getFullYear() > 2
          ? ""
          : new Intl.DateTimeFormat("en", { month: "short" }).format(endDate) +
            " "}

        {new Intl.DateTimeFormat("en", { year: "numeric" }).format(endDate)}
      </>
    );

  return (
    <span>
      {start} - {end}
    </span>
  );
}
