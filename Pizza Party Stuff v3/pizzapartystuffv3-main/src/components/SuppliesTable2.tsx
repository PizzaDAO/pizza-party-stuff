import Image from "next/image";

export interface Supply {
  id: number;
  item: string;
  rating: number;
  cost: string;
  link: string;
  notes: string;
  image?: string;
}

interface SuppliesTable2Props {
  supplies: Supply[];
}

export default function SuppliesTable2({ supplies }: SuppliesTable2Props) {
  const renderRating = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {supplies.map((supply) => (
        <div 
          key={supply.id} 
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image */}
          <div className="relative h-48 bg-gray-200 overflow-hidden">
            {supply.image ? (
              <Image
                src={supply.image}
                alt={supply.item}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
                <span className="text-6xl">🍕</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Item Name */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {supply.item}
            </h3>

            {/* Rating */}
            <div className="mb-3">
              <span className="text-yellow-400 text-xl" title={`${supply.rating}/5 stars`}>
                {renderRating(supply.rating)}
              </span>
            </div>

            {/* Cost */}
            <div className="mb-3">
              <span className="text-2xl font-bold text-gray-900">
                {supply.cost}
              </span>
            </div>

            {/* Notes */}
            {supply.notes && supply.notes !== "TBA" && (
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {supply.notes}
              </p>
            )}

            {/* Link Button */}
            {supply.link ? (
              <a
                href={supply.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
              >
                View Product
              </a>
            ) : (
              <button
                disabled
                className="block w-full text-center bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded cursor-not-allowed"
              >
                No Link Available
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
