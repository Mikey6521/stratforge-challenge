import React, { memo } from 'react';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-2 text-white border-b-2 border-white z-50">
      <div className="container mx-auto text-center">
        <p>© 2024 SpaceX Info. All rights reserved.</p>
        <div className="mt-2">
            <span className="text-gray-400 hover:text-white">Privacy Policy </span> |
            <span className="text-gray-400 hover:text-white"> Careers </span> |
            <span className="text-gray-400 hover:text-white"> Contact</span>
        </div>
        <div className="mt-2">
          <a href="https://twitter.com/spacex" className="text-gray-400 hover:text-white">Twitter </a> |
          <a href="https://www.facebook.com/groups/spaceXverse/" className="text-gray-400 hover:text-white"> Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default memo(FooterComponent);
