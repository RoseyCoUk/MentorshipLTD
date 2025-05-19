import React, { useState } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const programs = [
  {
    title: "Strategic Foundations",
    description: "For early-stage entrepreneurs ready to establish proven systems and achieve consistent growth.",
    features: [
      "Monthly Strategic Direction Calls",
      "Weekly Group Implementation Sessions",
      "Core Business Framework Access",
      "Complete System Audit & Rebuild",
      "Private Community Access",
      "Direct Accountability Support",
    ],
    cta: "Apply Now",
    popular: false,
  },
  {
    title: "Accelerated Growth",
    description: "For established operators ready to scale operations, build systems, and aggressively expand market position.",
    features: [
      "Weekly 1:1 Strategic Direction",
      "Direct Mentor Access Between Calls",
      "Complete Framework Implementation",
      "Custom Growth Roadmap",
      "High-Performance Network Access",
      "Quarterly Business Intensive",
      "Team Systems Integration",
      "Rapid Problem Resolution",
    ],
    cta: "Apply Now",
    popular: true,
  },
  {
    title: "Empire Building",
    description: "For high-performing entrepreneurs ready to create true wealth and build lasting business architecture.",
    features: [
      "Unlimited Access to Lead Strategist",
      "On-Demand Mentor Support",
      "Custom Framework Development",
      "Complete Growth Team Support",
      "Inner Circle Network Integration", 
      "Capital & Deal Access",
      "Monthly In-Person Intensives",
      "Executive Mindset Training",
      "Legacy Strategy Blueprint",
    ],
    cta: "Apply Now",
    popular: false,
  }
];

const ProgramsSection: React.FC = () => {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);
  
  return (
    <Section id="programs" background="white">
      <SectionTitle 
        title="Mentorship Formats" 
        subtitle="We deliver high-impact guidance through frameworks, live calls, and strategic systems — not generic advice."
        centered={true}
        className="text-gray-900"
        subtitleClassName="text-gray-700"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg overflow-hidden transition-all duration-300 animate-on-scroll opacity-0 ${
              program.popular ? 'border-2 border-blue-500 shadow-xl transform hover:-translate-y-2' : 'border border-gray-200 shadow-lg hover:-translate-y-1'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {program.popular && (
              <div className="bg-blue-500 text-white py-2 px-4 text-center font-semibold">
                Most Selected
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
              
              <p className="text-gray-700 mb-6">
                {program.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-gray-900 font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {program.features.slice(0, expandedProgram === index ? program.features.length : 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-blue-500 w-5 h-5 mr-2 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {program.features.length > 4 && expandedProgram !== index && (
                  <button 
                    className="text-blue-500 mt-3 hover:underline text-sm inline-flex items-center"
                    onClick={() => setExpandedProgram(index)}
                  >
                    See all components
                  </button>
                )}
              </div>
              
              <Button 
                variant={program.popular ? "primary" : "outline"} 
                href="#contact" 
                className="w-full"
              >
                {program.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProgramsSection;