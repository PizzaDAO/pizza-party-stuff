export type Region =
  | 'US'
  | 'UK'
  | 'EU'
  | 'Canada'
  | 'Australia'
  | 'EasternEurope'
  | 'EastAfrica'
  | 'WestAfrica'
  | 'Vietnam'
  | 'SouthKorea'
  | 'Japan'
  | 'SouthAmerica'
  | 'Mexico';

export interface RegionInfo {
  code: Region;
  name: string;
  flag: string;
  countries?: string[];
  timezones?: string[];
  locales?: string[];
}

export interface RegionalLinks {
  US?: string;
  UK?: string;
  EU?: string;
  Canada?: string;
  Australia?: string;
  EasternEurope?: string;
  EastAfrica?: string;
  WestAfrica?: string;
  Vietnam?: string;
  SouthKorea?: string;
  Japan?: string;
  SouthAmerica?: string;
  Mexico?: string;
}
