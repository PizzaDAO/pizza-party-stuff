import HeroBanner from '@/components/HeroBanner';
import SuppliesTable from '@/components/SuppliesTable';
import { pizzaPartySupplies } from '@/data/supplies';
import SuppliesTable2 from '@/components/SuppliesTable2';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroBanner />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pizza Party Stuff from PizzaDAO
          </h2>
          <p className="text-gray-600">
            We have a list of pizza inspired items that we think are cool.
            </p>
        </div>
        <SuppliesTable2 supplies={pizzaPartySupplies} />
      </main>
    </div>
  );
}
