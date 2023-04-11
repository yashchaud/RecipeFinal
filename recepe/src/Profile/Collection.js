import React,{useRef,useState,useEffect} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import gsap from "gsap";
import {Flip} from "gsap/Flip";
import Infinate from './Infinate';
import Trans from './trasn';
import Nav from './Nav';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setelement } from '../redux store/store';
import Marquee from './marquee';
 
gsap.registerPlugin(Flip)


const Collection = () => {
    const {element} = useSelector(state => state.counterSlice)
    console.log(element)
    const navigate = useNavigate();
    const wrapper= useRef(null)
    const Nava= useRef(null)
    const [newel, setnewel] = useState(null)
    const [newel1, setnewel1] = useState(null)
    const [pause, setpause] = useState(null)
    const [newel3, setnewel3] = useState(null)

useEffect(() => {
    setnewel3(<Trans/>)
    
     

}, [element])
    useEffect(() => {
        const wraperchild = wrapper.current.children[1].children[0]

        const wraperchild2 = wrapper.current.children[1].children[1]
        console.log(wrapper.current.children[1].children[0])
  
 
      
                
                
              if(element=== "Trans"){
                setnewel1(<Trans/>)
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
                       }, 3500);
                             
                        
                        }
                })
                t1.fromTo(wraperchild2,{
                    paddingTop: "2em",
                    backgroundColor: "#fafafa",
                     
                }
                ,{
                    duration: 2.5,
                    backgroundColor: "#171616",
                     
                }
                   , "-=2" )
              }
          if(element === "Marquee"){
            setnewel1(<Trans/>)
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
                    navigate("/marquee")
                   }, 3500);
                         
                    
                    }
            })
            t1.fromTo(wraperchild2,{
                paddingTop: "2em",
                backgroundColor: "#fafafa",
                 
            }
            ,{
                duration: 2.5,
                backgroundColor: "#171616",
                 
            }
               , "-=2" )

        } 


  

 
       
       
    }, [element])

  return (
    <div ref={wrapper}>
        <Nav ref ={Nava} />
   <div>
    <Cover>
    {newel}
    </Cover>
    <Cover1>

    {newel1}
 

    </Cover1>
   </div>
   {newel3}
    </div>
  )
}

export default Collection


const Cover = styled.div`
background-color: #fafafa;
 
width: 100vw;
    height: 100vh;
margin-top: -3em;
 padding-top: 2em;
 border-radius: 3em 3em 0px 0px; 
 margin-bottom: 18em;
 
`

const Cover1 = styled.div`
background-color: #fafafa;
 
width: 100vw;
    height: 100vh;
margin-top: -3em;
 padding-top: 2em;
 border-radius: 3em 3em 0px 0px; 
 margin-bottom: 18em;
 
`