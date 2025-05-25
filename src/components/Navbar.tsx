import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-800/95 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-secondary-500" />
            <span className="ml-2 text-xl font-serif font-bold text-white">Soulunet</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'How It Works', 'Pricing', 'Testimonials'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/90 hover:text-secondary-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-primary-700/50">
              Log In
            </Button>
            <Button variant="secondary" size="sm">
              Sign Up
            </Button>
          </div>
          
          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-primary-800 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-5 space-y-4">
            {['Services', 'How It Works', 'Pricing', 'Testimonials'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-white/90 hover:text-secondary-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-3 border-t border-primary-600">
              <Button variant="outline" className="w-full text-white border-white hover:bg-primary-700/50">
                Log In
              </Button>
              <Button variant="secondary" className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;