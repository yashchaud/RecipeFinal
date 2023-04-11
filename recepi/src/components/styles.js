//Styled
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  button{
          font-family: 'Inter', sans-serif;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          padding: 1rem 2rem;
          border: 3px solid #852724;
          background: transparent;
          color: white;
          transition: all 0.5s ease;
          &:hover {
          background: #852724;
          color: white;
          }
      }
      h2{
          font-weight: lighter;
          font-size: 4rem;
      }
      h3{
          color:white;
      }
      p{
          padding: 3rem 0rem;
          color: #cccccc;
          font-size: 1.4rem;
          line-height: 150%;
      }
      h4{
          font-size: 2.5rem;
      }
      span{
          font-weight: bold;
          color: #af5855;
      }
      a{
          font-size: 1.1.rem;
      }
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled(motion.div)`
max-width:90;
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1500px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled(motion.div)`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media (max-width: 1500px) {
    img {
      width: 100%;
    }
  }
`;
