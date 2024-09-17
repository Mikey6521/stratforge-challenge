import React, { useEffect, useState } from 'react';
import HomeBg from '../../assets/HomeBg.jpg';
import HomeBgMd from '../../assets/HomeBgMd.jpg';
import HomeBgSm from '../../assets/HomeBgSm.jpg';

const HeroSection: React.FC = () => {
  const [bgImage, setBgImage] = useState<string>();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const getBackgroundImage = () => {
    if (window.innerWidth >= 1024) {
      return HomeBg;
    } else if (window.innerWidth >= 768) {
      return HomeBgMd;
    } else {
      return HomeBgSm;
    }
  };

  useEffect(() => {
    setBgImage(getBackgroundImage());

    const handleResize = () => {
      setBgImage(getBackgroundImage());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(!bgImage) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      {
        bgImage &&
        <section
          className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
          onLoad={() => setImageLoaded(true)}
        >
          {imageLoaded && (
            <div className="absolute inset-0 bg-custom-gradient opacity-60" />
          )}
          <div className="relative text-white text-center px-6 py-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-montserrat">
              Explore Space with <span className="text-yellow-400">SpaceX</span>
            </h1>
            <p className="text-lg md:text-2xl mb-6 font-roboto">
              Stay updated with launches and space milestones
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300
                 text-white font-semibold py-3 px-6 rounded-lg transition"
                onClick={() => document.getElementById('launches-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Upcoming Launches
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300
                 text-white font-semibold py-3 px-6 rounded-lg transition"
                onClick={() => document.getElementById('history-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Latest News
              </button>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default HeroSection;
