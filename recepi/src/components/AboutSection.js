import React from 'react';
import { About, Description, Image } from './styles';
import styled from 'styled-components';
//Images
import homeImg1 from '../Images/chef.jpg';
import { titleAnim, fade, photoAnim } from './animation';
import { motion} from "framer-motion"
import Wave from './Wave';
import {Link} from 'react-router-dom'
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Bring Out The Dormant</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
               <span>Chef</span> Hidden Within
            </motion.h2>
          </Hide>
           
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <Link to='/ingredients' ><motion.button variants={fade}>Find ingredients</motion.button></Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={homeImg1} alt="camera guy" />
      </Image>
      <Wave />
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
