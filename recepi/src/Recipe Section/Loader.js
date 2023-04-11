import React from 'react'
import styled from "styled-components";
import img1 from '../Profile/imagespro/img1.jpg'



const Loader = () => {
  return (
    <Loaderflex>
            <LoaderColumn>
                    <Loaderinner>
                        <LoaderWrap>
                        <img src={img1} alt="" />
                        <img src={img1} alt="" />
                        <img src={img1} alt="" />
                        <img src={img1} alt="" />
                        <img src={img1} alt="" />

                        </LoaderWrap>
                    </Loaderinner>
            </LoaderColumn>
    </Loaderflex>
  )
}

export default Loader


const Loaderflex = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    transform: scale(0.5);
     
    
   

    background-color: green;
 `
const LoaderColumn = styled.div`
padding-left: 7vh;
padding-right: 7vh;

display: flex;
flex-direction: row;
align-items: stretch;
justify-content: start;
`
const Loaderinner = styled.div`
height: 100%;
display: flex;
flex-direction: column;
flex-shrink: 0;
 align-items: stretch;
justify-content: space-between;
`
const LoaderWrap = styled.div`
 width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    img{
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`