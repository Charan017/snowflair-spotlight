import dayjs from "dayjs";
import _ from "lodash";
import { APP_STORE_URL, PLAY_STORE_URL } from "./constants";

export const getYearFromDate = (dateString) => {
  const date = dayjs(dateString);

  const year = date.year();

  return year;
};

export const getUserExperience = (userExperience) => {
  if (!_.isEmpty(userExperience)) {
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

export const sortJobsByCreatedAt = (jobs) => {
  if (!_.isEmpty(jobs)) {
    const entriesArray = Object.entries(jobs);

    entriesArray.sort(([, a], [, b]) => a.created_at - b.created_at);

    const sortedJobs = Object.fromEntries(entriesArray);

    return sortedJobs;
  }
  return {};
};

export const sortJobsByStartDate = (data) => {
  if (!_.isEmpty(data)) {
    const dataArray = Object.values(data);

    dataArray.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));

    const sortedData = dataArray.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    return sortedData;
  }
  return {};
};

export const playStoreAndAppStoreNavigation = () => {
  if (typeof window !== "undefined") {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let url;

    if (/android/i.test(userAgent)) {
      url = PLAY_STORE_URL;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      url = APP_STORE_URL;
    }

    // Open the URL in a new tab
    if (url) {
      window.open(url, "_blank");
    }
  }
};
