import getConfig from 'next/config';

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

// Get the prayer times for the current day
export const getPrayerTimes = async (): Promise<any> => {
  const { apiPrayerTime, iqamaTime } = await fetchMasjidPrayerTimes();
  return {};
};
