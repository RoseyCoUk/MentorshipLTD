import React from 'react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/90 to-blue-700/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Mentorship That Builds Wealth, Discipline & Business Power.
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Tactical guidance. Unshakable mindset. Real transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                href="#programs"
              >
                View Mentorship Options
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="#newsletter"
              >
                Get Free Framework
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white border-4 border-blue-500 rounded-lg p-8 animate-slide-in-right opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">What You'll Gain:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">Tactical frameworks that create predictable growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">Systems to manage both business and mental discipline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">Direct access to operators who've built 7-8 figure businesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">Network of high-performers who eliminate weak thinking</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button href="#contact" variant="primary" className="w-full">
                    Apply For Selection
                  </Button>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-blue-500 text-white py-3 px-5 rounded-md rotate-6 font-bold animate-slide-in-right opacity-0" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                Application-Only Access
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <a href="#about" className="inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;