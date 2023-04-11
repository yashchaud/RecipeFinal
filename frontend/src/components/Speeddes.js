import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useQuery, useIsFetching } from "react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { setData } from "../redux store/store";
import { useDispatch } from "react-redux";
import { pageAnimation, titleAnim, fade, photoAnim, reveal } from "./animation";
import { gsap } from "gsap";

const Speeddes = () => {
  const dispatch = useDispatch();
  const stylesa = useRef(null);

  const getRecipes = async () => {
    const res = await axios("/search");

    return res.data;
  };

  function Preloader() {
    // Set up the query
  }

  useEffect(() => {
    console.log(stylesa.current);
  }, []);

  const { data, error, isLoading, isSuccess } = useQuery("Recipes", getRecipes);
  const isFetching = useIsFetching();

  if (isLoading)
    return (
      <div className="preloader">
        <p>Loading...</p>
      </div>
    );
  if (isSuccess) {
    dispatch(setData(data));
    console.log("data is comming");
  }

  return (
    <Cover>
      <Title>
        <motion.h1 variants={titleAnim}>An experience you'd expect from a professional tool.</motion.h1>
        <motion.p variants={fade}>Opinionated and designed for daily use.</motion.p>
      </Title>
      <Cardcont>
        <Gridcard>
          {data
            ? data.map(function (item, i) {
                console.log("test");
                return (
                  <Link ref={stylesa} style={{ textDecoration: "none" }} to={`/test/${i}`}>
                    <motion.div key={i} variants={pageAnimation} exit="exit" initial="hidden" animate="show">
                      <Card key={i} variants={reveal}>
                        <motion.img variants={photoAnim} src={item.image_url} alt="" />

                        <motion.h3 variants={titleAnim}>{item.name}</motion.h3>
                        <motion.p variants={fade}>{item.description}</motion.p>
                      </Card>
                    </motion.div>
                  </Link>
                );
              })
            : null}
        </Gridcard>
      </Cardcont>
    </Cover>
  );
};

export default Speeddes;

const Cover = styled.div`
  background-color: #1c1d1f;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  margin-right: 1rem;
  font-family: "Montserrat", sans-serif;
`;
const Title = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 3rem;
  margin-top: 7rem;
  h1 {
  }
  p {
    color: #81858d;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    overflow: hidden;
  }
  @media (min-width: 1024px) {
    h1 {
      margin-left: 25%;

      max-width: 50%;
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
      overflow: hidden;
    }
  }
`;

const Cardcont = styled.div`
  max-width: 100vw;
  min-height: 50vh;
  display: flex;

  align-items: center;
  justify-content: center;
`;
const Gridcard = styled.div`
  max-width: 1309px;
  min-height: 20vh;

  display: grid;

  grid-template-columns: 1fr 1fr;
  margin-right: 1rem;
  margin-bottom: 6.5rem;
  @media (min-width: 1024px) {
    max-width: 1309px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Card = styled(motion.div)`
  cursor: pointer;
  border-radius: 1rem;

  background: linear-gradient(180deg, rgba(49, 48, 53, 1) 0%, rgba(34, 35, 38, 1) 100%);
  box-shadow: 0px 7px 32px rgb(0 0 0 / 35%);
  padding: 1rem;
  min-width: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) -1px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  min-height: 12.4rem;
  font-size: 0.9rem;
  margin: 0.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  color: White;
  @media (min-width: 1024px) {
    padding: 2rem;
    min-width: 18rem;
    min-height: 49rem;
    margin-left: 0rem;
    margin-right: 1rem;
    margin: 1rem;
  }

  p {
    font-size: 1.2rem;
    min-width: 90%;
    max-height: 30%;
    margin-top: 1rem;
    margin-left: 0.6rem;
    color: #878b94;
    overflow: hidden;
  }
  h3 {
    max-width: 17rem;
    font-size: 1.2rem;
    margin-left: 0.6rem;
    margin-top: 0.8rem;
    color: #e1e2e2;
    overflow: hidden;
  }
  svg {
    max-width: 17rem;
    margin-left: 0.6rem;
    color: #5e6ad2;
  }
  h2 {
    max-width: 17rem;
    margin-left: 0.6rem;
    color: #5e6ad2;
    overflow: hidden;
    word-wrap: break-word;
  }
  img {
    object-fit: contain;
    max-width: 340px;
    margin-bottom: 3rem;
  }
`;
