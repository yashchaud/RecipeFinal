import React, { useRef, useEffect,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled  from 'styled-components';
import { Rotate } from 'hamburger-react';

 



const Svg = () => {
  
  
 

 
  return (
    <Svga  version="1.0" xmlns="http://www.w3.org/2000/svg"
 
    preserveAspectRatio="xMidYMid meet">
   <defs>
    <linearGradient class="myGradient"  gradientTransform="rotate(0)">
      <stop offset="0%" stopColor="#E6D7FF"/>
      <stop offset="32%" stopColor="#E1C4FF"/>
      <stop offset="66%" stopColor="#6B56D0"/>
      <stop offset="100%" stopColor="#5E43AA"/>
    </linearGradient>
  </defs>
   <g    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
   fill="url(#myGradient)" stroke="none">
   <path d="M226 594 c-71 -22 -159 -112 -180 -184 -34 -115 -12 -206 73 -291 85
   -85 176 -107 291 -73 75 22 162 109 184 184 34 115 12 206 -73 291 -85 84
   -180 108 -295 73z m226 -41 c92 -51 146 -155 135 -261 -15 -145 -149 -254
   -295 -239 -145 15 -254 149 -239 295 11 102 92 201 191 232 57 17 150 5 208
   -27z"/>
   <path d="M225 526 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
   -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
   167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c134 -61 165
   -233 61 -337 -105 -105 -274 -75 -337 61 -79 171 104 354 276 276z"/>
   <path d="M140 280 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
   -15 -4 -15 -10z"/>
   <path d="M157 244 c-4 -4 -4 -10 -1 -15 6 -10 34 0 34 12 0 10 -24 12 -33 3z"/>
   <path d="M191 206 c-7 -8 -8 -17 -3 -20 6 -3 15 1 21 8 7 8 8 17 3 20 -6 3
   -15 -1 -21 -8z"/>
   <path d="M227 176 c-6 -16 2 -28 14 -20 12 7 11 34 0 34 -5 0 -11 -6 -14 -14z"/>
   <path d="M270 155 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
   -10 -7 -10 -15z"/>
   </g>
   </Svga>
  
  )
}

export default Svg


const Svga = styled.svg`
width: 4rem;

`