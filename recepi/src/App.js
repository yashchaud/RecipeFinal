 import React from 'react'
 import GlobalStyle from "./Globalstyle";
import styled from "styled-components";
 import {BrowserRouter,RouterProvider, Route,createRoutesFromElements,Outlet ,Link,createBrowserRouter} from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
  import ServicesSection from '../src/components/Ingredients';
 
import Login from './Login'
import Speeddes from './components/Speeddes';
import Recipe from './Recipe Section/Recipe'
 import Marquee from './Profile/Infinate';
import Loader from   '../src/Recipe Section/Loader'
import Profiletest from './Profile/profiletest';
import Trasn from './Profile/trasn';

import Newapproach from './Recipes overview/Newapproach'
function App() {
  const a = ['yash', 'saas','asdas']
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<AboutUs/>}/>
        <Route path='/ingredients'  element={<ServicesSection/>}/>
        <Route path='/Recipes' element={<Speeddes/>}/>
         <Route path= '/test/:index' element={<Recipe/>}/>
        <Route path='/scale' element={<Newapproach/>}/>
        <Route path='/marquee' element={<Marquee/>}/>
        <Route path='/trans' element={<Trasn/>}/>
        <Route path='/loader' element={<Loader/>}/>
        <Route path='/profiletest' element={<Profiletest/>}/>


        
      </Route>
    )
  );

  return (
  
    <Cover>
       <GlobalStyle/>
        
       <RouterProvider router={router} />
         
    </Cover>
    
 
  );
}

const Root =() =>{
  return(
    <>
    
    <div>
    <Outlet/>
    </div>
    </>
  )
}

export default App;

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y:hidden;

  overflow-x:hidden;
  `