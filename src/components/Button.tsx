import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500",
    secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",
    outline: "border border-primary-700 text-primary-700 hover:bg-primary-50 focus:ring-primary-500"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;