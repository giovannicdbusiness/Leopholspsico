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
    primary: "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-md",
    outline: "border-[1.5px] border-brand-600 text-brand-700 hover:bg-brand-50",
    ghost: "bg-white/60 text-brand-800 hover:bg-white"
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