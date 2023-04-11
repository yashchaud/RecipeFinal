import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import vegetable from "../Images/vegetable.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { setActive } from "../redux store/store";
import { useSelector } from "react-redux";
import div from "./div";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.registerPlugin(Observer);
const Div = forwardRef((props, ref) => {
  const active = useSelector((state) => state.active);

  const t1 = useRef(null);
  const dispatch = useDispatch();
  const divrea = useRef(null);

  divrea.current = active;

  useImperativeHandle(ref, () => divre.current);

  var h = window.innerHeight;
  var w = window.innerWidth;
  const Animation = () => {
    const element = ref.current;
    const bounds = element.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    t1.current = gsap.timeline({ defaults: { ease: "power1.out" } });

    t1.current.fromTo(
      divre.current,
      { clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)" },
      { width: "120rem", height: "100%", clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none", duration: 1 }
    );
    t1.current.to(img.current, { width: "100%", height: "100%", duration: 1 }, "-=3");

    /*  t1.current.to(divre.current, {
     duration: 1,
   
     width: '100vw',
     height: '100vh',
      
     duration: 1,
  
      
      
   });*/

    console.log("we in here");
  };
  useEffect(() => {
    Observer.create({
      target: divre.current, // can be any element (selector text is fine)
      type: "wheel,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
      onUp: () => {
        console.log("we in here 1");
      },
      onDown: () => {},
    });
  }, [divre]);

  const divre = useRef(null);
  const img = useRef(null);

  return (
    <Cover ref={divre} onClick={Animation}>
      <img ref={img} src={vegetable} alt="" />
    </Cover>
  );
});

export default Div;

const Cover = styled.div`
  cursor: pointer;
  min-width: 21rem;
  height: 32rem;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;

    top: 0;
    object-fit: cover;
  }
`;
