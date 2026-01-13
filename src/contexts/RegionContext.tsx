'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Region } from '@/types/region';
import { useRegionDetection } from '@/hooks/useRegionDetection';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { STORAGE_KEYS } from '@/utils/storage';

interface RegionContextType {
  selectedRegion: Region | null;
  setSelectedRegion: (region: Region) => void;
  autoDetectedRegion: Region | null;
  isAutoDetected: boolean;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const autoDetectedRegion = useRegionDetection();
  const [savedRegion, setSavedRegion] = useLocalStorage<Region | null>(STORAGE_KEYS.SELECTED_REGION, null);
  const [selectedRegion, setSelectedRegionState] = useState<Region | null>(savedRegion);
  const [isAutoDetected, setIsAutoDetected] = useState(false);

  // When auto-detection completes and no saved region exists, use auto-detected region
  useEffect(() => {
    if (autoDetectedRegion && !savedRegion) {
      setSelectedRegionState(autoDetectedRegion);
      setSavedRegion(autoDetectedRegion);
      setIsAutoDetected(true);
    } else if (savedRegion) {
      setSelectedRegionState(savedRegion);
      setIsAutoDetected(false);
    }
  }, [autoDetectedRegion, savedRegion]);

  const setSelectedRegion = (region: Region) => {
    setSelectedRegionState(region);
    setSavedRegion(region);
    setIsAutoDetected(false);
  };

  return (
    <RegionContext.Provider
      value={{
        selectedRegion,
        setSelectedRegion,
        autoDetectedRegion,
        isAutoDetected
      }}
    >
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}
