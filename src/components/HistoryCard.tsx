import React, { useState } from 'react';
import useOutsideClick from '../customHooks/useOutsideClick';

interface HistoryCardProps {
  title: string;
  date: string;
  description: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ title, date, description }) => {
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
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{new Date(date).toLocaleDateString()}</p>
      <p className="mt-2 text-gray-700">
        {isExpanded ? description : `${description.slice(0, MAX_CHAR_LIMIT)}...`}
      </p>
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

export default HistoryCard;
