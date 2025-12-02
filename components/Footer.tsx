import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { NavigationLinks } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="text-3xl font-extrabold text-white tracking-tighter">
              Click<span className="text-primary">Merge</span>
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. We help businesses scale through strategic digital solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to={NavigationLinks.HOME} className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to={NavigationLinks.SERVICES} className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to={NavigationLinks.ABOUT} className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to={NavigationLinks.REVIEWS} className="text-gray-400 hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to={NavigationLinks.CONTACT} className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 flex-shrink-0" size={20} />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 flex-shrink-0" size={20} />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-400 hover:text-white">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;