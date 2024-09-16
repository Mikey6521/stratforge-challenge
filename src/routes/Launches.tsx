import React, { useEffect, useState } from 'react';
import { getLaunches } from '../api/spacexDb';
import FilterComponent from '../components/FilterComponent';
import LaunchCard from '../components/LaunchCard';
import Pagination from '../components/Pagination';

const Launches: React.FC = () => {
  const [launches, setLaunches] = useState<any[]>([]);
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(9);

  useEffect(() => {
    async function fetchLaunches() {
      const offset = (currentPage - 1) * pageSize;
      const data = await getLaunches(offset, pageSize);
      setLaunches(data || []);
    }
    fetchLaunches();
  }, [currentPage, pageSize]);

  const filteredLaunches = launches.filter((launch) =>
    launch?.name?.toLowerCase().includes(filterText?.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLaunches.length / pageSize);

  const paginatedLaunches = filteredLaunches.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="relative text-6xl font-extrabold mb-8 text-center text-gray-400 py-8 font-montserrat">
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-white to-yellow-500 rounded-lg blur-lg opacity-40 -z-10"></span>
        Launches
        <span className="block mt-2 text-2xl text-yellow-300 tracking-wide font-playfair italic">
          Experience the thrill
        </span>
      </h1>
      
      <FilterComponent filterText={filterText} setFilterText={setFilterText} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {paginatedLaunches.map((launch) => (
            <LaunchCard launch={launch} key={launch.id} />
          ))}
      </div>

      {
        paginatedLaunches.length>0 &&
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      }
      
    </div>
  );
};

export default Launches;
