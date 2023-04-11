import React,{useRef,useEffect,useState} from 'react'
import vegetables from '../Images/vegetable.jpg'
import styled from 'styled-components'
import  gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import  Rol from '../fontsd/Roslindale-DisplayUltra-Testing.ttf'
import { CustomEase } from "gsap/CustomEase";
import SplitType from 'split-type'
import Profiletest from '../Profile/profiletest'
import Nav from '../Profile/Nav'

gsap.registerPlugin(CustomEase);
 
gsap.registerPlugin(Flip);
 gsap.registerPlugin(ScrollTrigger);
 
const Newapproach = () => {
  const divre = useRef(null)
  const img = useRef(null)
  const containerRef = useRef(null);
   const Imagearr = [vegetables,vegetables,vegetables,vegetables,vegetables,]
  const [index, setindex] = useState('a')
 
 useEffect(() => {

 
 }, [])

 
  const Animation = (index) => {
    const detailse = new SplitType(divre.current.children[0].children[0], {types: "words"})

    img.current.pause()
    const items = gsap.utils.toArray(containerRef.current.children);
 
     console.log(items)
   

    const state = Flip.getState(items);
    const state1 = Flip.getState(items);
    
    gsap.set(items, { clearProps: true });
    gsap.set(items[index],{zIndex: 200})
   Flip.fit(items[index], containerRef.current, {opacity:1, clear: true,snap: true ,absolute: true, zIndex: 200 })
   
    setindex(index)
   CustomEase.create("Hop", "M0,0 C0.39,0.08 0,0.92 1,1 ")
   const t1 = Flip.from(state, {
      duration: 1,
      borderRadius: "0%",
      ease: "Hop",
     
       
      onComplete: () => {
        setindex(index)
        gsap.set(divre.current.children[0].children[0],{opacity: 1 })
        gsap.fromTo([divre.current.children[0].children[0],detailse.words], {duration: 1, opacity: 0, y: 200, delay: 0.5},{
          duration: 1, opacity: 1, y: -0,  ease: "Hop" 
         
  
         },)
      }
   
    },)

 
   

    ScrollTrigger.observe({
      target: items[index],         // can be any element (selector text is fine)
      type: "wheel,touch",    // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
      onUp: () => {t1.reverse()
       
        gsap.set([divre.current.children[0].children[0],detailse.words], { clearProps: true , opacity: 0 });


      },
      onDown: () =>{ t1.reverse()
        gsap.set([divre.current.children[0].children[0],detailse.words], { clearProps: true });

      } ,
    });

    }
  useEffect(() => {
  
  
  
    
    console.log(divre.current.children.length)
  img.current= gsap.timeline({
    
   
     scrollTrigger: {
       trigger: divre.current,
       pin: true,
       scrub: 1,
       end: "+=3000",
      },
 
   });
   
   img.current.to(divre.current.children[1].children ,
     { xPercent: -100 * (4- 1) ,
       ease: "none",})
   
 }, [])

  return (
    <Cover ref={divre}> 
<Details>

<Nav/>
  <h1>{index}</h1>
  <Profiletest/>
</Details>

    <Container ref={containerRef}>
    
    
      {Imagearr.map((item,index)=>{

      return(
        
          <img key={index} src={item} alt="" onClick={()=>Animation(index)}/>

        
      )
      
    } 
    )}
    </Container>
  </Cover>
  )
}

export default Newapproach



const Offsetdiv = styled.div`
position: fixed;
bottom: 7rem;
left: 19rem;
max-width: 10rem;
max-height: 5rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 1rem;
z-index: 100;
img{
  max-width: 10rem;
max-height: 5rem;
  object-fit: cover;

}
`
const Details = styled.div`

position: sticky;
left: 0;
top: 50%;
z-index: -2;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
z-index: 100;
h1{
  font-size: 3rem;
  color: white;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  padding: 0;
  font-family: "Roslindale Display Ultra";
  font-weight: 900;
}
`


const Cover = styled.div`
@font-face {
  font-family: "Roslindale Display Ultra" ;
  src: url(${Rol}});
  weight: 900;
}
max-width: 700rem;
font-family: "Roslindale Display Ultra";
width: 700rem;
height: 100vh;
position: relative;
gap:2rem;
 

img{
    width: 21rem;
    height: 32rem;
   position: relative;
  margin-left:1rem;
 transform: translate(60rem, 50%);
  z-index: 0;
  box-shadow: rgba(29, 29, 30, 0.2) 0px 7px 29px 0px;    
  object-fit: cover;
  border-radius: 1rem;
    }
`
const Container = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top:0;
gap:2rem;
overflow: hidden;
 z-index: 100;


`
 
