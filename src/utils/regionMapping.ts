import { Region } from '@/types/region';
import { REGIONS } from '@/data/regions';

export function getRegionFromLocale(locale: string): Region | null {
  const normalizedLocale = locale.toLowerCase();

  for (const [regionCode, regionInfo] of Object.entries(REGIONS)) {
    if (regionInfo.locales) {
      for (const regionLocale of regionInfo.locales) {
        if (normalizedLocale.startsWith(regionLocale.toLowerCase())) {
          return regionCode as Region;
        }
      }
    }
  }

  return null;
}

export function getRegionFromTimezone(timezone: string): Region | null {
  for (const [regionCode, regionInfo] of Object.entries(REGIONS)) {
    if (regionInfo.timezones?.includes(timezone)) {
      return regionCode as Region;
    }
  }

  return null;
}

export function getRegionFromCountryCode(countryCode: string): Region | null {
  const upperCountryCode = countryCode.toUpperCase();

  for (const [regionCode, regionInfo] of Object.entries(REGIONS)) {
    if (regionInfo.countries?.includes(upperCountryCode)) {
      return regionCode as Region;
    }
  }

  return null;
}
