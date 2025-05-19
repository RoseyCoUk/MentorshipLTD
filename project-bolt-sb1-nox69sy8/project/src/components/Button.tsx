import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  size = 'md', 
  className = '',
  onClick,
  type
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500';
      break;
    case 'secondary':
      variantClasses = 'bg-navy-700 hover:bg-navy-800 text-white focus:ring-navy-600';
      break;
    case 'outline':
      variantClasses = 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500';
      break;
    default:
      variantClasses = 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500';
  }
  
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'text-sm px-4 py-2';
      break;
    case 'md':
      sizeClasses = 'text-base px-5 py-3';
      break;
    case 'lg':
      sizeClasses = 'text-lg px-6 py-4';
      break;
    default:
      sizeClasses = 'text-base px-5 py-3';
  }
  
  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;