import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-sans font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm";
  
  const variants = {
    primary: "bg-sage-600 text-white hover:bg-sage-700 hover:shadow-md",
    outline: "border-2 border-sage-600 text-sage-700 hover:bg-sage-50",
    ghost: "bg-white/60 text-sage-800 hover:bg-white"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};