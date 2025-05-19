import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProgramsSection from './sections/ProgramsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import NewsletterSection from './sections/NewsletterSection';
import CtaSection from './sections/CtaSection';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight - 100 && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;