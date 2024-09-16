import React, { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useOutsideClick from '../customHooks/useOutsideClick';
import { FaHistory, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiRocketLaunch } from "react-icons/hi2";
import { BsRocket } from "react-icons/bs";

const linkBaseStyle = "text-white hover:text-yellow-400 px-2 py-1";
const activeLinkStyle = "text-yellow-300 ring-2 ring-yellow-300 ring-opacity-50 rounded";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useOutsideClick(() => setIsOpen(false));

  const getLinkClassName = (path: string) => 
    `${linkBaseStyle} ${location.pathname === path ? activeLinkStyle : ''}`;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className="bg-gray-800 p-4 sticky top-0 z-50 border-b-4 border-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">
          <Link to="/" className="font-montserrat text-4xl font-bold">
            SpaceX
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/rockets" className={getLinkClassName('/rockets')}>Rockets</Link>
          <Link to="/launches" className={getLinkClassName('/launches')}>Launches</Link>
          <Link to="/history" className={getLinkClassName('/history')}>History</Link>
        </div>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <GiHamburgerMenu className="h-8 w-8" />
        </button>
      </div>

      <div ref={menuRef} className={`fixed top-0 right-0 h-full w-52 bg-gray-800 transition-transform transform  
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-auto z-40`}
      >
        <div className="flex justify-center items-center relative px-6 py-4 border-b border-neutral-200">
          <h2 className="text-white text-3xl">Menu</h2>
          <button className="absolute right-2 text-white text-2xl" onClick={toggleMenu}>
            <FaTimes className="h-10 w-10 mr-2" />
          </button>
        </div>

        <div className="flex flex-col items-center mt-8 space-y-6 px-6">
          <Link to="/rockets" className={getLinkClassName('/rockets')} onClick={toggleMenu}>
            <BsRocket size={22} className="inline-block mr-4" />Rockets
          </Link>
          <Link to="/launches" className={getLinkClassName('/launches')} onClick={toggleMenu}>
            <HiRocketLaunch size={22} className="inline-block mr-4" />Launches
          </Link>
          <Link to="/history" className={getLinkClassName('/history')} onClick={toggleMenu}>
            <FaHistory size={22} className="inline-block mr-4" />History
          </Link>
        </div>

      </div>

    </nav>
  );
};

export default memo(NavBar);
