export interface MoonodeResponse {
  prayerTime: PrayerTime;
  apiPrayerTime: ApiPrayerTime;
  specialPrayer: SpecialPrayer;
  entity: Entity;
  somePosts: SomePost[];
  tvSettings: TvSettings;
  iqamaTime: IqamaTime;
  tomorrowIqamaTime: TomorrowIqamaTime;
  tomorrowApiPrayerTime: TomorrowApiPrayerTime;
  tvLangsOne: string;
  tvLangsTwo: string;
  highlighted: Highlighted;
}

export interface PrayerTime {
  Fauto: string;
  Dauto: string;
  Aauto: string;
  Mauto: string;
  Iauto: string;
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Jumua: string;
  Jumua2: string;
  toggleJumua: boolean;
  Jumua3: string;
  toggleJumua2: boolean;
  Jumua4: string;
  toggleJumua3: boolean;
  Jumua5: string;
  toggleJumua4: boolean;
  Jumua6: string;
  toggleJumua5: boolean;
  Jumua7: string;
  toggleJumua6: boolean;
  Jumua8: string;
  toggleJumua7: boolean;
  date: Date;
}

export interface Weekday {
  en: string;
  ar: string;
}

export interface Month {
  number: number;
  en: string;
  ar: string;
}

export interface Designation {
  abbreviated: string;
  expanded: string;
}

export interface HijriDate {
  date: string;
  format: string;
  day: string;
  weekday: Weekday;
  month: Month;
  year: string;
  designation: Designation;
  holidays: any[];
}

export interface ApiPrayerTime {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Sunrise: string;
  date: Date;
  HijriDate: HijriDate;
}

export interface SpecialPrayer {
  name?: any;
  hour: string;
  date?: any;
  dateEnd?: any;
}

export interface OpenHour {
  sundayOpenAt: string;
  sundayCloseAt: string;
  mondayOpenAt: string;
  mondayCloseAt: string;
  tuesdayOpenAt: string;
  tuesdayCloseAt: string;
  thursdayOpenAt: string;
  thursdayCloseAt: string;
  wednesdayOpenAt: string;
  wednesdayCloseAt: string;
  fridayOpenAt: string;
  fridayCloseAt: string;
  saturdayOpenAt: string;
  saturdayCloseAt: string;
  sundayOpen: boolean;
  mondayOpen: boolean;
  tuesdayOpen: boolean;
  thursdayOpen: boolean;
  wednesdayOpen: boolean;
  fridayOpen: boolean;
  saturdayOpen: boolean;
  lastUpdate: Date;
}

export interface Official {
  role: string[];
  admin: boolean;
  _id: string;
  email: string;
}

export interface Entity {
  openHour: OpenHour;
  logo: string;
  verified: boolean;
  phoneImam: string;
  phoneOther: string;
  validAddress: boolean;
  website: string;
  email: string;
  facebook: string;
  youtube: string;
  paypal: string;
  paypal2: string;
  contacts: any[];
  _id: string;
  creator: string;
  address: string;
  lng: string;
  lat: string;
  prov: string;
  sublocality: string;
  formatedAddress: string;
  name: string;
  postalCode: string;
  description: string;
  city: string;
  country: string;
  phone: string;
  officials: Official[];
  imams: any[];
  date: Date;
  __v: number;
  lastUpdate: Date;
}

export interface Like {
  _id: string;
  user: string;
}

export interface SomePost {
  accepted: boolean;
  arrowDown: any[];
  arrowUp: any[];
  audio: any[];
  comment: any[];
  commentsNbr: number;
  date: Date;
  deleted: boolean;
  feedType: string;
  fields: any[];
  fileType: string;
  image: string[];
  isComment: boolean;
  isTv: boolean;
  kindPost: string;
  likes: Like[];
  link: any[];
  modified: boolean;
  pdf: any[];
  postId: string;
  text: string;
  type: string;
  user: string;
  video: any[];
  whoCommented: any[];
  _id: string;
}

export interface TvSettings {
  activated: boolean;
  color: string;
  interval: string;
  langs: string;
}

export interface IqamaTime {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Jumua: string;
  Jumua2: string;
  toggleJumua: boolean;
  Jumua3: string;
  toggleJumua2: boolean;
  Jumua4: string;
  toggleJumua3: boolean;
  date: Date;
}

export interface TomorrowIqamaTime {
  Fajr: string;
  fIsDiff: boolean;
  Dhuhr: string;
  dIsDiff: boolean;
  Asr: string;
  aIsDiff: boolean;
  Maghrib: string;
  mIsDiff: boolean;
  Isha: string;
  iIsDiff: boolean;
  date: Date;
}

export interface TomorrowApiPrayerTime {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  date: Date;
}

export interface Highlighted {
  f: boolean;
  d: boolean;
  a: boolean;
  m: boolean;
  i: boolean;
}
