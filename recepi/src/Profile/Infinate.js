import React,{useRef, useState,useEffect} from 'react'
import Marquee from './marquee'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components'
import Vegetables from '../Images/vegetable.jpg'
import img1 from './imagespro/img1.jpg'
import Nav from './Nav'
import { Flip } from 'gsap/Flip';
import { useNavigate, navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Trans from './trasn'
import Profiletest from './profiletest';
import { useSelector } from 'react-redux';
import Ingredients from '../components/Ingredients'
import Newapproach from '../Recipes overview/Newapproach';
gsap.registerPlugin(ScrollTrigger,Flip);



const Infinate = () => {
const {element} = useSelector(state => state.counterSlice)
 

 

const Refernce = useRef(null)
const Element = useRef(null)


const navigate = useNavigate();
const [newel1 , setnewel1] = useState()
const [newel2 , setnewel2] = useState(<Ingredients/>)
const [newel3 , setnewel3] = useState(<Newapproach/>)
const [newel4 , setnewel4] = useState(<Marquee/>)
const [newel5 , setnewel5] = useState(<Ingredients/>)

 
    
// setting the elements   
useEffect(() => {
  if(element == "Ingredients"){
    setnewel1("1")
    setnewel5(true)
  }
  if(element == "Recipes"){
    setnewel1("2")
    setnewel5(true)
  }
   
  if(element == "Recipes"){
    setnewel1("2")
    setnewel5(true)
  }
  

 console.log(element)
}, [element])
  




//code for the elements
  useEffect(() => {

    //0
   setTimeout(() => {
    if(element=== "Ingredients"){
      

      setnewel1("1")
      const wraperchild = [Element.current.children[0],Element.current.children[2]]

      const wraperchild2 = Element.current.children[3]
      console.log(Element.current.children[3])
      const state = Flip.getState(wraperchild2)

      gsap.to(wraperchild,2.5,{
          duration: 1,
          scale: 0.9,
          ease: "Expo.easeOut",
          opacity: 0.1,
      })
      gsap.set(wraperchild2,{position:"absolute",  top:0,left:0,
          borderRadius: "3em 3em 0px 0px",
        zIndex: 1,
  })
   
 
      const t1 = Flip.from(state, {
          duration: 2.5,
          ease: "Expo.easeOut(0.5)",
          delay: 0.5,
          marginTop: "-0.5em",
          paddingTop: "0",
          borderRadius: 0,
          onComplete: () => {
             setTimeout(() => {
              navigate("/ingredients")

             }, 1000);
                   
              
              }
      })
      t1.fromTo(wraperchild2,{
          paddingTop: "2em",
      
          opacity: 0.9,
      }
      ,{
        opacity:1,
          duration: 2.5,
           
           
      }
         , "-=2" )
    }
   }, 1);

   //1
   setTimeout(() => {
    
   
   if(element === "Recipes"){
     
    setnewel5(true)
   const wraperchild = [Element.current.children[0],Element.current.children[2]]

      const wraperchild2 = Element.current.children[3]
  const state = Flip.getState(wraperchild2)

  gsap.to(wraperchild,2.5,{
      duration: 1,
      opacity: 0,
      scale: 0.9,
      ease: "Expo.easeOut",
  })
  gsap.set(wraperchild2,{position:"absolute",  top:0,left:0,
      borderRadius: "3em 3em 0px 0px",
    zIndex: 1,
})


  const t1 = Flip.from(state, {
      duration: 2.5,
      ease: "Expo.easeOut(0.5)",
      delay: 0.5,
      marginTop: "-1em",
      paddingTop: "0",
      borderRadius: 0,
      onComplete: () => {
          
         setTimeout(() => {
          navigate("/scale")
         }, 500);
               
          
          }
  })
  t1.fromTo(wraperchild2,{
      paddingTop: "2em",
         
  }
  ,{
      duration: 2.5,
    
  }
     , "-=2" )

}
}, 1); 
//2
 setTimeout(() => {
    
   
   if(element === "Marquee"){
     
    setnewel5(true)
   const wraperchild = Element.current.children[0]

      const wraperchild2 = Element.current.children[3]
  const state = Flip.getState(wraperchild2)

  gsap.to(wraperchild,2.5,{
      duration: 1,
      scale: 0.9,
      ease: "Expo.easeOut",
  })
  gsap.set(wraperchild2,{position:"absolute",  top:0,left:0,
      borderRadius: "3em 3em 0px 0px",
    zIndex: 1,
})


  const t1 = Flip.from(state, {
      duration: 2.5,
      ease: "Expo.easeOut(0.5)",
      delay: 0.5,
      marginTop: "0em",
      paddingTop: "0",
      borderRadius: 0,
      onComplete: () => {
          
         setTimeout(() => {
          navigate("/Marquee")
         }, 500);
               
          
          }
  })
  t1.fromTo(wraperchild2,{
      paddingTop: "2em",
      opacity: 0.9,  
       
  }
  ,{
      duration: 2.5,
      opacity: 1,  

       
  }
     , "-=2" )

}
}, 1); 
//3
setTimeout(() => {
    
   
  if(element === "a"){
    
   setnewel5(true)
  const wraperchild = Element.current.children

     const wraperchild2 = Element.current.children[3]
 const state = Flip.getState(wraperchild2)

 gsap.to(wraperchild,2.5,{
     duration: 1,
     scale: 0.9,
     ease: "Expo.easeOut",
 })
 gsap.set(wraperchild2,{position:"absolute",  top:0,left:0,
     borderRadius: "3em 3em 0px 0px",
   zIndex: 1,
})


 const t1 = Flip.from(state, {
     duration: 2.5,
     ease: "Expo.easeOut(0.5)",
     delay: 0.5,
     marginTop: "0em",
     paddingTop: "0",
     borderRadius: 0,
     onComplete: () => {
         
        setTimeout(() => {
         navigate("/trans")
        }, 500);
              
         
         }
 })
 t1.fromTo(wraperchild2,{
     paddingTop: "2em",
      
      
 }
 ,{
     duration: 2.5,
   
      
 }
    , "-=2" )

}
}, 1); 

  } , [element])
//code ends here for components       


    useEffect(() => {

      console.log(Element.current)
        console.log(Refernce.current.children[0].children[0])
      const boxes = Refernce.current.children[0].children[0]
      Array.from(boxes ).forEach((box) => {
        box.addEventListener("click", Animation)
 
      })
    
const t1 = gsap.timeline({defaults: {paused:true,yoyo:true, ease: "power1.easeOut"
  ,
    delay:1


}} )
 
    console.log(Refernce.current.children[0])
    const clonebox = Refernce.current.children[0].children[0].cloneNode(true)
    const clonebo = Refernce.current.children[0].children[0].cloneNode(true)

    const clonebox1 = Refernce.current.cloneNode(true)
    Element.current.appendChild(clonebox1)
   
    
         Refernce.current.children[0].appendChild(clonebox)
         Element.current.children[2].children[0].appendChild(clonebo)
       

          
    
    
      gsap.set(Refernce.current.children[0].children[1],{xPercent:-99.9},"-=50")
      
        console.log(Refernce.current)
        t1.fromTo(Refernce.current.children[0],{xPercent : 0},{
            xPercent:93.9,duration: 8,repeat: -1, })
            

        
 
 
         gsap.set(Element.current.children[2].children[0].children[1],{xPercent:99.9},"-=25")
     

        t1.fromTo(Element.current.children[2].children,{xPercent: 0},{
            xPercent: -93.9,duration: 8,repeat: -1, },"-=8")


      t1.fromTo([Element.current.children[0].children[0],Element.current.children[2].children[0]],{
           yPercent:0, duration:8},{
            yPercent: -130,duration: 7.7,repeat: -1, 
            
        },"-=8")
     
 
      
          
    
 
    }, [])
    
    
 
  return (
    <Container ref={Element}>
<Marquee ref={Refernce} Animation={Animation} />
 
<Nav/>
  {newel1=="1"?newel2:null}
  {newel1=="2"?newel3:null}
  {newel1=="3"?newel4:null}
  {newel1=="4"?newel5:null}
 
    </Container>
  )
}

export default Infinate

 const Container = styled.div`
 padding-top:3em;
 margin-top:-3em;
 
`