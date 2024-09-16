import React, { useEffect, useState } from 'react';
import RocketCard from '../components/RocketCard';
import { getRockets } from '../api/spacexDb';

const Rockets: React.FC = () => {
  const [rockets, setRockets] = useState<any[]>([]);
  
  useEffect(() => {
    async function fetchRockets() {
      const data = await getRockets();
      setRockets(data);
    }
    fetchRockets();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="relative text-6xl font-extrabold mb-8 text-center text-gray-400 py-8 font-montserrat">
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-white to-yellow-500 rounded-lg blur-lg opacity-40 -z-10"></span>
        Rockets
        <span className="block mt-2 text-2xl text-yellow-300 tracking-wide font-playfair italic">
          Aim beyond the horizon
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rockets.map((rocket) => (
            <RocketCard
                key={rocket.id}
                id={rocket.id}
                name={rocket.name}
                description={rocket.description}
                imageUrl={rocket.flickr_images[0]}
            />
        ))}
      </div>
    </div>
  );
};

export default Rockets;
