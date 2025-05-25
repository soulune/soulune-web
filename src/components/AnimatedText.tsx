import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'p',
  className = '',
  once = true,
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.2,
  });

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        aria-hidden
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        className="inline-block"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            className="inline-block whitespace-nowrap"
            variants={wordAnimation}
          >
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={characterAnimation}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;