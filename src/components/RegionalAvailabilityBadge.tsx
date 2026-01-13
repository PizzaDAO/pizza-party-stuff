'use client';

import { REGIONS } from '@/data/regions';
import { Region } from '@/types/region';

interface RegionalAvailabilityBadgeProps {
  region: Region;
}

export default function RegionalAvailabilityBadge({ region }: RegionalAvailabilityBadgeProps) {
  const regionInfo = REGIONS[region];

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
      <span>Not Available in {regionInfo.name}</span>
    </div>
  );
}
