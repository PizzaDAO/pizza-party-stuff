import Image from 'next/image';
import pizzaDAOImage from '../../public/PizzaDAOLogo.png';

export default function HeroBanner() {
  return (
    <div className="bg-red-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Image src={pizzaDAOImage} alt="PizzaDAO" width={100} height={100} />
        <h1 className="font-asap-condensed text-4xl md:text-6xl font-bold text-center">
          Pizza Party Stuff
        </h1>
        <p className="text-xl text-center mt-4 text-red-100">
          Everything you need for the perfect pizza party
        </p>
      </div>
    </div>
  );
}