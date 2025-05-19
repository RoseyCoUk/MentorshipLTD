import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-4 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="text-blue-500 font-bold text-2xl">Mentorship.ltd</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors`}>About</a>
            <div className="relative group">
              <button className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors`}>
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100">
                <a href="#programs" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Core Mentorship</a>
                <a href="#programs" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Elite Mentorship</a>
                <a href="#programs" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Legacy Mentorship</a>
              </div>
            </div>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors`}>Results</a>
            <a href="#newsletter" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors`}>Resources</a>
          </nav>
          
          <div className="hidden md:block">
            <Button variant="primary" href="#contact">Apply Now</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-800 py-2 border-b border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#programs" 
                className="text-gray-800 py-2 border-b border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-800 py-2 border-b border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </a>
              <a 
                href="#newsletter" 
                className="text-gray-800 py-2 border-b border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <Button variant="primary" href="#contact" onClick={() => setIsMenuOpen(false)}>
                Apply Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;