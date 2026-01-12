export interface Supply {
  id: number;
  item: string;
  rating: number;
  cost: string;
  link: string;
  notes: string;
}

interface SuppliesTableProps {
  supplies: Supply[];
}

export default function SuppliesTable({ supplies }: SuppliesTableProps) {
  const renderRating = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Link
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {supplies.map((supply) => (
              <tr key={supply.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {supply.item}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="text-yellow-400" title={`${supply.rating}/5 stars`}>
                    {renderRating(supply.rating)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {supply.cost}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                  {supply.link ? (
                    <a 
                      href={supply.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      View Link
                    </a>
                  ) : (
                    <span className="text-gray-400">No link</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {supply.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}