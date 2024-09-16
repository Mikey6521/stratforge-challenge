import React, { useEffect, useState } from 'react';
import HistoryCard from '../HistoryCard';
import { getHistory } from '../../api/spacexDb';

const HistorySection: React.FC = () => {
  const [historyEvents, setHistoryEvents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchHistory() {
      const data = await getHistory();
      setHistoryEvents(data.slice(0, 3));
    }

    fetchHistory();
  }, []);

  return (
    <section id="history-section" className="py-12 bg-gray-100 mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">SpaceX Milestones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {historyEvents.map((event) => (
          <HistoryCard
            key={event.id}
            title={event.title}
            date={event.event_date_utc}
            description={event.details}
          />
        ))}
      </div>
    </section>
  );
};

export default HistorySection;
