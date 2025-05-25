import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 text-secondary-500" />
              <span className="ml-2 text-xl font-serif font-bold">Soulune</span>
            </div>
            <p className="text-white/70 mb-6">
              Unlock the wisdom of the tarot cards with our AI-powered reading service. Get accurate, personalized insights 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'How It Works', 'Pricing', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/70 hover:text-secondary-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Resources</h3>
            <ul className="space-y-3">
              {['Tarot Meanings', 'Blog', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-white/70 hover:text-secondary-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-secondary-500" />
                <a 
                  href="mailto:support@emeraldtarot.com"
                  className="text-white/70 hover:text-secondary-500 transition-colors"
                >
                  support@emeraldtarot.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-secondary-500" />
                <a 
                  href="tel:+18001234567"
                  className="text-white/70 hover:text-secondary-500 transition-colors"
                >
                  +1 (800) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8">
          <p className="text-center text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Soulune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;