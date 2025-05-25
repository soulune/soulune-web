import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button';
import AnimatedText from '../components/AnimatedText';

const Newsletter: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-20 -left-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
            <motion.div 
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1
              }}
            />
            
            <div className="relative z-10">
              <AnimatedText 
                text="Join Our Newsletter" 
                el="h2"
                className="font-serif text-3xl sm:text-4xl font-bold mb-6"
              />
              <AnimatedText
                text="Subscribe for a chance to get free tarot readings every month"
                el="p"
                className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
                delay={0.3}
              />
              
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  />
                  <Button variant="secondary" className="sm:flex-shrink-0">
                    Subscribe
                  </Button>
                </div>
                <p className="mt-3 text-sm text-white/60">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;