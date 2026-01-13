import { Region } from '@/types/region';
import { getRegionFromLocale, getRegionFromTimezone } from './regionMapping';

export function detectRegionFromBrowser(): Region {
  // Try to detect from browser locale
  if (typeof navigator !== 'undefined' && navigator.language) {
    const regionFromLocale = getRegionFromLocale(navigator.language);
    if (regionFromLocale) {
      return regionFromLocale;
    }
  }

  // Try to detect from timezone
  if (typeof Intl !== 'undefined') {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone) {
        const regionFromTimezone = getRegionFromTimezone(timezone);
        if (regionFromTimezone) {
          return regionFromTimezone;
        }
      }
    } catch (error) {
      console.warn('Failed to detect timezone:', error);
    }
  }

  // Default to US if detection fails
  return 'US';
}
