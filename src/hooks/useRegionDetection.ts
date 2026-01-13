import { useState, useEffect } from 'react';
import { Region } from '@/types/region';
import { detectRegionFromBrowser } from '@/utils/regionDetection';

export function useRegionDetection(): Region | null {
  const [detectedRegion, setDetectedRegion] = useState<Region | null>(null);

  useEffect(() => {
    const region = detectRegionFromBrowser();
    setDetectedRegion(region);
  }, []);

  return detectedRegion;
}
