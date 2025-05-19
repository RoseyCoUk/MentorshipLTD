import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const CtaSection: React.FC = () => {
  return (
    <Section id="contact" background="white" padding="xl">
      <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          You Know Where You're At. Let's Fix It.
        </h2>
        
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          The difference between where you are and where you want to be isn't more information. It's the right direction, systems, and execution.
        </p>
        
        <Button variant="primary" size="lg" href="#" className="animate-pulse">
          Apply Now
        </Button>
        
        <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500 mb-2">97%</p>
            <p className="text-sm text-gray-500">Client Results Rate</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500 mb-2">300+</p>
            <p className="text-sm text-gray-500">Businesses Transformed</p>
          </div>
          
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500 mb-2">$250M+</p>
            <p className="text-sm text-gray-500">Revenue Generated</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;