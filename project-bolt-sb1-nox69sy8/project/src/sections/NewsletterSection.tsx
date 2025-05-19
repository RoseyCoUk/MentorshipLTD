import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { ArrowRight, Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would connect to a newsletter service in production
      setSubscribed(true);
      setEmail('');
    }
  };
  
  return (
    <Section id="newsletter" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll opacity-0">
          <div className="bg-white text-gray-900 rounded-lg p-8 md:p-12 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 rounded-full p-3 mr-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Free Growth Framework</h3>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The 3-Step Business Control System Used By Our Top Performers
            </h2>
            
            <p className="text-gray-700 mb-8">
              Join over 10,000 operators receiving tactical frameworks and battle-tested systems you can implement immediately to take control of your business.
            </p>
            
            {subscribed ? (
              <div className="bg-green-100 border border-green-500 rounded-lg p-4 text-green-800">
                <p className="font-medium">Framework sent. Check your email and implement it immediately.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <Button type="submit" variant="primary" className="w-full">
                  Get Instant Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
            
            <p className="text-xs text-gray-500 mt-4">
              No spam. No fluff. Just actionable systems you can use today.
            </p>
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Inside This Framework:</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">System Architecture</h4>
                <p className="text-gray-600">
                  The exact structure used to build predictable, controllable business operations that don't require your constant attention.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Decision Matrix</h4>
                <p className="text-gray-600">
                  The decision framework our clients use to eliminate uncertainty and take immediate high-leverage action in any situation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Revenue Multiplier</h4>
                <p className="text-gray-600">
                  The 3-part strategy that consistently increases client revenue by 2-3x within the first 90 days of implementation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                <span className="text-white font-bold">+</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Priority Selection</h4>
                <p className="text-gray-600">
                  Framework subscribers receive priority consideration when applying for our mentorship programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NewsletterSection;