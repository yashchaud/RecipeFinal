import React,{useRef,useEffect,useState} from 'react'
import vegetables from '../Images/vegetable.jpg'
import styled from 'styled-components'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);
 gsap.registerPlugin(ScrollTrigger);

const Newapproach = () => {
  const divre = useRef(null)
  const img = useRef(null)
  const containerRef = useRef(null);
  
  useEffect(() => {
  
  
  
    
    console.log(divre.current.children.length)
  const t1= gsap.timeline({
   
     scrollTrigger: {
       trigger: divre.current,
       pin: true,
       scrub: 1,
       end: "+=1000",
     },
 
   });
   
   t1.to(divre.current ,
     { xPercent: -100 * (4- 1) ,
       ease: "none",})
   
 }, [])

  return (
    <Cover ref={divre}> 
      
   
      <img ref={img} src={vegetables} alt="" onClick={Animation}/>
      <img ref={img} src={vegetables} alt="" onClick={Animation}/>
      <img ref={img} src={vegetables} alt="" onClick={Animation} />
      <img ref={img} src={vegetables} alt="" onClick={Animation} />
      <img ref={img} src={vegetables} alt="" onClick={Animation} />
      <img ref={img} src={vegetables} alt="" onClick={Animation} />
      <img ref={img} src={vegetables} alt="" onClick={Animation} />
      <img ref={img} src={vegetables} alt="" onClick={Animation} />
  </Cover>
  )
}

export default Newapproach

const Cover = styled.div`

width: 100vw;
height: 100vh;
position: fixed;
gap:2rem;
background-color: aliceblue;
display: flex;
justify-content: center;
align-items: center;
transform: translate(50%, 0%);
img{
    width: 21rem;
    height: 32rem;
 
    
  object-fit: cover;
 
    }
`

 
