import React from 'react';
//Page components
import AboutSection from '../AboutSection';
import ServicesSection from '../Ingredients';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
 
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
    
      <AboutSection />
     
    
    </motion.div>
  );
};

export default AboutUs;
