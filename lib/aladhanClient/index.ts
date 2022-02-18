// Aladhan Client - Prayer Times API
// Docs: https://aladhan.com/prayer-times-api

import { AlAdhanManyResponse, AlAdhanOneResponse, AlAdhanStringResponse } from './types';

const baseUrl = 'https://api.aladhan.com/v1';

interface BaseParams {
  month?: number;
  year?: number;
  annual?: boolean;
  method?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 99;
  shafaq?: 'general' | 'ahmer' | 'abyad';
  tune?: string;
  school?: 0 | 1;
  midnightMode?: 0 | 1;
  timezonestring?: string;
  latitudeAdjustmentMethod?: 1 | 2 | 3;
  adjustment?: number;
  iso8601?: boolean;
}

const getData = async <T>(endpoint: string, params: BaseParams | { [param: string]: any }): Promise<T> => {
  const paramString = new URLSearchParams(params as any).toString();
  const response = await fetch(`${baseUrl}/${endpoint}?${paramString}`);
  const data: T = await response.json();
  return data;
};

// Prayer Times Calendar - https://api.aladhan.com/v1/calendar
interface AlAdhanCalendarParams extends BaseParams {
  latitude: number;
  longitude: number;
}

export const getAlAdhanCalendar = async (params: AlAdhanCalendarParams) => {
  return getData<AlAdhanManyResponse>('calendar', params);
};

// Prayer Times Calendar by address - https://api.aladhan.com/v1/calendarByAddress
interface AlAdhanCalendarByAddressParams extends BaseParams {
  address: string;
}

export const getAlAdhanCalendarByAddress = async (params: AlAdhanCalendarByAddressParams) => {
  return getData<AlAdhanManyResponse>('calendarByAddress', params);
};

// Prayer Times Calendar by city - https://api.aladhan.com/v1/calendarByCity
interface AlAdhanCalendarByCityParams extends BaseParams {
  city: string;
  country: string;
  state?: string;
}

export const getAlAdhanCalendarByCity = async (params: AlAdhanCalendarByCityParams) => {
  return getData<AlAdhanManyResponse>('calendarByCity', params);
};

// Prayer Times Hijri Calendar - https://api.aladhan.com/v1/hijriCalendar
interface AlAdhanHijriCalendarParams extends BaseParams {
  latitude: number;
  longitude: number;
}

export const getAlAdhanHijriCalendar = async (params: AlAdhanHijriCalendarParams) => {
  return getData<AlAdhanManyResponse>('hijriCalendar', params);
};

// Prayer Times Hijri Calendar by address - https://api.aladhan.com/v1/hijriCalendarByAddress
interface AlAdhanHijriCalendarByAddressParams extends BaseParams {
  address: string;
}

export const getAlAdhanHijriCalendarByAddress = async (params: AlAdhanHijriCalendarByAddressParams) => {
  return getData<AlAdhanManyResponse>('hijriCalendarByAddress', params);
};

// Prayer Times Hijri Calendar by city - https://api.aladhan.com/v1/hijriCalendarByCity
interface AlAdhanHijriCalendarByCityParams extends BaseParams {
  city: string;
  country: string;
  state?: string;
}

export const getAlAdhanHijriCalendarByCity = async (params: AlAdhanHijriCalendarByCityParams) => {
  return getData<AlAdhanManyResponse>('hijriCalendarByCity', params);
};

// Current Date - https://api.aladhan.com/v1/currentDate
interface AlAdhanCurrentDateParams {
  zone: string;
}

export const getAlAdhanCurrentDate = async (params: AlAdhanCurrentDateParams) => {
  return getData<AlAdhanStringResponse>('currentDate', params);
};

// Current Time - https://api.aladhan.com/v1/currentTime
interface AlAdhanCurrentTimeParams {
  zone: string;
}

export const getAlAdhanCurrentTime = async (params: AlAdhanCurrentTimeParams) => {
  return getData<AlAdhanStringResponse>('currentTime', params);
};

// Current Timestamp - https://api.aladhan.com/v1/currentTimestamp
interface AlAdhanCurrentTimestampParams {
  zone: string;
}

export const getAlAdhanCurrentTimestamp = async (params: AlAdhanCurrentTimestampParams) => {
  return getData<AlAdhanStringResponse>('currentTimestamp', params);
};

// Prayer Times Methods - https://api.aladhan.com/v1/methods
// Not implemented

// Timings - https://api.aladhan.com/v1/timings/:date_or_timestamp
interface AlAdhanTimingsParams extends BaseParams {
  date_or_timestamp?: string;
  latitude: number;
  longitude: number;
}

export const getAlAdhanTimings = async (params: AlAdhanTimingsParams) => {
  return getData<AlAdhanOneResponse>('timings', params);
};

// Timings By Address - https://api.aladhan.com/v1/timingsByAddress/:date_or_timestamp
interface AlAdhanTimingsByAddressParams extends BaseParams {
  date_or_timestamp?: string;
  address: string;
}

export const getAlAdhanTimingsByAddress = async (params: AlAdhanTimingsByAddressParams) => {
  return getData<AlAdhanOneResponse>('timingsByAddress', params);
};

// Timings By City - https://api.aladhan.com/v1/timingsByCity/:date_or_timestamp
interface AlAdhanTimingsByCityParams extends BaseParams {
  date_or_timestamp?: string;
  city: string;
  country: string;
  state?: string;
}

export const getAlAdhanTimingsByCity = async (params: AlAdhanTimingsByCityParams) => {
  return getData<AlAdhanOneResponse>('timingsByCity', params);
};
