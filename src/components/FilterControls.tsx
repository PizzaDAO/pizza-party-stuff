'use client';

import { useState } from 'react';

export type FilterType = 'all' | 'available' | 'unavailable';

interface FilterControlsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  totalCount: number;
  filteredCount: number;
}

export default function FilterControls({
  currentFilter,
  onFilterChange,
  totalCount,
  filteredCount
}: FilterControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 min-h-[44px] ${
            currentFilter === 'all'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Show All
        </button>
        <button
          onClick={() => onFilterChange('available')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 min-h-[44px] ${
            currentFilter === 'available'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Available in My Region
        </button>
        <button
          onClick={() => onFilterChange('unavailable')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 min-h-[44px] ${
            currentFilter === 'unavailable'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Not Available in My Region
        </button>
      </div>
      <div className="text-sm text-gray-600 font-medium">
        Showing {filteredCount} of {totalCount} products
      </div>
    </div>
  );
}
