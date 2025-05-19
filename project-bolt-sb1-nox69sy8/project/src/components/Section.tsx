import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'white' | 'light' | 'dark' | 'navy';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  background = 'white',
  padding = 'lg'
}) => {
  let bgColor;
  
  switch (background) {
    case 'white':
      bgColor = 'bg-white';
      break;
    case 'light':
      bgColor = 'bg-gray-50';
      break;
    case 'dark':
      bgColor = 'bg-navy-800 text-white';
      break;
    case 'navy':
      bgColor = 'bg-blue-600 text-white';
      break;
    default:
      bgColor = 'bg-white';
  }
  
  let paddingClass;
  
  switch (padding) {
    case 'none':
      paddingClass = '';
      break;
    case 'sm':
      paddingClass = 'py-8';
      break;
    case 'md':
      paddingClass = 'py-12';
      break;
    case 'lg':
      paddingClass = 'py-16 md:py-20';
      break;
    case 'xl':
      paddingClass = 'py-20 md:py-32';
      break;
    default:
      paddingClass = 'py-16 md:py-20';
  }
  
  return (
    <section id={id} className={`${bgColor} ${paddingClass} ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;