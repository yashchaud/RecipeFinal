import React,{useRef,useEffect,useState} from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import Timeline from './Timelinetake2'
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { useSelector } from 'react-redux';
import SplitType from 'split-type'
gsap.registerPlugin(ExpoScaleEase, RoughEase, SlowMo);



const Instructions = () => {
  const [thiscount, setthiscount] = useState();
  const [thiscountv2, setthiscountv2] = useState();
  const [thiscountv3, setthiscountv3] = useState();
  const {count} = useSelector(state => state.counterSlice)
  const {data} = useSelector(state => state.counterSlice)

  useEffect(() => {
     
    if(count == 0 && thiscount == undefined){
      setthiscount(0)
    }
    else if(count > 1 && thiscount < 11 ){

    setthiscount(count-1)
    console.log('we in here')
    }
    
    console.log(`This is the count ${thiscount}`)
    
  }, [count]);

  const Animatedtext = useRef(null);
  const Animatedtextv2 = useRef(null);
  const textRef = useRef(null);
  const cover = useRef();
  
 
  /*
 add a if statement to check if the index is less than 11 and only render 11 elements rest will go to a different div

  */
 const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
 const firstEleven = items.slice(0,11)
 const remainingitems = items.slice(11,items.length)

 
  
  useEffect(() => {
     
  
    if(thiscount >= 0 && thiscount < 11 && thiscount !== undefined){
      const t1 = gsap.timeline({ defaults: { ease:  "Expo.easeInOut" } });
    
     
    

      const text1 = Animatedtext.current.children[thiscount].children[1]
      const text = new SplitType(text1, { types: 'words, chars' })

      
     /* const chars = text.innerText.split('');
      
      text.innerHTML = '';
      
      chars.forEach(char => {
        const span = document.createElement('span');
        span.innerText = char;
         
        span.style.transform = "translateY(30px)";
        text.appendChild(span);
      });*/
      gsap.from(text.words,{
        opacity: 0,
        y: 30,
        x: 10,
        ease: "Expo.easeInOut",
        stagger: {
          each: 0.1,
          from: "start",
          
        },
        duration: 0.5,
      })
      console.log(Animatedtext.current.children[thiscount].children[1])
     
        
        
        
      
      
      t1.to(Animatedtext.current.children[thiscount], {
        duration: 1,
        opacity: 1,
         
      });
      t1.from(Animatedtext.current.children[thiscount].children[0], {
        duration: 0.5,
        ease:"Expo.easeInOut",

        opacity: 0,
        y: 30,
        stagger: 0.1
      });
  
      
      
    
    }
    
    else if( thiscount && thiscount >= 11){
      console.log(`thiscountv2 is ${thiscountv2}`)
      console.log(Animatedtextv2.current.children[0])

      const t1 = gsap.timeline({ defaults: { ease:  "Expo.easeInOut" } });
    
     

   




      const text = new SplitType(Animatedtextv2.current.children[thiscountv2].children[1],{types: "words"})

      /*const chars = text.innerText.split('');
      
      text.innerHTML = '';
      
      chars.forEach(char => {
        const span = document.createElement('span');
        span.innerText = char;
         
        span.style.transform = "translateY(30px)";
        text.appendChild(span);
      });*/
      gsap.from(text.words,{
        opacity: 0,
        y: 30,
        stagger: {
          each: 0.1,
          from: "start",

        },
        duration: 0.2,
      })

       

      console.log(Animatedtextv2.current.children[thiscountv2].children[1])
     
        
        
        
      
      
      t1.to(Animatedtextv2.current.children[thiscountv2], {
        duration: 1,
        opacity: 1,
         
      });
      t1.from(Animatedtextv2.current.children[thiscountv2].children[0], {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.1
      });
  
    
    
    }
    
  }, [count]);


  useEffect(() => {
    
      setthiscountv2(count-12)
      console.log(`This is the count ${thiscountv2}`)

    
  }, [count]);

  
  return (
    
    
    <Cover ref={cover}>
        <Containerrecipe> 
       
        <Maindiv  ref={Animatedtext}>

    

    
        {firstEleven.map((index) => (
          <Textcoverdiv    >
          <h3>
          {index}
          </h3>
          <p>
            Take a pressure cooker and add the soaked dal along with 1 cup of milk, 2 cups of water, 1 teaspoon of garam masala, 1/2 teaspoon of cardamom powder, 1 teaspoon of salt, and 1/2 teaspoon of chili powder. Mix well.
          </p>
          </Textcoverdiv>
        ))}


    
       
      
         
          

        </Maindiv>

        


        <Leftsidediv ref={Animatedtextv2}  >
      



        {remainingitems.map((index) => (
          <Textdiv >
          <h3>
          {index}
          </h3>
          <p>
          Take a pressure cooker and add the soaked dal along with 1 cup of milk, 2 cups of water, 1 teaspoon of garam masala, 1/2 teaspoon of cardamom powder, 1 teaspoon of salt, and 1/2 teaspoon of chili powder. Mix well.
          </p>
          </Textdiv>
        ))}
        </Leftsidediv>
        
        </Containerrecipe >
        <Timeline cover={cover}/>
    </Cover>
  )
}
/*<Textcoverdiv>
          <h3>
          {index}
          </h3>
          <p>
          Take a pressure cooker and add the soaked dal along with 1 cup of milk, 2 cups of water, 1 teaspoon of garam masala, 1/2 teaspoon of cardamom powder, 1 teaspoon of salt, and 1/2 teaspoon of chili powder. Mix well.
          </p>
          </Textcoverdiv>*/
export default Instructions


const Cover = styled.div`
font-kerning: none;
  width: 100vw;
  height: 100vh;
display: grid;
grid-template-rows:2fr 1fr ;
align-items: center;
color: #e4e4e4;
font-family: 'Montserrat', sans-serif;
`
const Containerrecipe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1;
  font-weight: 400;
`
const Maindiv =styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 gap: 1rem;
 font-kerning: none;
 overflow: hidden;
`
const Textcoverdiv = styled.div`
width: 90%;
min-height: 1rem;
display: flex;

flex-direction: row;
 
opacity: 0;
 
gap: 1rem;
p{
  font-kerning: none;
  display: inline-block;
}
span{
  font-kerning: none;
  transform: translateY(30px) scale(0);
  transform-origin: bottom center;
}


`
const Textdiv = styled.div`
width: 90%;
min-height: 1rem;
display: flex;

opacity: 0;
font-family: 'Montserrat', sans-serif;
flex-direction: row;
gap: 1rem;
 
`

const Leftsidediv = styled.div`

  display: flex;
  flex-direction: column;
  gap:1rem
 `