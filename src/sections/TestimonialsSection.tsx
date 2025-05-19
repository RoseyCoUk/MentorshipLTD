import React, { useState } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "I went from struggling to hit $20K months to consistently generating $75K+ monthly revenue after just 4 months in the Elite Mentorship program. The frameworks and mindset training transformed how I approach my business.",
    metrics: [
      { label: "Revenue Growth", value: "275%" },
      { label: "Team Size", value: "3 → 12" },
      { label: "Work Hours", value: "60 → 30" }
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder, GrowthLabs",
    image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Joining the Core Mentorship was the best business decision I've ever made. Within 6 months, we went from a side hustle to a 7-figure agency with systems that run without my constant involvement.",
    metrics: [
      { label: "Annual Revenue", value: "$100K → $1.2M" },
      { label: "Client Retention", value: "93%" },
      { label: "Profit Margin", value: "41%" }
    ],
  },
  {
    id: 3,
    name: "Rebecca Torres",
    position: "Founder, Wellness Empire",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "I was burnt out and ready to sell my business when I found Mentorship.ltd. The Legacy program helped me restructure everything, hire a competent team, and scale to 8-figures while working just 20 hours a week.",
    metrics: [
      { label: "Yearly Growth", value: "340%" },
      { label: "Locations", value: "1 → 7" },
      { label: "Work Hours", value: "70 → 20" }
    ],
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <Section id="testimonials" background="light">
      <SectionTitle 
        title="Transformation Stories" 
        subtitle="Real businesses, real results. Here's what our clients have achieved."
        centered={true}
      />
      
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-800/60 to-transparent flex flex-col justify-end p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{currentTestimonial.name}</h3>
                  <p className="text-blue-200">{currentTestimonial.position}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  {currentTestimonial.metrics.map((metric, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-xl md:text-2xl font-bold text-white">{metric.value}</p>
                      <p className="text-sm text-blue-100">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <div className="relative bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Quote className="text-blue-500 w-12 h-12 absolute -top-6 -left-6" />
              
              <p className="text-lg text-gray-700 italic mb-8">
                "{currentTestimonial.quote}"
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">{currentTestimonial.name}</p>
                  <p className="text-gray-600">{currentTestimonial.position}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-50 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-50 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;