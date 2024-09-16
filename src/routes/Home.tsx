import React, { Suspense } from 'react';
const HeroSection = React.lazy(() => import('../components/HomeComponent/HeroSection'));
const LaunchesSection = React.lazy(() => import('../components/HomeComponent/LaunchesSection'));
const HistorySection = React.lazy(() => import('../components/HomeComponent/HistorySection'));

const Home: React.FC = () => {
  return (
    <div className="container mx-auto min-w-fit">
      <Suspense fallback={<div className='flex items-center justify-center'>Loading...</div>}>
      <HeroSection />
      <div className="mx-auto p-4">
        <LaunchesSection />
        <HistorySection />
      </div>
      </Suspense>
    </div>
  );
};

export default Home;
