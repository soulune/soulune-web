import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from '../components/AnimatedText';

const HowItWorks: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "01",
      title: "Enter your question",
      description: "Start by entering your specific question or selecting a reading type from our options."
    },
    {
      number: "02",
      title: "AI draws your cards",
      description: "Our advanced AI will draw the appropriate cards for your specific question."
    },
    {
      number: "03",
      title: "Get detailed insights",
      description: "Receive a comprehensive reading with insights about your past, present, and future."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-white/10 text-secondary-300 rounded-full text-sm font-medium mb-4"
          >
            Simple Process
          </motion.div>
          <AnimatedText 
            text="How It Works?" 
            el="h2"
            className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6"
          />
          <AnimatedText
            text="It's as simple as AI-based reading is now available. Get your accurate, personalized readings at a fraction of traditional cost readings. Here's how our AI-based reading service works."
            el="p"
            className="text-lg text-white/80 max-w-3xl mx-auto"
            delay={0.3}
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center relative"
            >
              <div className="mb-6 relative inline-block">
                <div className="text-6xl font-bold text-secondary-500 opacity-20 absolute -top-6 left-1/2 transform -translate-x-1/2">
                  {step.number}
                </div>
                <div className="w-16 h-16 rounded-full bg-secondary-600 flex items-center justify-center relative z-10 mx-auto">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-secondary-600/30 hidden md:block"></div>
                )}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-primary-900/70 to-primary-800/70 backdrop-blur-sm p-8 rounded-xl border border-primary-600/30">
            <div className="absolute inset-0 bg-secondary-500/5 rounded-xl" />
            <div className="relative">
              <AnimatedText 
                text="Our AI analyzes thousands of historical tarot interpretations to provide you with accurate, personalized readings that rival traditional in-person sessions." 
                el="p"
                className="text-lg mb-3"
              />
              <AnimatedText 
                text="We combine ancient wisdom with cutting-edge technology to deliver insights that are specific to your unique situation." 
                el="p"
                className="text-lg"
                delay={0.3}
              />
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-secondary-500/20 blur-xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
          <motion.div 
            className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-secondary-500/10 blur-xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;