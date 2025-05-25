import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import AnimatedText from '../components/AnimatedText';
import Card from '../components/Card';

interface PlanFeature {
  text: string;
}

interface PricingPlanProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  isPopular?: boolean;
  delay: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  description,
  price,
  period,
  features,
  isPopular = false,
  delay,
}) => {
  return (
    <Card delay={delay} className={`h-full ${isPopular ? 'border-2 border-secondary-500' : 'border border-gray-200'}`}>
      {isPopular && (
        <div className="bg-secondary-500 text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-serif font-semibold text-primary-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary-700">{price}</span>
          <span className="text-gray-500 ml-2">{period}</span>
        </div>
        
        <Button 
          variant={isPopular ? "secondary" : "outline"} 
          className="w-full mb-8"
        >
          Get Started
        </Button>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 text-secondary-500">
                <Check size={16} />
              </span>
              <span className="text-gray-600">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

const Pricing: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingPlans = [
    {
      title: "One Personalized Reading",
      description: "Perfect for first-time users",
      price: "$3.99",
      period: "one-time",
      features: [
        { text: "One in-depth personalized tarot reading" },
        { text: "Detailed analysis of the spread" },
        { text: "Comprehensive interpretation" },
        { text: "Email delivery of the reading" }
      ]
    },
    {
      title: "Unlimited Readings",
      description: "Unlimited insights all month long!",
      price: "$6.99",
      period: "/month",
      features: [
        { text: "Unlimited personalized tarot readings" },
        { text: "Ask follow-up questions to clarify any points" },
        { text: "Access to all spread types" },
        { text: "Download your readings as PDFs" }
      ],
      isPopular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
          >
            Pricing Plans
          </motion.div>
          <AnimatedText 
            text="Tarot Reading Options" 
            el="h2"
            className="font-serif text-3xl sm:text-4xl font-bold text-primary-800 mb-6"
          />
          <AnimatedText
            text="Discover your destiny with our flexible reading options"
            el="p"
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            delay={0.3}
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            All plans include our AI-powered tarot reading technology, secure payment processing, and 24/7 access. 
            Not sure which plan is right for you? Start with a single reading and upgrade anytime!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;