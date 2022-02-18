import { addDays, isWithinInterval, parse } from 'date-fns';
import getConfig from 'next/config';

import { getAlAdhanCalendarByAddress, getAlAdhanTimingsByAddress } from '../aladhanClient';
import { calculateIqamaTime } from './helpers';
import { MoonodeResponse } from './types';

const {
  publicRuntimeConfig: { moonodePrayerTimeUri },
}: {
  publicRuntimeConfig: { moonodePrayerTimeUri: string };
} = getConfig();

export const fetchMasjidPrayerTimes = async () => {
  const response = await fetch(moonodePrayerTimeUri);
  const data: MoonodeResponse = await response.json();
  return data;
};

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface PrayerSchedule {
  Adhan: PrayerTimes;
  Iqama: PrayerTimes;
  Jumua?: string[];
  date: Date;
}

// Get the prayer times for the current day
export const getPrayerTimes = async (): Promise<Required<PrayerSchedule>> => {
  const { apiPrayerTime, iqamaTime } = await fetchMasjidPrayerTimes();

  return {
    Adhan: {
      Fajr: apiPrayerTime.Fajr.trim(),
      Dhuhr: apiPrayerTime.Dhuhr.trim(),
      Asr: apiPrayerTime.Asr.trim(),
      Maghrib: apiPrayerTime.Maghrib.trim(),
      Isha: apiPrayerTime.Isha.trim(),
    },
    Iqama: {
      Fajr: iqamaTime.Fajr.trim(),
      Dhuhr: iqamaTime.Dhuhr.trim(),
      Asr: iqamaTime.Asr.trim(),
      Maghrib: iqamaTime.Maghrib.trim(),
      Isha: iqamaTime.Isha.trim(),
    },
    Jumua: Object.entries(iqamaTime)
      .filter(([key, value]) => key.startsWith('Jumua') && value !== '' && value !== 'N/A' && value !== '00:00')
      .map(([key, value]) => value.toString().trim())
      .sort(),
    date: new Date(),
  };
};

// Get the prayer times for the next day
export const getPrayerTimesForTomorrow = async (): Promise<PrayerSchedule> => {
  const { tomorrowApiPrayerTime, tomorrowIqamaTime } = await fetchMasjidPrayerTimes();

  return {
    Adhan: {
      Fajr: tomorrowApiPrayerTime.Fajr.trim(),
      Dhuhr: tomorrowApiPrayerTime.Dhuhr.trim(),
      Asr: tomorrowApiPrayerTime.Asr.trim(),
      Maghrib: tomorrowApiPrayerTime.Maghrib.trim(),
      Isha: tomorrowApiPrayerTime.Isha.trim(),
    },
    Iqama: {
      Fajr: tomorrowIqamaTime.Fajr.trim(),
      Dhuhr: tomorrowIqamaTime.Dhuhr.trim(),
      Asr: tomorrowIqamaTime.Asr.trim(),
      Maghrib: tomorrowIqamaTime.Maghrib.trim(),
      Isha: tomorrowIqamaTime.Isha.trim(),
    },
    date: addDays(new Date(), 1),
  };
};

// Get the prayer times for any given date
export const getPrayerTimesForDate = async (date: Date): Promise<PrayerSchedule> => {
  const {
    prayerTime: { Fauto, Fajr, Dauto, Dhuhr, Aauto, Asr, Mauto, Maghrib, Iauto, Isha, ...rest },
    entity: { formatedAddress },
  } = await fetchMasjidPrayerTimes();

  const {
    data: { timings },
  } = await getAlAdhanTimingsByAddress({
    address: formatedAddress,
    date_or_timestamp: date.toISOString(),
  });

  return {
    Adhan: {
      Fajr: timings.Fajr.trim(),
      Dhuhr: timings.Dhuhr.trim(),
      Asr: timings.Asr.trim(),
      Maghrib: timings.Maghrib.trim(),
      Isha: timings.Isha.trim(),
    },
    Iqama: {
      Fajr: calculateIqamaTime(timings.Fajr, Fauto, Fajr),
      Dhuhr: calculateIqamaTime(timings.Dhuhr, Dauto, Dhuhr),
      Asr: calculateIqamaTime(timings.Asr, Aauto, Asr),
      Maghrib: calculateIqamaTime(timings.Maghrib, Mauto, Maghrib),
      Isha: calculateIqamaTime(timings.Isha, Iauto, Isha),
    },
    Jumua:
      date.getDay() == 5
        ? Object.entries(rest)
            .filter(([key, value]) => key.startsWith('Jumua') && value !== '' && value !== 'N/A' && value !== '00:00')
            .map(([key, value]) => calculateIqamaTime(timings.Dhuhr, Dauto, value.toString()))
        : undefined,
    date: date,
  };
};

// Get the prayer times for any given month
export const getPrayerTimesForMonth = async (month: number, year: number): Promise<PrayerSchedule[]> => {
  const {
    prayerTime: { Fauto, Fajr, Dauto, Dhuhr, Aauto, Asr, Mauto, Maghrib, Iauto, Isha, ...rest },
    entity: { formatedAddress },
  } = await fetchMasjidPrayerTimes();

  // Validate the month
  if (month < 1 || month > 12) {
    throw new Error('Invalid month');
  }

  // Validate the year
  if (year < 1 || year > 9999) {
    throw new Error('Invalid year');
  }

  const { data } = await getAlAdhanCalendarByAddress({
    address: formatedAddress,
    month,
    year,
  });

  return data.map(({ date, timings }) => {
    const parsedDate = new Date(parseInt(date.timestamp, 10) * 1000);

    return {
      Adhan: {
        Fajr: timings.Fajr.trim(),
        Dhuhr: timings.Dhuhr.trim(),
        Asr: timings.Asr.trim(),
        Maghrib: timings.Maghrib.trim(),
        Isha: timings.Isha.trim(),
      },
      Iqama: {
        Fajr: calculateIqamaTime(timings.Fajr, Fauto, Fajr),
        Dhuhr: calculateIqamaTime(timings.Dhuhr, Dauto, Dhuhr),
        Asr: calculateIqamaTime(timings.Asr, Aauto, Asr),
        Maghrib: calculateIqamaTime(timings.Maghrib, Mauto, Maghrib),
        Isha: calculateIqamaTime(timings.Isha, Iauto, Isha),
      },
      Jumua:
        parsedDate.getDay() == 5
          ? Object.entries(rest)
              .filter(([key, value]) => key.startsWith('Jumua') && value !== '' && value !== 'N/A' && value !== '00:00')
              .map(([key, value]) => calculateIqamaTime(timings.Dhuhr, Dauto, value.toString()))
          : undefined,
      date: parsedDate,
    };
  });
};

// Get the prayer times for the given year
export const getPrayerTimesForYear = async (year: number): Promise<PrayerSchedule[]> => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (await Promise.all(months.map((month) => getPrayerTimesForMonth(month, year)))).flat();
};

// GetPrayerTimesForInterval
export const getPrayerTimesForInterval = async (startDate: Date, endDate: Date): Promise<PrayerSchedule[]> => {
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();

  if (startYear < endYear) {
    throw new Error('The start date must be before the end date');
  }

  const yearsRange = Array.from(new Array(endYear - startYear + 1), (x, i) => i + startYear);
  const prayerTimes = (await Promise.all(yearsRange.map(async (year) => getPrayerTimesForYear(year)))).flat();

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 59);

  return prayerTimes.filter(({ date }) => date >= startDate && date <= endDate);
};
