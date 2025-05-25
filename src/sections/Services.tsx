import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Moon, Sun, Clock } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import Card from '../components/Card';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, delay }) => {
  return (
    <Card delay={delay} className="p-6 sm:p-8 h-full">
      <div className="mb-5 text-secondary-600">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold text-primary-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <MessageCircle size={36} />,
      title: "Personal Guidance",
      description: "Get tailored insights about your personal journey, relationships, career, and more through our specialized readings."
    },
    {
      icon: <Moon size={36} />,
      title: "Spiritual Insights",
      description: "Explore the deeper meanings behind your life events and discover your spiritual path with our intuitive tarot readings."
    },
    {
      icon: <Sun size={36} />,
      title: "Future Possibilities",
      description: "Uncover potential future outcomes and make informed decisions by understanding the energies surrounding your situation."
    },
    {
      icon: <Clock size={36} />,
      title: "24/7 Availability",
      description: "Access our AI tarot reading service whenever you need guidance, day or night, from anywhere in the world."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.div>
          <AnimatedText 
            text="What Is AI Tarot Reading?" 
            el="h2"
            className="font-serif text-3xl sm:text-4xl font-bold text-primary-800 mb-6"
          />
          <AnimatedText
            text="Advanced guidance powered by ancient wisdom"
            el="p"
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            delay={0.3}
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.2 * index}
            />
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-primary-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl overflow-hidden relative">
            <motion.div 
              className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-500/20 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
            
            <div className="relative">
              <AnimatedText 
                text="Our AI tarot bot is trained with thousands of tarot traditions and interpretations to provide deep insights tailored to your unique needs and circumstances." 
                el="p"
                className="text-lg mb-6"
              />
              <AnimatedText 
                text="The bot uses advanced algorithms to analyze your questions and provide personalized readings that are specific to you." 
                el="p"
                className="text-lg"
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;