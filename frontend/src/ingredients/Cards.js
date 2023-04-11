import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Brockle from "../Images/Brockle.jpg";
import axios from "axios";

const Cards = () => {
  const [Result, Setresult] = useState();
  useEffect(() => {
    async function fetching() {
      const response = await axios.get("/search").then((response) => {
        console.log(response);
        Setresult(response.data);
      });
    }
    fetching();
  }, []);
  console.log(Result);
  return (
    <Collaborator>
      <Cover>
        <Card>
          <img src={Brockle} alt="" />
          <Heading>
            <h3>Peach</h3>
            <p>USA</p>
          </Heading>
          <Price>
            <Buttona>+</Buttona>
          </Price>
        </Card>
      </Cover>
    </Collaborator>
  );
};

export default Cards;
const Collaborator = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #222326;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const Cover = styled.div`
  width: 100%;
  height: 35rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-content: space-evenly;
`;
const Card = styled.div`
  position: relative;
  left: 1rem;
  width: 15rem;
  height: 15rem;
  background-color: red;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Price = styled.div`
  font-size: 1rem;
  display: flex;

  z-index: 1;
  height: 2rem;
  width: 15rem;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 0rem;
`;
const Heading = styled.div`
  font-size: 0.9rem;
  position: absolute;
  bottom: 1rem;
  left: 2rem;
`;
const Buttona = styled.button`
  background-color: #44e047;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #39b408;
  }
`;
