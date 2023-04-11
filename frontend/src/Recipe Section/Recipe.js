import React, { useEffect, useRef } from "react";
import Instructions from "./Instructions";
import LandingRecipe from "./Landingrecipe";
import axios from "axios";
import { useQuery } from "react-query";

import { setData } from "../redux store/store";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";

import ScrollToPlugin from "gsap/ScrollToPlugin";
const Recipe = () => {
  function scrollTo(target, duration) {
    const currentPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + currentPosition;
    gsap.to(window, {
      scrollTo: targetPosition,
      duration: duration / 1000,
      ease: "power4.inOut",
    });
  }
  return (
    <div>
      <LandingRecipe />
      <Instructions />
    </div>
  );
};

export default Recipe;
