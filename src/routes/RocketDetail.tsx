import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getRocketDetails } from '../api/spacexDb';
import fallbackRocketImage from '../assets/fallbackRocketImage.jpg';

const RocketDetail: React.FC = () => {
  const location = useLocation();
  const id = location.state?.id;
  const [rocket, setRocket] = useState<any>(null);

  useEffect(() => {
    async function fetchRocket() {
      const data = await getRocketDetails(id);
      setRocket(data);
    }
    fetchRocket();
  }, [id]);

  if (!rocket) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-4xl font-extrabold mb-6 text-center tracking-wider">{rocket.name ?? 'N/A'}</h1>

        <div className="flex justify-between items-center text-gray-400 text-lg mb-6">
          <p>
            Height: <span className="font-semibold">{rocket.height.meters ?? 'N/A'} mtr</span>
          </p>
          <p>
            Diameter: <span className="font-semibold">{rocket.diameter.meters ?? 'N/A'} mtr</span>
          </p>
          <p>
            Mass: <span className="font-semibold">{rocket.mass.kg ?? 'N/A'} kg</span>
          </p>
        </div>

        <div className="flex mb-6 w-fit mx-auto">
          <img
            src={rocket.flickr_images[0] ? rocket.flickr_images[0] : fallbackRocketImage}
            alt={rocket.name}
            className="w-full max-w-4xl h-auto max-h-96 object-contain rounded-lg 
            shadow-[0_4px_10px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_15px_rgba(255,255,255,0.5)] 
            transition duration-300"
          />
        </div>

        

        {/* Rocket Description */}
        {rocket?.description && (
          <p className="text-gray-300 mt-4 text-justify leading-6 tracking-wide">
            {rocket.description}
          </p>
        )}

        {/* Rocket Wikipedia Link */}
        {rocket?.wikipedia && (
          <div className="mt-8 flex justify-center">
            <a
              href={rocket.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              🌍 Learn More on Wikipedia
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RocketDetail;
