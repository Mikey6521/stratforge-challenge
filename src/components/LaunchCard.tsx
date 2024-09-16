import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fallbackLaunchImage from '../assets/fallbackLaunchImage.png';

interface LaunchCardProps {
  launch: any;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const [imgSrc, setImgSrc] = useState(launch.links.patch.small);
  const navigate = useNavigate();

  const handleError = () => {
    setImgSrc('../../public/spaceXlogo.png');
  };

  return (
    <div className="border rounded shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer">
      <div 
        onClick={() => {
          const formattedName = launch.name.replace(/\s+/g, '-');
          const id = launch.id;
          navigate(`/launches/${formattedName}`, { state: { id } });
        }}
        >
        <h2 className="text-xl font-bold">{launch.name}</h2>
        <p className="text-gray-700">Flight Number: {launch.flight_number}</p>
        <p className="text-gray-700">
          Launch Date: {new Date(launch.date_utc).toLocaleString()}
        </p>
        <p className="text-gray-700">Success: {launch.success ? 'Yes' : 'No'}</p>
        <img
          src={imgSrc?imgSrc:fallbackLaunchImage}
          alt={`${launch.name} patch`}
          className="w-20 h-20 object-cover mt-4"
          onError={handleError}
        />
      </div>
      <div className="mt-4">
        {launch.links.webcast &&
          <div className="mt-2">
            <a
              href={launch.links.webcast}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline font-bold"
            >
              Watch Webcast
            </a>
          </div>
        }
      </div>
    </div>
  );
};

export default LaunchCard;
