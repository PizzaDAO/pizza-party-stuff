import { Region, RegionInfo } from '@/types/region';

export const REGIONS: Record<Region, RegionInfo> = {
  US: {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    countries: ['US'],
    locales: ['en-US'],
    timezones: [
      'America/New_York',
      'America/Chicago',
      'America/Denver',
      'America/Los_Angeles',
      'America/Phoenix',
      'America/Anchorage',
      'Pacific/Honolulu'
    ]
  },
  UK: {
    code: 'UK',
    name: 'United Kingdom',
    flag: '🇬🇧',
    countries: ['GB'],
    locales: ['en-GB'],
    timezones: ['Europe/London']
  },
  EU: {
    code: 'EU',
    name: 'European Union',
    flag: '🇪🇺',
    countries: ['FR', 'DE', 'ES', 'IT', 'NL', 'BE', 'AT', 'PT', 'IE', 'GR', 'SE', 'DK', 'FI'],
    locales: ['fr-FR', 'de-DE', 'es-ES', 'it-IT', 'nl-NL', 'pt-PT', 'sv-SE', 'da-DK', 'fi-FI'],
    timezones: ['Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome', 'Europe/Amsterdam', 'Europe/Brussels', 'Europe/Vienna']
  },
  Canada: {
    code: 'Canada',
    name: 'Canada',
    flag: '🇨🇦',
    countries: ['CA'],
    locales: ['en-CA', 'fr-CA'],
    timezones: ['America/Toronto', 'America/Vancouver', 'America/Edmonton', 'America/Winnipeg', 'America/Halifax']
  },
  Australia: {
    code: 'Australia',
    name: 'Australia',
    flag: '🇦🇺',
    countries: ['AU'],
    locales: ['en-AU'],
    timezones: ['Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane', 'Australia/Perth', 'Australia/Adelaide']
  },
  EasternEurope: {
    code: 'EasternEurope',
    name: 'Eastern Europe',
    flag: '🌍',
    countries: ['PL', 'CZ', 'SK', 'HU', 'RO', 'BG', 'HR', 'SI', 'LT', 'LV', 'EE'],
    locales: ['pl-PL', 'cs-CZ', 'sk-SK', 'hu-HU', 'ro-RO', 'bg-BG', 'hr-HR', 'sl-SI', 'lt-LT', 'lv-LV', 'et-EE'],
    timezones: ['Europe/Warsaw', 'Europe/Prague', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Sofia']
  },
  EastAfrica: {
    code: 'EastAfrica',
    name: 'East Africa',
    flag: '🌍',
    countries: ['KE', 'TZ', 'UG', 'ET', 'RW'],
    locales: ['sw-KE', 'sw-TZ', 'am-ET'],
    timezones: ['Africa/Nairobi', 'Africa/Dar_es_Salaam', 'Africa/Kampala', 'Africa/Addis_Ababa', 'Africa/Kigali']
  },
  WestAfrica: {
    code: 'WestAfrica',
    name: 'West Africa',
    flag: '🌍',
    countries: ['NG', 'GH', 'SN', 'CI', 'CM'],
    locales: ['ha-NG', 'yo-NG', 'ig-NG'],
    timezones: ['Africa/Lagos', 'Africa/Accra', 'Africa/Dakar', 'Africa/Abidjan', 'Africa/Douala']
  },
  Vietnam: {
    code: 'Vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    countries: ['VN'],
    locales: ['vi-VN'],
    timezones: ['Asia/Ho_Chi_Minh', 'Asia/Saigon']
  },
  SouthKorea: {
    code: 'SouthKorea',
    name: 'South Korea',
    flag: '🇰🇷',
    countries: ['KR'],
    locales: ['ko-KR'],
    timezones: ['Asia/Seoul']
  },
  Japan: {
    code: 'Japan',
    name: 'Japan',
    flag: '🇯🇵',
    countries: ['JP'],
    locales: ['ja-JP'],
    timezones: ['Asia/Tokyo']
  },
  SouthAmerica: {
    code: 'SouthAmerica',
    name: 'South America',
    flag: '🌎',
    countries: ['BR', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'BO', 'PY', 'UY'],
    locales: ['pt-BR', 'es-AR', 'es-CO', 'es-CL', 'es-PE', 'es-VE', 'es-EC', 'es-BO', 'es-PY', 'es-UY'],
    timezones: ['America/Sao_Paulo', 'America/Buenos_Aires', 'America/Bogota', 'America/Santiago', 'America/Lima']
  },
  Mexico: {
    code: 'Mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    countries: ['MX'],
    locales: ['es-MX'],
    timezones: ['America/Mexico_City', 'America/Cancun', 'America/Tijuana', 'America/Monterrey']
  }
};

export const REGION_ORDER: Region[] = [
  'US',
  'UK',
  'EU',
  'Canada',
  'Australia',
  'EasternEurope',
  'EastAfrica',
  'WestAfrica',
  'Vietnam',
  'SouthKorea',
  'Japan',
  'SouthAmerica',
  'Mexico'
];
