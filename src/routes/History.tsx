import React, { useEffect, useState } from 'react';
import HistoryCard from '../components/HistoryCard';
import { getHistory } from '../api/spacexDb';

const History: React.FC = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    async function fetchHistory() {
      const data = await getHistory();
      setHistory(data);
    }
    fetchHistory();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="relative text-6xl font-extrabold mb-8 text-center text-gray-400 py-8 font-montserrat">
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-white to-yellow-500 rounded-lg blur-lg opacity-40 -z-10">
        </span>
          History
        <span className="block mt-2 text-2xl text-yellow-300 tracking-wide font-playfair italic">
          Relive the epic journey
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {history.map((event) => (
          <HistoryCard
            key={event.id}
            title={event.title}
            date={event.event_date_utc}
            description={event.details}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
