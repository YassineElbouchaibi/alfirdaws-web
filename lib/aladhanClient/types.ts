export interface Timings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
}

export interface GregorianWeekday {
  en: string;
}

export interface GregorianMonth {
  number: number;
  en: string;
}

export interface GregorianDesignation {
  abbreviated: string;
  expanded: string;
}

export interface Gregorian {
  date: string;
  format: string;
  day: string;
  weekday: GregorianWeekday;
  month: GregorianMonth;
  year: string;
  designation: GregorianDesignation;
}

export interface HijriWeekday {
  en: string;
  ar: string;
}

export interface HijriMonth {
  number: number;
  en: string;
  ar: string;
}

export interface HijriDesignation {
  abbreviated: string;
  expanded: string;
}

export interface Hijri {
  date: string;
  format: string;
  day: string;
  weekday: HijriWeekday;
  month: HijriMonth;
  year: string;
  designation: HijriDesignation;
  holidays: string[];
}

export interface Date {
  readable: string;
  timestamp: string;
  gregorian: Gregorian;
  hijri: Hijri;
}

export interface Params {
  Fajr: number;
  Isha: number;
}

export interface Method {
  id: number;
  name: string;
  params: Params;
}

export interface Offset {
  Imsak: number;
  Fajr: number;
  Sunrise: number;
  Dhuhr: number;
  Asr: number;
  Maghrib: number;
  Sunset: number;
  Isha: number;
  Midnight: number;
}

export interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: Method;
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: Offset;
}

export interface AlAdhanData {
  timings: Timings;
  date: Date;
  meta: Meta;
}

export interface AlAdhanManyResponse {
  code: number;
  status: string;
  data: AlAdhanData[];
}

export interface AlAdhanOneResponse {
  code: number;
  status: string;
  data: AlAdhanData;
}

export interface AlAdhanStringResponse {
  code: number;
  status: string;
  data: string;
}
