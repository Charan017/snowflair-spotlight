import dayjs from "dayjs";

export const getYearFromDate = (dateString) => {
  const date = dayjs(dateString);

  const year = date.year();

  return year;
};

export const getUserExperience = (userExperience) => {
  console.log({ userExperience });
  if (!!userExperience) {
    let totalMillis = 0;
    let totalMonths = 0;
    const millisecondsInMonth = 30.44 * 24 * 60 * 60 * 1000;
    const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;

    const mapStartDate = Object?.keys(userExperience)?.map((item) => {
      return new Date(userExperience?.[item]?.start_date).getTime();
    });
    const startDates = mapStartDate?.sort((a, b) => {
      return a - b;
    });

    let endDate = Object.values(userExperience).some(
      (experience) => experience.is_currently_working
    );

    let sortedEndDate = new Date().getTime();

    if (endDate === true) {
      sortedEndDate = new Date().getTime();
    } else {
      const mapEndDate = Object.keys(userExperience)?.map((item) => {
        return new Date(userExperience?.[item]?.end_date).getTime();
      });
      const endDates = mapEndDate?.sort((a, b) => {
        return b - a;
      });
      sortedEndDate = endDates[0];
    }

    const diffMills = sortedEndDate - startDates[0];
    totalMonths += Math.round(diffMills / millisecondsInMonth);

    const totalYears = Math.floor(totalMonths / 12);

    return totalYears;
  } else return 0;
};
