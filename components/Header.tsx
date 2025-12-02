import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { NavigationLinks } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: NavigationLinks.HOME },
    { name: 'Services', path: NavigationLinks.SERVICES },
    { name: 'About', path: NavigationLinks.ABOUT },
    { name: 'Reviews', path: NavigationLinks.REVIEWS },
    { name: 'Contact', path: NavigationLinks.CONTACT },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-3xl font-extrabold text-primary tracking-tighter">
              Click<span className="text-secondary">Merge</span>
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="block w-full text-center mt-4 bg-primary text-white px-4 py-3 rounded-md font-bold"
            >
              Call Now: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;