'use client';

import Image from "next/image";
import { RegionalLinks } from '@/types/region';
import { useRegion } from '@/contexts/RegionContext';
import { REGIONS } from '@/data/regions';
import RegionalAvailabilityBadge from './RegionalAvailabilityBadge';

export interface Supply {
  id: number;
  item: string;
  rating: number;
  cost: string;
  link: string;
  notes: string;
  image?: string;
  regionalLinks?: RegionalLinks;
  rank?: number;
  show?: boolean;
}

interface SuppliesTable2Props {
  supplies: Supply[];
}

export default function SuppliesTable2({ supplies }: SuppliesTable2Props) {
  const { selectedRegion } = useRegion();

  const renderRating = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const getImageSrc = (imagePath?: string): string | undefined => {
    if (!imagePath) return undefined;
    // If it's an external URL, return as-is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    // For local images, prepend the basePath
    return `/pizza-party-stuff${imagePath}`;
  };

  const getRegionalLink = (supply: Supply): string | null => {
    if (!selectedRegion) {
      // If no region selected, use the default link
      return supply.link || null;
    }

    // Try to get regional link
    const regionalLink = supply.regionalLinks?.[selectedRegion];
    return regionalLink || null;
  };

  const isAvailableInRegion = (supply: Supply): boolean => {
    if (!selectedRegion) {
      return true; // Show all if no region selected
    }
    return !!getRegionalLink(supply);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {supplies.map((supply) => (
        <div
          key={supply.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex"
        >
          {/* Image - Left Side */}
          <div className="relative w-1/2 aspect-square bg-white overflow-hidden">
            {supply.image ? (
              <Image
                src={getImageSrc(supply.image) || supply.image}
                alt={supply.item}
                fill
                className="object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
                <span className="text-6xl">🍕</span>
              </div>
            )}
          </div>

          {/* Content - Right Side */}
          <div className="w-1/2 p-4 flex flex-col justify-between">
            <div>
              {/* Item Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-3">
                {supply.item}
              </h3>

              {/* Cost */}
              <div className="mb-3">
                <span className="text-2xl font-bold text-gray-900">
                  {supply.cost}
                </span>
              </div>

              {/* Notes */}
              {supply.notes && supply.notes !== "TBA" && supply.notes !== "" && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {supply.notes}
                </p>
              )}

              {/* Availability Badge */}
              {selectedRegion && !isAvailableInRegion(supply) && (
                <div className="mb-3">
                  <RegionalAvailabilityBadge region={selectedRegion} />
                </div>
              )}
            </div>

            {/* Link Button */}
            {(() => {
              const regionalLink = getRegionalLink(supply);
              const available = isAvailableInRegion(supply);

              if (!selectedRegion && supply.link) {
                // No region selected, show default link
                return (
                  <a
                    href={supply.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                  >
                    Buy
                  </a>
                );
              }

              if (selectedRegion && available && regionalLink) {
                // Region selected and product available
                return (
                  <a
                    href={regionalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                  >
                    Buy
                  </a>
                );
              }

              // Not available in selected region or no link at all
              return (
                <button
                  disabled
                  className="block w-full text-center bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded cursor-not-allowed"
                >
                  Not Available
                </button>
              );
            })()}
          </div>
        </div>
      ))}
    </div>
  );
}
