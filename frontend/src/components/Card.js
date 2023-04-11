import React,{useEffect,useRef} from 'react'
 import Brockle from '../Images/Brockle.jpg'
import styled from 'styled-components'
import {gsap}   from 'gsap'


 
const Card = ({item}) => {
    const targetRef = useRef(null);
    const targettext = useRef(null);


    
    useEffect(() => {
        gsap.from(targetRef.current, {opacity:0, duration:1, y:100, stagger:0.2})
        gsap.from(targettext.current, {opacity:0, duration:1, y:20, stagger:0.2})
        
        }, [targetRef])

  return (
    <div ref={targetRef}>
   

     <Carda>
    <img ref={targettext} src="https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
    <Heading>
    <h3 ref={targettext}>{item}</h3>
    <p ref={targettext}></p>
    </Heading>
    <Price>
        
        <Buttona ref={targettext}>+</Buttona>
    </Price>
</Carda>


    
 
    </div>
  )
}

export default Card



const Carda = styled.div`
    position: relative;
    left: 1rem;
    width: 14rem;
    height: 14rem;
    background-color: red;
    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
         
    }
     
`
const Price = styled.div`
    font-size: 1rem;
    display: flex;
     
    z-index: 1;
    height: 2rem;
    width: 15rem;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 0rem;
    button{
        width: 2rem;
        margin-right:2rem;

    }
`
const Heading = styled.div`
    font-size:0.9rem;
    position: absolute;
    bottom: 1rem;
    left: 2rem;
`
const Buttona = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    bottom: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #000;
        color: #fff;
    }

`