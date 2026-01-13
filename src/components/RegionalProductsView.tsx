'use client';

import { useState, useMemo } from 'react';
import { useRegion } from '@/contexts/RegionContext';
import SuppliesTable2, { Supply } from './SuppliesTable2';
import RegionSelector from './RegionSelector';
import FilterControls, { FilterType } from './FilterControls';

interface RegionalProductsViewProps {
  supplies: Supply[];
}

export default function RegionalProductsView({ supplies }: RegionalProductsViewProps) {
  const { selectedRegion } = useRegion();
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');

  const filteredSupplies = useMemo(() => {
    if (!selectedRegion || currentFilter === 'all') {
      return supplies;
    }

    return supplies.filter((supply) => {
      const hasRegionalLink = supply.regionalLinks?.[selectedRegion];

      if (currentFilter === 'available') {
        return !!hasRegionalLink;
      } else if (currentFilter === 'unavailable') {
        return !hasRegionalLink;
      }

      return true;
    });
  }, [supplies, selectedRegion, currentFilter]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pizza Party Stuff from PizzaDAO
            </h2>
            <p className="text-gray-600">
              We have a list of pizza inspired items that we think are cool.
            </p>
          </div>
          <RegionSelector />
        </div>

        {selectedRegion && (
          <FilterControls
            currentFilter={currentFilter}
            onFilterChange={setCurrentFilter}
            totalCount={supplies.length}
            filteredCount={filteredSupplies.length}
          />
        )}
      </div>

      <SuppliesTable2 supplies={filteredSupplies} />
    </>
  );
}
