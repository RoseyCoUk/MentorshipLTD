import React from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import { Award, Target, Users, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll opacity-0">
          <SectionTitle 
            title="No Templates. No Fluff. Just Results." 
            subtitle="We help ambitious operators build systems, habits, and control that lead to exponential business growth."
          />
          
          <div className="space-y-6">
            <p className="text-gray-700">
              At Mentorship.ltd, entrepreneurial success isn't random—it's engineered through proven systems, disciplined execution, and strategic leverage. Our programs are designed for serious operators who want results, not cheerleading.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <Target className="w-10 h-10 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tactical Direction</h3>
                  <p className="text-gray-600">We don't give vague advice. You get precise systems with immediate application.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <Users className="w-10 h-10 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Strategic Network</h3>
                  <p className="text-gray-600">Connect with operators who eliminate excuses and leverage each other's expertise.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <Zap className="w-10 h-10 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rapid Execution</h3>
                  <p className="text-gray-600">Stop overthinking. Our frameworks optimize for speed and decisive action.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <Award className="w-10 h-10 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                  <p className="text-gray-600">Our mentees consistently outperform market averages by 3-5x in 12 months.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:pl-8 animate-on-scroll opacity-0">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Founder speaking at business event" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-gray-900 font-bold text-xl mb-2">James Anderson</h3>
              <p className="text-blue-600 font-semibold mb-3">Founder & Lead Strategist</p>
              <p className="text-gray-700 text-sm">
                "We don't promise overnight success. We guarantee the systems, discipline, and direction required to build something real."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Format Section */}
      <div className="mt-24 bg-blue-600 rounded-lg p-10 text-white animate-on-scroll opacity-0">
        <h2 className="text-3xl font-bold mb-8 text-center">How We Deliver Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Live Strategic Calls</h3>
            <p className="text-gray-700 text-center">
              Direct 1:1 and group sessions with proven operators who've built and scaled real businesses.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Battle-Tested Systems</h3>
            <p className="text-gray-700 text-center">
              Implementation frameworks and SOPs that eliminate guesswork and accelerate execution.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Elite Network Access</h3>
            <p className="text-gray-700 text-center">
              Connect with high-performing operators who share opportunities, strategies, and leverage.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;