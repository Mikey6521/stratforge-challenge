import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLaunchDetails } from '../api/spacexDb';
import fallbackLaunchImageLarge from '../assets/fallbackLaunchImageLarge.png';

const LaunchDetail: React.FC = () => {
  const location = useLocation();
  const id = location.state?.id;
  const [launch, setLaunch] = useState<any>(null);

  useEffect(() => {
    async function fetchLaunchDetails() {
      const data = await getLaunchDetails(id);
      setLaunch(data);
    }
    fetchLaunchDetails();
  }, [id]);

  if (!launch) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        
        <h1 className="text-4xl font-extrabold mb-6 text-center tracking-wider text-yellow-400">
          {launch.name ?? 'N/A'}
        </h1>

        <div className="flex justify-between items-center">
          <p className="text-gray-400">Flight No:{" "}  
            <span className="font-semibold text-indigo-500">{launch.flight_number ?? 'N/A'}</span>
          </p>
          <p className="text-gray-400">Launch Date:{" "}
            <span className="font-semibold text-indigo-500">{launch.date_utc ? new Date(launch.date_utc).toLocaleString() : 'N/A'}</span>
          </p>
          <p className="text-gray-400">Success:{" "}
            <span className={`font-semibold ${launch.success ? 'text-green-500' : 'text-red-500'}`}>
              {launch.success ? 'Yes' : 'No'}
            </span>
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <img
            src={launch.links.patch.large ? launch.links.patch.large : fallbackLaunchImageLarge}
            alt={`${launch.name} patch`}
            className="w-40 h-40 object-cover rounded-full shadow-md transition duration-300 transform hover:scale-110 hover:shadow-lg"
          />
        </div>

        {launch?.links?.webcast && (
          <div className="mt-8 flex justify-center">
            <a
              href={launch.links.webcast}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              🚀 Watch Webcast
            </a>
          </div>
        )}

        {launch?.details && (
          <p className="text-gray-300 mt-4 text-justify leading-6 tracking-wide">
            {launch.details}
          </p>
        )}

        {launch?.failures?.length > 0 && (
          <div className="text-red-400 mt-6">
            <h3 className="font-bold text-lg underline mb-2">Failures:</h3>
            {launch.failures.map((failure: any, index: number) => (
              <div key={index} className="mt-2">
                <p>Time: {failure.time ?? 'N/A'} seconds</p>
                <p>Reason: {failure.reason ?? 'N/A'}</p>
              </div>
            ))}
          </div>
        )}

        {(launch?.links?.article || launch?.links?.wikipedia) && (
          <div className="mt-6">
            <p className="text-lg text-yellow-400 font-semibold mb-2">Read more:</p>
            <ul className="list-none space-y-2">
              {launch?.links?.article && (
                <li>
                  <a
                    href={launch.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-yellow-300 transition duration-300"
                  >
                    📰 Article
                  </a>
                </li>
              )}
              {launch?.links?.wikipedia && (
                <li>
                  <a
                    href={launch.links.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-yellow-300 transition duration-300"
                  >
                    🌍 Wikipedia
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchDetail;
