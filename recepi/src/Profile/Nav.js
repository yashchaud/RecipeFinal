import React,{forwardRef,useRef,useEffect} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setelement } from '../redux store/store';

const Nav = ({setnav})=> {
  const state = useSelector(state => state)
  const useDispatchs = useDispatch()
 const Nava = useRef(null)

 const dispatcha = (e) => {
  e.preventDefault()
  useDispatchs(setelement(e.target.textContent))
 }
useEffect(() => {
     
  
}, [])


  return (
        <Cover ref={Nava}>
        <Link onClick={(e)=> dispatcha(e)} to='/'>Ingredients</Link>
        <Link onClick={(e)=> dispatcha(e)} to='/ingredients'>Recipes</Link>
        <Link onClick={(e)=> dispatcha(e)} to='/marquee'>Marquee</Link>

        <Link onClick={(e)=> dispatcha(e)} to='/marquee'>Marquee</Link>

    </Cover>
  )
}


export default Nav

const Cover = styled.div`
     width: 25rem;
    height: 4rem;
    
    overflow: hidden;
position: fixed;
bottom: 6
rem;
left: 48rem;
display: flex;
  justify-content: space-around;
  align-items: center;
   
  background-color: rgba(251, 249, 249, 0.376);
   border-radius: 10px;
  backdrop-filter: blur(10rem);
  box-shadow: 0 0 10px rgba(71, 70, 71, 0.459);
  z-index: 10000;
    a{
         text-decoration: none;
        font-size:0.8rem;
        color: #202020;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        opacity: 1;
        

    }

`