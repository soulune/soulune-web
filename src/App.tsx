import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Soulune";
  }, []);

  return (
    <div className="min-h-screen bg-primary-500 font-sans text-white relative overflow-hidden">
      {/* Animated background with light rays */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-100 via-primary-400 to-primary-600" />

        {/* Animated light rays */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-[100vmax] h-[100vmax] origin-center"
            style={{
              rotate: i * 60,
              opacity: 0.1,
            }}
            animate={{
              rotate: [i * 60, i * 60 + 360],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-primary-300/10 to-transparent transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        ))}

        {/* Animated mesh overlay */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-radial from-primary-400/10 via-transparent to-transparent blur-3xl"
        />

        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;