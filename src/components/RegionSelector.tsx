'use client';

import { useRegion } from '@/contexts/RegionContext';
import { REGIONS, REGION_ORDER } from '@/data/regions';
import { Region } from '@/types/region';

export default function RegionSelector() {
  const { selectedRegion, setSelectedRegion, isAutoDetected } = useRegion();

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value as Region);
  };

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="region-select" className="text-sm font-medium text-gray-700">
        Your Region:
      </label>
      <select
        id="region-select"
        value={selectedRegion || ''}
        onChange={handleRegionChange}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm font-medium bg-white"
      >
        {REGION_ORDER.map((regionCode) => {
          const region = REGIONS[regionCode];
          const label = `${region.flag} ${region.name}`;
          const isSelected = regionCode === selectedRegion;
          const autoDetectedLabel = isSelected && isAutoDetected ? ' (auto-detected)' : '';

          return (
            <option key={regionCode} value={regionCode}>
              {label}{autoDetectedLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}
