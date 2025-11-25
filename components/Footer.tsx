import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-slate-600 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Logo className="h-12 w-auto" variant="dark" />
            </div>
            <p className="text-gray-500 mb-4 text-sm leading-relaxed">
              Modern, painless, and affordable dental treatments trusted by families across Philadelphia. Your smile deserves expert care.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900">Services</h3>
            <ul className="space-y-2">
              {['Dental Implants', 'Cosmetic Dentistry', 'Root Canal', 'Orthodontics', 'Teeth Whitening'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-500 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5" />
                <div>
                    <p>{CONTACT_INFO.hours.weekdays}</p>
                    <p>{CONTACT_INFO.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Denteek Dental Clinic. All rights reserved.</p>
          <p className="mt-3 text-xs font-medium text-gray-500">Demo website created by Meet Kumar – Not the clinic’s live site.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;