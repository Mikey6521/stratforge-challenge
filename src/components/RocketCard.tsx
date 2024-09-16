import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOutsideClick from '../customHooks/useOutsideClick';
import fallbackRocketImage from '../assets/fallbackRocketImage.jpg'
interface RocketCardProps {
  name: string;
  description: string;
  imageUrl: string;
  id: string;
}

const RocketCard: React.FC<RocketCardProps> = ({ id, name, description, imageUrl }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_CHAR_LIMIT = 100;
  const cardRef = useOutsideClick(() => setIsExpanded(false));

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      ref={cardRef} 
      className="border rounded shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
    >
      <div 
        className="cursor-pointer"
        onClick={() => {
          const formattedName = name.replace(/\s+/g, '-');
          navigate(`/rockets/${formattedName}`, { state: { id } });
        }}
      >
        <img src={imageUrl?imageUrl:fallbackRocketImage} alt={name} className="w-full h-48 object-cover" />
        <h2 className="text-xl font-bold mt-2">{name}</h2>

        <p className="text-gray-700">
          {isExpanded ? description : `${description.slice(0, MAX_CHAR_LIMIT)}...`}
        </p>
      </div>

      {description.length > MAX_CHAR_LIMIT && (
        <button
          className="text-blue-500 hover:underline mt-2"
          onClick={toggleExpand}
        >
          {isExpanded ? 'See less' : 'See more'}
        </button>
      )}
    </div>
  );
};

export default RocketCard;
