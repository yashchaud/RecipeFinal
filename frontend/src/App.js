import React, { useEffect } from "react";
import GlobalStyle from "./Globalstyle";
import styled from "styled-components";
import { BrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet, Link, createBrowserRouter, useNavigate } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import ServicesSection from "../src/components/Ingredients";

import Login from "./Login";
import Speeddes from "./components/Speeddes";
import Recipe from "./Recipe Section/Recipe";
import Marquee from "./Profile/Infinate";
import Loader from "../src/Recipe Section/Loader";
import Profiletest from "./Profile/profiletest";
import Trasn from "./Profile/trasn";

import Newapproach from "./Recipes overview/Newapproach";
import axios from "axios";
import { setUser } from "./redux store/store";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const a = ["yash", "saas", "asdas"];

  useEffect(async () => {
    await axios
      .get(`/api/session/getSession`)
      .then(({ data }) => {
        console.log(data.user);
        dispatch(setUser(data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<AboutUs />} />
        <Route path="/ingredients" element={<ServicesSection />} />
        <Route path="/Recipes" element={<Speeddes />} />
        <Route path="/test/:index" element={<Recipe />} />
        <Route path="/scale" element={<Newapproach />} />
        <Route path="/marquee" element={<Marquee />} />
        <Route path="/trans" element={<Trasn />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/profiletest" element={<Profiletest />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return (
    <Cover>
      <GlobalStyle />

      <RouterProvider router={router} />
    </Cover>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  overflow-x: hidden;
`;
