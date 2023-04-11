import React from 'react'
import Svg from './Images/svgexport-1.svg'
import styled from 'styled-components'


const Login = () => {
  return (
    <Cover>
        <Sudocover>
            <Logo>
                
            <Image src={Svg} alt="" />
            <Header>Log in to Recipe</Header>
            </Logo>
            <Searchbar type="text" />
            <Searchbar type="text" />
      
           <Button>Signup</Button>
        </Sudocover>
    </Cover>
  )
}

export default Login
const Cover = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(239,241,244);
background: linear-gradient(90deg, rgba(239,241,244,1) 0%, rgba(255,255,255,1) 100%);
    

`
const Logo = styled.div`    

display:flex;
flex-direction: column;
align-items: center;
margin-left:0.3rem;
margin-bottom: 2rem;
`
const Sudocover = styled.div`
    width: 20rem;
    height:40rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-left:47rem;
    margin-top: 7rem;
    gap: 1rem;

`
const Searchbar = styled.input`
width: 100%;
height: 46px;
    padding: 6px 12px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(223, 225, 228);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: 4px;
    font-size: 0.8125rem;
    color: rgb(40, 42, 48);
    margin: 0px;
    appearance: none;
    app-region: no-drag;
    touch-action: pan-x pan-y;
`
const Button = styled.button`
    height: 48px;
    font-size: 1rem;
    background: rgb(87, 91, 199);
    width: 100%;
    color:white;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    
`
const Image = styled.img`
    width: 84px;
    height: 84px;
    flex-shrink: 0;
   
    margin-bottom: 32px;
`
const Header = styled.h3`
    
    line-height: 1rem;
 
    color: rgb(60, 65, 73);
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.09rem;
`