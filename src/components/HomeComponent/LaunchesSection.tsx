import React, { useEffect, useState } from 'react';
import LaunchCard from '../LaunchCard';
import { getUpcomingLaunches } from '../../api/spacexDb';

const LaunchesSection: React.FC = () => {
  const [launches, setLaunches] = useState<any[]>([]);

  useEffect(() => {
    async function fetchUpcomingLaunches() {
      const data = await getUpcomingLaunches();
      const sortedLaunches = data.sort((a: any, b: any) => new Date(a.date_utc).getTime() - new Date(b.date_utc).getTime());
      setLaunches(sortedLaunches.slice(0, 3));
    }

    fetchUpcomingLaunches();
  }, []);

  return (
    <section id="launches-section" className="py-12 bg-gray-100 mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Launches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {launches.map((launch) => (
          <LaunchCard launch={launch} key={launch.id} />
        ))}
      </div>
    </section>
  );
};

export default LaunchesSection;
