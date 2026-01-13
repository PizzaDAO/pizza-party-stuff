import HeroBanner from '@/components/HeroBanner';
import { pizzaPartySupplies } from '@/data/supplies';
import { RegionProvider } from '@/contexts/RegionContext';
import RegionalProductsView from '@/components/RegionalProductsView';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <RegionProvider>
      <div className="min-h-screen bg-gray-100">
        <HeroBanner />
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <RegionalProductsView supplies={pizzaPartySupplies} />
        </main>
        <SocialLinks />
      </div>
    </RegionProvider>
  );
}
