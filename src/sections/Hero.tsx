import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button';
import AnimatedText from '../components/AnimatedText';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -15, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dark-400 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-300/50 via-dark-400 to-dark-500" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-secondary-500/10 blur-[100px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute bottom-20 left-[5%] w-[30rem] h-[30rem] rounded-full bg-primary-500/10 blur-[120px]"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center pt-12 lg:pt-24 pb-20">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <AnimatedText 
              text="Unlock The Full Power of The Cards" 
              el="h1"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            />
            <AnimatedText
              text="With Our Tarot Reading Service"
              el="h2"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-500 mb-8"
              delay={0.4}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Welcome to our AI-powered reading service, where advanced algorithms analyze ancient wisdom to provide
              you with the most accurate and personalized tarot readings.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button variant="secondary" size="lg">Get Started</Button>
              <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </motion.div>
          </div>
          
          <div ref={ref} className="lg:w-1/2 relative">
            <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute h-[280px] w-[180px] rounded-lg"
                  style={{
                    left: `calc(50% - 90px)`,
                    transformOrigin: 'bottom center',
                    rotate: `${-10 + (i * 5)}deg`,
                    zIndex: 5 - i,
                  }}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="w-full h-full rounded-lg bg-dark-300 border border-white/10 shadow-[0_0_15px_rgba(170,131,69,0.1)] backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/20 via-transparent to-transparent rounded-lg" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-secondary-500/10 animate-pulse-slow" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative orbit */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-secondary-500/20 rounded-full blur-xl"></div>
                <motion.div 
                  className="relative w-full h-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  {[0, 60, 120, 180, 240, 300].map((degree, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-secondary-500"
                      style={{ 
                        transform: `rotate(${degree}deg) translateY(-18px)` 
                      }}
                    />
                  ))}
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-4 h-4 bg-secondary-400 rounded-full"></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <a 
            href="#services"
            className="flex flex-col items-center text-white/50 hover:text-white transition-colors"
          >
            <span className="mb-2">Discover More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;