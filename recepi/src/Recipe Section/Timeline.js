import React,{useState,useRef, useEffect} from 'react';

import styled from 'styled-components'
 import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import e from 'cors';

gsap.registerPlugin(ScrollTrigger);
 
function Timeline() {
  const [gradient, Setgradient] = useState(null);
  const [svgelement , Setsvgelement] = useState(null);
  
  
    const myRef0 = useRef(null);
  
    const myRef1= useRef(null);
  
    const myRef2 = useRef(null);
  
    const myRef3 = useRef(null);
  
    const myRef4 = useRef(null);
  
    const myRef5= useRef(null);
  
  
  /*// Define a function to receive the refs from the child component
  const handleRefsReady = (gradient, svgelement) => {
    console.log(gradient.current.value, svgelement.current.value);
    Setgradient(gradient.current);
    Setsvgelement(svgelement.current);
    
  };*/
 

  const Allelements = [myRef0,myRef1,myRef2,myRef3,myRef4,myRef5]

  return (
   <Cover>
    
  <Relativediv>
  <Svg1 ref={myRef0}> 
 
  <Svga index={0} Allelements={Allelements} myRef0={myRef0} />
 
  </Svg1>
  <Svg2 ref={myRef1} >
 
  <Svga index={1} Allelements={Allelements}  myRef1={myRef1}/>
  </Svg2>

  <Svg3 ref={myRef2}>
 
 
 <Svga index={2}  Allelements={Allelements} myRef2={myRef2}/>

  </Svg3>
  <Svg4 myRef3>
 
  <Svga index={3} Allelements={Allelements}  myRef3={myRef3}/>

  </Svg4>
  <Svg5 myRef4>
 
  <Svga index={4} Allelements={Allelements}  myRef4={myRef4}/>
  </Svg5>
  <Svg6 myRef5 >
 
  <Svga index={5} Allelements={Allelements}  myRef5={myRef5}/>
  </Svg6>
  
  <Line />
  </Relativediv>
  
 
   </Cover>
  );
  }

export default Timeline;

const Cover = styled.div`
  width: 100%;
  height: 25%;
  position: relative;
 
   
`




const Relativediv = styled.div`
  width: 90%;
  position: relative;
  height: 100%;
  bottom: 1rem;
  left: 5rem;
  z-index: -1;
  svg{
    color: white;
  }
`


const Line = styled.div`
width: 90%;
height: 2px;
background: rgb(66,78,187);
background: linear-gradient(61deg, rgba(66,78,187,1) 0%, rgba(114,115,212,1) 22%, rgba(107,86,208,1) 66%, rgba(94,67,170,1) 100%);
margin-top: 2.9rem;
border-radius: 1rem;
position: absolute;
left: 6rem;
z-index: -1;
`

  
 
const Svg1 = styled.div`
   width: 4rem; 
   height: 4rem;
  transform:scale(0.6) ;
  position: absolute;
 top:1rem;
  left:4rem;
  z-index: 1;
   
  
 
`

const Svg2 = styled.svg`
  width: 4rem; 
  height: 4rem;
  transform:scale(0.6) ;
    position: absolute;
 top:1rem;
  left:20rem;
  z-index: 2;
   
`
const Svg3 = styled.svg`
  width: 4rem; 
  height: 4rem;

  transform:scale(0.6);
  position: absolute;
 top:1rem;
 z-index: 1;
  left:40rem
`
const Svg4 = styled.svg`
  width: 4rem; 
  height: 4rem;

  transform:scale(0.6) ;
  position: absolute;
 top:1rem;
  left:60rem;
  z-index: 1;
`
const Svg5 = styled.svg`
  width:4rem; 
  height: 4rem;

  transform:scale(0.6) ;
  position: absolute;
 top:1rem;
  left:80rem;
  z-index: 1;
`
const Svg6 = styled.svg`
  width: 4rem; 
  height: 4rem;

  transform:scale(0.6) ;
  position: absolute;
 top:1rem;
  left:98.4rem;
  z-index: 1;
`
 