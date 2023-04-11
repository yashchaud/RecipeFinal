import React from "react";
import { useState, useEffect } from "react";
import Brockle from "../Images/Brockle.jpg";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Profiletest from "../Profile/profiletest";
import { useDispatch } from "react-redux";
import { setData } from "../redux store/store";

const ServicesSection = (props) => {
  const dispatch = useDispatch();

  const [ingredients, Setingredients] = useState([""]);

  const [list, setList] = useState([]);
  const [Photos, Setphotos] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const targetRef = React.useRef(null);
  const targettext = React.useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [dummy, setDummy] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const showSearchInput = isHovered || isFocused;
  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  useEffect(() => {
    gsap.from(targettext.current, { opacity: 0, duration: 1, y: 100, stagger: 0.2 });
  }, [targettext]);

  useEffect(() => {
    const text = list[0];

    if (text === undefined) {
      return;
    }
    if (text === "") {
      console.log(text.length);
      const lista = text.split(",");
      setList(lista);
    }

    console.log(list);
  }, [list]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(list);
  const handlerequ = async () => {
    const as = await axios({
      method: "post",
      url: "/search/list",
      data: {
        list: list,
      },
    });
  };

  const handleRecipe = async () => {
    await axios
      .post("/search", { lista: list })
      .then(({ data }) => {
        dispatch(setData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Collaborator>
      <h1>Please Ingredients you have i will try my best to get you close enough recipe</h1>
      <Searchcover>
        <Searchbar
          type="text"
          onChange={handleChange}
          onKeyDown={(e) => {
            if ([13].includes(e.keyCode)) {
              if (inputValue) {
                let newList = [...list, inputValue];
                setDummy([inputValue]);
                setList(newList);
                // axios({
                //   method: "post",
                //   url: "/search/list",
                //   data: {
                //     list: list,
                //   },
                // });
              }
            }
          }}
          ref={targetRef}
        />

        <Button onClick={handleRecipe}>Recommend Recipe</Button>
      </Searchcover>
      <Cover>
        {list.map((item, index) => (
          <Card ref={targettext} key={index} item={item} />
        ))}
      </Cover>
    </Collaborator>
  );
};

export default ServicesSection;

const Collaborator = styled.div`
  position: relative;
  width: 100vw;
  z-index: 2;
  min-height: 44rem;
  background-color: #222326;
  display: grid;
  justify-content: center;
  grid-auto-flow: row;
  overflow: hidden;
  h1 {
    color: #fff;
    font-size: 2rem;
    text-align: center;
    padding: 3rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 45rem;
  display: grid;
  margin-top: 9rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  min-height: 0;
  overflow: hidden;
  min-width: 0;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  align-content: space-evenly;
`;

const Searchcover = styled.div`
  width: 30rem;
  margin: auto;
`;

const Button = styled.div`
  width: 100%;
  height: 46px;
  background: #ffc107;
  border-radius: 4px;
  font-size: 1.2rem;
  color: #fff;
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  &:hover {
    background: #ffc107;
    cursor: pointer;
  }
`;
const Searchbar = styled.input`
  width: 100%;
  height: 46px;
  padding: 6px 12px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(223, 225, 228);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 4px;
  font-size: 0.8125rem;
  color: rgb(40, 42, 48);
  margin: 0px;
  appearance: none;
  app-region: no-drag;
  touch-action: pan-x pan-y;
`;
