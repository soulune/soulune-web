import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      content: "I was hesitant to try an AI tarot reading service at first, but I was blown away by the accuracy and depth of insight. It felt like the reader truly understood me and my situation.",
      author: "Sarah Johnson",
      role: "Spiritual Seeker"
    },
    {
      content: "The AI tarot readings have become an essential part of my monthly routine. They provide clarity and guidance that helps me navigate life's challenges with confidence.",
      author: "Michael Chen",
      role: "Entrepreneur"
    },
    {
      content: "I've had many traditional tarot readings before, but none were as consistently insightful as what I get from this service. The AI seems to pick up on subtle energies I wouldn't have considered.",
      author: "Olivia Rodriguez",
      role: "Wellness Coach"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
          >
            Testimonials
          </motion.div>
          <AnimatedText 
            text="What Customers Say About" 
            el="h2"
            className="font-serif text-3xl sm:text-4xl font-bold text-primary-800 mb-2"
          />
          <AnimatedText 
            text="Our Technology?" 
            el="h2"
            className="font-serif text-3xl sm:text-4xl font-bold text-primary-800 mb-6"
          />
        </div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-700 via-secondary-500 to-primary-700"></div>
            
            <div className="flex flex-col min-h-[300px]">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary-500 fill-secondary-500" />
                ))}
              </div>
              
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-grow"
              >
                <p className="text-gray-700 text-lg mb-8 italic">"{testimonials[currentIndex].content}"</p>
                <div>
                  <p className="font-medium text-primary-800">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 -left-10 w-20 h-20 bg-secondary-500/10 rounded-full blur-xl z-0"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;