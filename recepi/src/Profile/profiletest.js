import React,{useEffect,useState,useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
const t1 = gsap.timeline({defaults: {ease: "linear", duration: 1,rotate: 360,scale:1,yoyo: true, repeat:-1 }})


const Profiletest = () => {

    useEffect(() => {
      gsap.fromTo(divdRef.current,5,{rotation:0} ,{
         
        rotation: 360,
        ease: 'Back.easeInOut',
          yoyo: true,
          repeat: -1,
    
    })
    gsap.fromTo(divdRef.current,4,{scale:1}, {
      
      scale: 1.1,
      ease: 'Back.easeInOut',
      repeat: -1,
      yoyo: true,
    });
    }, [])
    const divdRef = useRef(null)
    window.onpointermove = event => { 
        const { clientX, clientY } = event;

    gsap.to(divdRef.current, {
      duration: 1,
      ease: "Back.easeInOut.config(4)",
      left: clientX,
      top: clientY,

    })
        
       

         
    }
    
  return (
    <Cover >
        <Container ref={divdRef}> </Container>
        <Blur></Blur>
    </Cover>
  )
}


export default Profiletest




const Cover = styled.div`
    width: 100vw;
    height: 100vh;
     position: fixed;
     z-index: -1;
`
const Container = styled.div`
   height: 34vmax;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(87deg, rgba(0,255,130,0.5368522408963585) 0%, rgba(174, 140, 71, 0.52) 100%);  animation: rotate 20s infinite;
 
   z-index: -1;
    `
const Blur = styled.div`
     height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  backdrop-filter: blur(12vmax);
`