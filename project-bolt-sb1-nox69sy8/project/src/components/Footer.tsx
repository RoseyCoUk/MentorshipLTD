import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Mentorship.ltd</h3>
            <p className="mb-6 text-gray-300 max-w-xs">
              Tactical guidance and mindset training for ambitious entrepreneurs looking to build wealth, discipline, and business power.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Programs</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">Results</a></li>
              <li><a href="#newsletter" className="text-gray-300 hover:text-blue-400 transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Core Mentorship</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Elite Mentorship</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Legacy Mentorship</a></li>
              <li><a href="#newsletter" className="text-gray-300 hover:text-blue-400 transition-colors">Free Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mt-1 mr-3 text-blue-400" />
                <span className="text-gray-300">info@mentorship.ltd</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mt-1 mr-3 text-blue-400" />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 text-blue-400" />
                <span className="text-gray-300">
                  123 Business Avenue<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mentorship.ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;