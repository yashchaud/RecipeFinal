import React,{useRef,useState} from 'react'
import styled from "styled-components";
import Nav from './Nav';
import { useLocation } from 'react-router-dom'
import Profiletest from './profiletest';

const as = () => {
  const [naval, setnav] = useState("")
   const location = useLocation()
  console.log(location)
  console.log(document.querySelector('Trans'))
  console.log(naval)
  return (
    <Cover>
      <Profiletest/>
      <Nav />
      It worked
    </Cover>
  )
}

export default as
const Cover = styled.div`
  background-color: #af1010;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
   
  display: flex;
  justify-content: center;
  align-items: center;
 `
