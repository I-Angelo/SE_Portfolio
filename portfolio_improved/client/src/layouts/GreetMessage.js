// WelcomeMessage.js

import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/GreetingMessage.css'

const GreetingMessage = () => {
  console.log('GreetingMessage component mounted');
  const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
  const enterAnimation = { opacity: 1, transition: { duration: 1, delay: 0 } };

  return (
    <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
      <div className='parent'>
        <div className='welcome'>
          <h1>Welcome to my Portfolio!</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default GreetingMessage;
