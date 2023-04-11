import React,{useState,useRef, useEffect,useCallback} from 'react';
import { debounce } from "lodash";
import styled from 'styled-components'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux store/store';

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);

const Timelinetake2 = ({cover}) => {
   
  const {count} = useSelector(state => state.counterSlice)
  const dispatch = useDispatch();
 
    const gradientRef0 = useRef();
    const gradientRef1 = useRef();
    const gradientRef2 = useRef();
    const gradientRef3 = useRef();
    const gradientRef4= useRef();
    const gradientRef5 = useRef();
    const svgelement0 = useRef();
    const svgelement1 = useRef();
    const svgelement2 = useRef();
    const svgelement3 = useRef();
    const svgelement4 = useRef();
    const svgelement5 = useRef();
    const text0 = useRef();
    const text1 = useRef();
    const text2 = useRef();
    const text3 = useRef();
    const text4 = useRef();
    const text5 = useRef();
    
   
    const svgelementarr = [svgelement0,svgelement1,svgelement2,svgelement3,svgelement4,svgelement5]
    const gradientRefar = [gradientRef0,gradientRef1,gradientRef2,gradientRef3,gradientRef4,gradientRef5]
    const textar = [text0,text1,text2,text3,text4,text5]

    const [Index, setIndex] = useState(null);
    const indexRef = useRef(0);
    const tweenRef = useRef(null);
    
    const [countcounter0, Setcountcounter0] = useState(0);
    const [countcounter1, Setcountcounter1] = useState(0);
    const [countcounter2, Setcountcounter2] = useState(0);
    const [countcounter3, Setcountcounter3] = useState(0);
    const [countcounter4, Setcountcounter4] = useState(0);
    const [countcounter5, Setcountcounter5] = useState(0);

    

    const incriment = useCallback(() => {
      
     if(indexRef.current == null){
      
      setTimeout(()=>{
        setIndex(() => {
          const newIndex = 0
          return newIndex;
          
        },500)
      })
     }
     if(indexRef.current != null){
    
     setTimeout(()=>{
      setIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        return newIndex > 5 ? 0 : newIndex;
        
     })
      },500);
     }
    }, [Index]);
    
    
  
    
    

    useEffect(() => {
      indexRef.current = Index;
      
    }, [Index]);

 console.log(count)

    useEffect(()=>{
     
      
      
      if(indexRef.current == 0){
        Setcountcounter0(count)
      }else if(indexRef.current == 1){
        Setcountcounter1(count)
      }else if(indexRef.current == 2){
        Setcountcounter2(count)
      }
      else if(indexRef.current == 3){
        Setcountcounter3(count)
      }else if(indexRef.current == 4){
        Setcountcounter4(count)
      }else if(indexRef.current == 5){
        Setcountcounter5(count)
      }

      console.log(count)
     
    },[Index])
   
   
    

var updatevalue = 0
var countvalue = 0
var pins = true
    useEffect(() => {
      
      
        
        const debouncedAnimation = debounce(() => {
            Animation();
          }, 1000); 
         
        const Animation =()=>{
           
            
         if(indexRef.current <= 5){
          var t1 = gsap.timeline({duration:1,opacity:0,repeat:-1})
          gsap.set(gradientRefar[0],{opacity:0})
          gsap.set(gradientRefar[1],{opacity:0})
          gsap.set(gradientRefar[2],{opacity:0})

         const animation =  t1.to(gradientRefar[indexRef.current].current, {
              duration: 4,
              rotation: 360,
              repeat:-1,
              onStart: () =>{countvalue = count},
              onComplete:() =>{animation.reverse()},
               onUpdate: () => {if (gradientRefar[indexRef.current].current != null) {
                gradientRefar[indexRef.current].current.setAttribute(
                  "gradientTransform",
                  `rotate(${gsap.getProperty(gradientRefar[indexRef.current].current, "rotation")}, 32, 32)`
                );
              }
              
            }})
            
            
            .fromTo(svgelementarr[indexRef.current].current, {rotation:30,scale:1},{scale:1.1,rotation:135,duration:2},"-=4")
            .fromTo(textar[indexRef.current].current,{y:30,opacity:0,scale:0.9},{y:0,opacity:1,scale:1.2},"-=1")
            
         }  
        
     
         
             
        }
        let lastUpEventTime = 0
      
        ScrollTrigger.create({
            trigger: cover.current,
            pin:pins,
            start: "top top",

            end: updatevalue,
            onUpdate: (self) => {
              const progress = self.progress;
              const updatevalue = Math.floor(progress * 100);
    
              if (count >= 20) {
                pins = false
              }
              
              
            }, 
            
            
            scrub: 1,
          });
          ScrollTrigger.observe({
            target: cover.current,         
            type: "wheel,touch",    
            onEnter: () => {Animation()},
            
            onUp: () => {const currentTime = Date.now(); 
              
            if (currentTime - lastUpEventTime > 1000) { 
              lastUpEventTime = currentTime; 
            
            
              if(indexRef.current > 0){
                dispatch(decrement())
                debouncedAnimation(); 
              }
        
         
            }
            
            },
            onDown: () => {const currentTime = Date.now(); 
              if (currentTime - lastUpEventTime > 1000) { 
                lastUpEventTime = currentTime; 
                incriment()
                debouncedAnimation(); 
               
                 dispatch(increment())
                

              }             
            },
            
            tolerance :100,
          });
     
         
          
      }, []);
  
      
  return (
    <Cover >
    
  <Relativediv>
  <Svg1 > 
 <p   ref={text0}>`Step{countcounter0}`</p>
 <svg ref={svgelement0} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<defs>
    <linearGradient ref={gradientRef0} id="myGradient" gradientTransform="rotate(0)">
      <stop offset="0%" stopColor="#E6D7FF"/>
      <stop offset="32%" stopColor="#E1C4FF"/>
      <stop offset="66%" stopColor="#6B56D0"/>
      <stop offset="100%" stopColor="#5E43AA"/>
    </linearGradient>
</defs>
<g  id="gradient" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="url(#myGradient)" stroke="none">
<path d="M226 594 c-71 -22 -159 -112 -180 -184 -34 -115 -12 -206 73 -291 85
-85 176 -107 291 -73 75 22 162 109 184 184 34 115 12 206 -73 291 -85 84
-180 108 -295 73z m226 -41 c92 -51 146 -155 135 -261 -15 -145 -149 -254
-295 -239 -145 15 -254 149 -239 295 11 102 92 201 191 232 57 17 150 5 208
-27z"/>
<path  d="M225 526 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
-36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c134 -61 165
-233 61 -337 -105 -105 -274 -75 -337 61 -79 171 104 354 276 276z"/>
<path d="M140 280 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M157 244 c-4 -4 -4 -10 -1 -15 6 -10 34 0 34 12 0 10 -24 12 -33 3z"/>
<path d="M191 206 c-7 -8 -8 -17 -3 -20 6 -3 15 1 21 8 7 8 8 17 3 20 -6 3
-15 -1 -21 -8z"/>
<path d="M227 176 c-6 -16 2 -28 14 -20 12 7 11 34 0 34 -5 0 -11 -6 -14 -14z"/>
<path d="M270 155 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"/>
</g>
</svg>

 
  </Svg1>
<Svg2 >
 <p   ref={text1}>`Step{countcounter1}`</p>
 <svg ref={svgelement1} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<defs>
    <linearGradient ref={gradientRef1} id="myGradient1" gradientTransform="rotate(0)">
      <stop offset="0%" stopColor="#E6D7FF"/>
      <stop offset="32%" stopColor="#E1C4FF"/>
      <stop offset="66%" stopColor="#6B56D0"/>
      <stop offset="100%" stopColor="#5E43AA"/>
    </linearGradient>
</defs>
<g  id="gradient1" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="url(#myGradient1)" stroke="none">
<path d="M226 594 c-71 -22 -159 -112 -180 -184 -34 -115 -12 -206 73 -291 85
-85 176 -107 291 -73 75 22 162 109 184 184 34 115 12 206 -73 291 -85 84
-180 108 -295 73z m226 -41 c92 -51 146 -155 135 -261 -15 -145 -149 -254
-295 -239 -145 15 -254 149 -239 295 11 102 92 201 191 232 57 17 150 5 208
-27z"/>
<path  d="M225 526 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
-36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c134 -61 165
-233 61 -337 -105 -105 -274 -75 -337 61 -79 171 104 354 276 276z"/>
<path d="M140 280 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M157 244 c-4 -4 -4 -10 -1 -15 6 -10 34 0 34 12 0 10 -24 12 -33 3z"/>
<path d="M191 206 c-7 -8 -8 -17 -3 -20 6 -3 15 1 21 8 7 8 8 17 3 20 -6 3
-15 -1 -21 -8z"/>
<path d="M227 176 c-6 -16 2 -28 14 -20 12 7 11 34 0 34 -5 0 -11 -6 -14 -14z"/>
<path d="M270 155 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"/>
</g>
</svg>
</Svg2>

<Svg3>
 
<p   ref={text2}>`Step{countcounter2}`</p>
<svg ref={svgelement2} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<defs>
    <linearGradient ref={gradientRef2} id="myGradient2"  gradientTransform="rotate(0)">
      <stop offset="0%" stopColor="#E6D7FF"/>
      <stop offset="32%" stopColor="#E1C4FF"/>
      <stop offset="66%" stopColor="#6B56D0"/>
      <stop offset="100%" stopColor="#5E43AA"/>
    </linearGradient>
  </defs>
<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="url(#myGradient2)" stroke="none">
<path d="M226 594 c-71 -22 -159 -112 -180 -184 -34 -115 -12 -206 73 -291 85
-85 176 -107 291 -73 75 22 162 109 184 184 34 115 12 206 -73 291 -85 84
-180 108 -295 73z m226 -41 c92 -51 146 -155 135 -261 -15 -145 -149 -254
-295 -239 -145 15 -254 149 -239 295 11 102 92 201 191 232 57 17 150 5 208
-27z"/>
<path d="M225 526 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
-36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c134 -61 165
-233 61 -337 -105 -105 -274 -75 -337 61 -79 171 104 354 276 276z"/>
<path d="M140 280 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M157 244 c-4 -4 -4 -10 -1 -15 6 -10 34 0 34 12 0 10 -24 12 -33 3z"/>
<path d="M191 206 c-7 -8 -8 -17 -3 -20 6 -3 15 1 21 8 7 8 8 17 3 20 -6 3
-15 -1 -21 -8z"/>
<path d="M227 176 c-6 -16 2 -28 14 -20 12 7 11 34 0 34 -5 0 -11 -6 -14 -14z"/>
<path d="M270 155 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"/>
</g>
</svg>

</Svg3>
  <Svg4 >
  <p style= {indexRef.current !== 3  ? {opacity:0}:null} ref={text3}>`Step{countcounter3}`</p>
  <svg ref={svgelement3} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<defs>
    <linearGradient ref={gradientRef3} id="myGradient3"  gradientTransform="rotate(0)">
      <stop offset="0%" stopColor="#E6D7FF"/>
      <stop offset="32%" stopColor="#E1C4FF"/>
      <stop offset="66%" stopColor="#6B56D0"/>
      <stop offset="100%" stopColor="#5E43AA"/>
    </linearGradient>
  </defs>
<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="url(#myGradient3)" stroke="none">
<path d="M226 594 c-71 -22 -159 -112 -180 -184 -34 -115 -12 -206 73 -291 85
-85 176 -107 291 -73 75 22 162 109 184 184 34 115 12 206 -73 291 -85 84
-180 108 -295 73z m226 -41 c92 -51 146 -155 135 -261 -15 -145 -149 -254
-295 -239 -145 15 -254 149 -239 295 11 102 92 201 191 232 57 17 150 5 208
-27z"/>
<path d="M225 526 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
-36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c134 -61 165
-233 61 -337 -105 -105 -274 -75 -337 61 -79 171 104 354 276 276z"/>
<path d="M140 280 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M157 244 c-4 -4 -4 -10 -1 -15 6 -10 34 0 34 12 0 10 -24 12 -33 3z"/>
<path d="M191 206 c-7 -8 -8 -17 -3 -20 6 -3 15 1 21 8 7 8 8 17 3 20 -6 3
-15 -1 -21 -8z"/>
<path d="M227 176 c-6 -16 2 -28 14 -20 12 7 11 34 0 34 -5 0 -11 -6 -14 -14z"/>
<path d="M270 155 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"/>
</g>
</svg>

  </Svg4>
  <Svg5 >
  <p style= {indexRef.current !== 4  ? {opacity:0}:null} ref={text4}>`Step{countcounter4}`</p>
  <svg ref={svgelement4} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<defs>
    <linearGradient ref={gradientRef4} id="myGradient4"  gradientTransform="rotate(0)">
      <stop offset="0%" stopColor="#E6D7FF"/>
      <stop offset="32%" stopColor="#E1C4FF"/>
      <stop offset="66%" stopColor="#6B56D0"/>
      <stop offset="100%" stopColor="#5E43AA"/>
    </linearGradient>
  </defs>
<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="url(#myGradient4)" stroke="none">
<path d="M226 594 c-71 -22 -159 -112 -180 -184 -34 -115 -12 -206 73 -291 85
-85 176 -107 291 -73 75 22 162 109 184 184 34 115 12 206 -73 291 -85 84
-180 108 -295 73z m226 -41 c92 -51 146 -155 135 -261 -15 -145 -149 -254
-295 -239 -145 15 -254 149 -239 295 11 102 92 201 191 232 57 17 150 5 208
-27z"/>
<path d="M225 526 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
-36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c134 -61 165
-233 61 -337 -105 -105 -274 -75 -337 61 -79 171 104 354 276 276z"/>
<path d="M140 280 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M157 244 c-4 -4 -4 -10 -1 -15 6 -10 34 0 34 12 0 10 -24 12 -33 3z"/>
<path d="M191 206 c-7 -8 -8 -17 -3 -20 6 -3 15 1 21 8 7 8 8 17 3 20 -6 3
-15 -1 -21 -8z"/>
<path d="M227 176 c-6 -16 2 -28 14 -20 12 7 11 34 0 34 -5 0 -11 -6 -14 -14z"/>
<path d="M270 155 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"/>
</g>
</svg>
  </Svg5>
  <Svg6  >
  <p style= {indexRef.current !== 5  ? {opacity:0}:null} ref={text5}>`Step{countcounter5}`</p>
  <svg ref={svgelement5} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<defs>
    <linearGradient ref={gradientRef5} id="myGradient5"  gradientTransform="rotate(0)">
      <stop offset="0%" stopColor="#E6D7FF"/>
      <stop offset="32%" stopColor="#E1C4FF"/>
      <stop offset="66%" stopColor="#6B56D0"/>
      <stop offset="100%" stopColor="#5E43AA"/>
    </linearGradient>
  </defs>
<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="url(#myGradient5)" stroke="none">
<path d="M226 594 c-71 -22 -159 -112 -180 -184 -34 -115 -12 -206 73 -291 85
-85 176 -107 291 -73 75 22 162 109 184 184 34 115 12 206 -73 291 -85 84
-180 108 -295 73z m226 -41 c92 -51 146 -155 135 -261 -15 -145 -149 -254
-295 -239 -145 15 -254 149 -239 295 11 102 92 201 191 232 57 17 150 5 208
-27z"/>
<path d="M225 526 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
-36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c134 -61 165
-233 61 -337 -105 -105 -274 -75 -337 61 -79 171 104 354 276 276z"/>
<path d="M140 280 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"/>
<path d="M157 244 c-4 -4 -4 -10 -1 -15 6 -10 34 0 34 12 0 10 -24 12 -33 3z"/>
<path d="M191 206 c-7 -8 -8 -17 -3 -20 6 -3 15 1 21 8 7 8 8 17 3 20 -6 3
-15 -1 -21 -8z"/>
<path d="M227 176 c-6 -16 2 -28 14 -20 12 7 11 34 0 34 -5 0 -11 -6 -14 -14z"/>
<path d="M270 155 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"/>
</g>
</svg>
  </Svg6>
  
  <Line />
  </Relativediv>
  
 
   </Cover>
  )
}

export default Timelinetake2


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
   width: 5rem; 
   height: 5rem;
  transform:scale(0.6) ;
  position: absolute;
 top:0.4rem;
  left:3.5rem;
  z-index: 1;
   
  p{
    position: absolute;
    left: 1.5rem;
    bottom:5.6rem;
    opacity: 0;
  }
 
`

const Svg2 = styled.div`
  width: 5.1rem; 
  height: 5rem;
  transform:scale(0.6) ;
    position: absolute;
 top:0.4rem;
  left:20rem;
  z-index: 2;
  
  p{
    position: absolute;
    left: 1.5rem;
    bottom:5.6rem;
    opacity: 0;

  }
   
`
const Svg3 = styled.div`
  width: 5.1rem; 
  height: 5rem;

  transform:scale(0.6);
  position: absolute;
 top:0.4rem;
 z-index: 1;
  left:40rem;
  p{
    position: absolute;
    left: 1.5rem;
    bottom:5.6rem;
    opacity: 0;

  }
`
const Svg4 = styled.div`
  width: 5.1rem; 
  height: 5rem;

  transform:scale(0.6) ;
  position: absolute;
  top:0.4rem;

  left:60rem;
  z-index: 1;
  p{
    position: absolute;
    left: 1.5rem;
    bottom:5.6rem;
     
  }
`
const Svg5 = styled.div`
  width:5.1rem; 
  height: 5rem;

  transform:scale(0.6) ;
  position: absolute;
  top:0.4rem;

  left:80rem;
  z-index: 1;
  p{
    position: absolute;
    left: 1.5rem;
    bottom:5.6rem;
     
  }
`
const Svg6 = styled.div`
  width: 5.1rem; 
  height: 5rem;

  transform:scale(0.6) ;
  position: absolute;
  top:0.4rem;

  left:97.8rem;
  z-index: 1;
  p{
    position: absolute;
    left: 1.5rem;
    bottom:5.6rem;
     
  }
`
 