import React,{useEffect} from 'react'
import styled from 'styled-components'
import ingri from '../Images/test.jpg'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {gsap} from 'gsap'
import Rol from '../fontsd/Roslindale-DisplayUltra-Testing.ttf'
import SplitType from 'split-type'

const Test = () => {
const {data} = useSelector(state => state.counterSlice)
    const {index} = useParams();
    console.log(index)
    console.log(`data is ${data}`)
    const colors = [
        "rgb(49,47,61)",
        "rgb(56,50,85)",
        "rgb(65,60,87)",
        "rgb(57,54,73)",
        "rgb(37,35,47)",
        "rgb(18,15,31)"
      ];

    const titleref = React.useRef(null)
    const instructionsdiv = React.useRef(null)
    const instructionsref = React.useRef(null)
    const firstdiv = React.useRef(null)
    const imageref = React.useRef(null)
    const seconddiv = React.useRef(null)
    const colors2 = [
        "rgb(191,182,62)",
        "rgba(191,182,62,1)",
        "rgba(223,216,42,1)",
        "rgba(193,217,52,1)",
        "rgba(143,198,48,1)"
      ];
    useEffect(() => {
        console.log(instructionsref.current.children[0].children[0])
        const t1 = gsap.timeline({defaults:{ease:'Expo.easeInOut'}})
        t1.to(seconddiv.current,{"--color1": colors,
        backgroundPosition: "200% 100%",
        duration: 2,
        repeat: -1,
        yoyo: true,
        })
        t1.fromTo(instructionsdiv.current.children[0],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2,yoyo:true},'-=1')
        t1.fromTo(instructionsdiv.current.children[1],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2,yoyo:true},'-=1')
        t1.fromTo(instructionsdiv.current.children[2],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2,yoyo:true},'-=1')
        
        t1.fromTo(instructionsdiv.current.children[3],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2},'-=1')
        t1.fromTo(imageref.current,{opacity:0,y:'10%',scale: 1.5, opacity: 0},{opacity:1,scale:1,y:'0%',duration:2,delay: 0.5,},'-=2')
        t1.to(titleref.current,{
            "--color1": colors2,
            backgroundPosition: "200% 100%",
            duration: 0.2,
            repeat: -1,
            yoyo: true,

        },'-=1')
        const text = new SplitType(instructionsref.current.children[0], {types: "words"})
        const text1= new SplitType(instructionsref.current.children[1], {types: "words"})
        const text2 = new SplitType(instructionsref.current.children[2], {types: "words"})
        const text3= new SplitType(instructionsref.current.children[3], {types: "words"})


        t1.from(text.words,{
            opacity: 0,
            y: 30,
          
            ease: "Expo.easeOut",
            stagger: {
              each: 0.1,
              from: "start",
              
            },
            duration: 1,
          })
          t1.from(text1.words,{
            opacity: 0,
            y: 30,
          
            ease: "Expo.easeOut",
            stagger: {
              each: 0.1,
              from: "start",
              
            },
            duration: 1,
          })
          t1.from(text.words,{
            opacity: 0,
            y: 30,
          
            ease: "Expo.easeOut",
            stagger: {
              each: 0.1,
              from: "start",
              
            },
            duration: 1,
          })
           t1.from(text.words,{
            opacity: 0,
            y: 30,
          
            ease: "Expo.easeOut",
            stagger: {
              each: 0.1,
              from: "start",
              
            },
            duration: 1,
          })

    
        t1.fromTo(instructionsref.current.children[0],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2},'-=2')
        t1.fromTo(instructionsref.current.children[1],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2},'-=2')
        t1.fromTo(instructionsref.current.children[2],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2},'-=2')
        t1.fromTo(instructionsref.current.children[3],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2},'-=2')
        
        
        t1.fromTo(firstdiv.current.children[0],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2},'-=4')
        t1.fromTo(firstdiv.current.children[1],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2},'-=4')
        t1.fromTo(firstdiv.current.children[2],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2},'-=4')
        t1.fromTo(firstdiv.current.children[3],{opacity:0,y:'20%'},{opacity:1,y:'0%',duration:2})
        
        const lines = data[index].ingredients.split('\n');

        // Extract the first 8 ingredients from the array
        function extractIngredients(text)  {
            // Split the text into an array of lines
            const lines = text.split('\n');
          
            // Extract the first 8 lines from the array
            const ingredientLines = lines.slice(0, 8);
          
            // Extract quantity and ingredient name from each line and store in a list
            const ingredients = ingredientLines.map(line => {
              const quantityAndIngredient = line.trim().split(' ');
              const quantity = quantityAndIngredient.shift();
              const ingredient = quantityAndIngredient.join(' ');
              return { quantity, ingredient };
            });
          
            return ingredients;
          }
          console.log(extractIngredients(data[index].ingredients))
     }, [])

      
  return (
   <Cover ref={seconddiv}>
    <Titlecover>
        <Titleimagediv ref={imageref}>
            <img  src={data[index].image_url} alt="" />
            <Overlay></Overlay>
        </Titleimagediv>
        <Titletext>
            <Actualtextdiv ref={instructionsdiv}>
                <p>{data[index].cuisine}</p>
                <h1 ref={titleref}>
                {data[index].name}
                </h1>
                <h4>{data[index].course}</h4>
                <p >{data[index].description}</p>
                
            </Actualtextdiv>

            <Ingridients>

                <Ingridientsdiv ref={instructionsref}>
                    <Ingridientslist >
                        <h2>2</h2>

                        <h4>Mutton, sliced</h4>
                    </Ingridientslist>
                    <Ingridientslist>
                        <h2>2</h2>

                        <h4>Mutton, sliced</h4>
                    </Ingridientslist>
                    <Ingridientslist>
                        <h2>2</h2>

                        <h4>Mutton, sliced</h4>
                    </Ingridientslist>
                    <Ingridientslist>
                        <h2>2</h2>

                        <h4>Mutton, sliced</h4>
                    </Ingridientslist>
                </Ingridientsdiv>
                <Bordercreatorrightside ref={firstdiv}>
                    <Ingridientslist>
                        <h2>2</h2>

                        <h4>Mutton, sliced</h4>
                    </Ingridientslist>
                    <Ingridientslist>
                        <h2>2</h2>

                        <h4>Mutton, sliced</h4>
                    </Ingridientslist>
                    <Ingridientslist>
                        <h2>2</h2>

                        <h4>Mutton, sliced</h4>
                    </Ingridientslist>
                    <Ingridientslist>
                        <h2>2</h2>

                        <h4>Mutton, sliced</h4>
                    </Ingridientslist>
                     
                </Bordercreatorrightside>
            </Ingridients>
        </Titletext>
    </Titlecover>
   </Cover>
  )
}

export default Test

const Cover = styled.div`
    width: 100vw;
    height:100vh;
    background: rgb(49,47,61);
background: linear-gradient(321deg, rgba(49,47,61,1) 0%, rgba(56,50,85,1) 15%, rgba(65,60,87,1) 32%, rgba(57,54,73,1) 66%, rgba(37,35,47,1) 83%, rgba(18,15,31,1) 100%);

`
const Titlecover = styled.div`
width: 100vw;
height: 90vh;
     display: grid;
    grid-template-columns: 1fr 1fr;

`
const Titleimagediv = styled.div`
    width: 90%;
    height: 80vh;
    margin-left:3rem;
    position: relative;
 
    img{
        position: absolute;
        
        top: 2rem;
         
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`
const Overlay = styled.div`
   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  z-index: 1;
  pointer-events: none; /* Allow clicks to pass through */
   
`
const Titletext = styled.div`
    width: 85%;
    height: 100%;
    
    color: #ffffff;
 `
 const Actualtextdiv = styled.div`
 width: 100%;
 @font-face {
  font-family: "Roslindale-DisplayUltra-Testing" ;
  src: url(${Rol}});
  weight: 900;
}

 height: 50%;
    display: flex;
    gap:.5rem;
    
    flex-direction: column;
     
    h1{
        font-size: 3rem;
        background: linear-gradient(39deg, rgba(191,182,62,1) 0%, rgba(223,216,42,1) 46%, rgba(193,217,52,1) 71%, rgba(143,198,48,1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-animation 5s ease-in-out infinite alternate;
  font-family: 'Poppins', serif;
    }
    
     h4{
        font-size:1.2rem;
        font-weight: 800;
        font-family: 'Poppins', sans-serif;
    }
    p{
        margin-top: 1rem;
        line-height: 2rem;
        word-spacing: 0.2rem;
        letter-spacing: .1rem;
        font-family: 'Poppins', sans-serif;
    }
 `
 const Ingridients = styled.div`
    width: 100%;
    height: 40%; 
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
 `
 const Ingridientsdiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(1fr,4);
 `
 const Bordercreatorrightside = styled.div`
 width: 100%;
 height: 100%;
 border-left: 1px  solid rgba(255, 255, 255, 0.1);
 box-sizing: border-box;
 display: grid;
 grid-template-rows: repeat(1fr,4);
`
 const Ingridientslist  = styled.div`
    width: 100%;
    font-family: 'Poppins', sans-serif;
    color: #f1a820;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    h2{
        font-family: 'Poppins', serif;
    }
 `