import React, { useEffect,useRef, forwardRef} from "react";
import  gsap  from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Vegetables from  "../Images/vegetable.jpg";
import Flip from "gsap/Flip";
import Nav from "./Nav";
import img1 from './imagespro/img1.jpg'
import img2 from './imagespro/img2.jpg'
import img3 from './imagespro/img3.jpg'
import img4 from './imagespro/img4.jpg'
import img5 from './imagespro/img5.jpg'
import img6 from './imagespro/img6.jpg'
import img7 from './imagespro/img7.jpg'
import img8 from './imagespro/img8.jpg'
import img9 from './imagespro/img9.jpg'
import img10 from './imagespro/img10.jpg'
import img11 from './imagespro/img11.jpg'
import img12 from './imagespro/img12.jpg'
import Profiletest from "./profiletest";


gsap.registerPlugin(Draggable, ScrollTrigger, Flip);

const Marquee = forwardRef((props, ref,Animation) => {
    const Containerref= useRef(null)


    useEffect(() => {
       
 
    }, []) 

  return (
<Container ref={ref}   id="container">
    <Combiner>
   <Boxes>
      <Box1>
      <Divcont >
        <img src={img1} alt="" />
       </Divcont>
       <Divcont>
        <img src={img2} alt="" />
       </Divcont>
      </Box1>
      <Box2>
      <Divcont>
        <img src={img3} alt="" />
       </Divcont>
       <Divcont>
        <img src={img4} alt="" />
       </Divcont>
      </Box2>
      <Box3>
       <Divcont>
        <img src={img5} alt="" />
       </Divcont>
       <Divcont>
        <img src={img6} alt="" />
       </Divcont>

      </Box3>
      <Box4>
      <Divcont>
        <img src={img7} alt="" />
       </Divcont>
       <Divcont>
        <img src={img8} alt="" />
       </Divcont>
      </Box4>
      <Box5> 
        <Divcont>
        <img src={img9} alt="" />
       </Divcont>
       <Divcont>
        <img src={img10} alt="" />
       </Divcont>
       </Box5>
      <Box6>
      <Divcont>
        <img src={img11} alt="" />
       </Divcont>
       <Divcont>
        <img src={img12} alt="" />
       </Divcont>
      </Box6>
      

   </Boxes>

   </Combiner>
   
    


     

    </Container>
  );
});

export default Marquee;
 
const Divcont = styled.div`
 width: 97%;
height: 90%;
display: flex;
 border-radius: 1rem;
margin:0.5rem;
justify-content: center;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 1rem;

}
`
const Combiner = styled.div`
position: absolute;
margin:0.5rem;

width: 110vw;
height: 150vh;
display: flex;
flex-direction: row;
overflow-y: visible;
gap:1rem;
`
const Container = styled.div`
    position: relative;
    width: 500rem;
  height: 150vh;
 display: flex;
    flex-direction: column;


  .parent {
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 6 / 2; }
.div2 { grid-area: 1 / 2 / 6 / 3; }
.div3 { grid-area: 1 / 3 / 6 / 4; }
.div4 { grid-area: 1 / 4 / 6 / 5; }
.div5 { grid-area: 1 / 5 / 6 / 6; }
.div6 { grid-area: 1 / 6 / 6 / 7; }

 
`
const Boxes = styled.div`
width: 180rem;
height: 150vh;
position: absolute;
display: grid;
 grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
div{
    max-width: 30rem;
}

 
`
 

const Box1 = styled.div`
 grid-area: 1 / 1 / 6 / 2; 
 display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Box2 = styled.div`
 grid-area: 1 / 2 / 6 / 3; 
 display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Box3 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

 grid-area: 1 / 3 / 6 / 4; 
 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Box4 = styled.div`
 grid-area: 1 / 4 / 6 / 5;
     display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Box5 = styled.div`

    grid-area: 1 / 5 / 6 / 6;
     display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
    `
const Box6 = styled.div`

    grid-area: 1 / 6 / 6 / 7;
    display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
     `