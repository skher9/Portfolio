import React from "react";
import styled from "styled-components";
import html from "../utils/html.svg";
import css from "../utils/css.svg";
import js from "../utils/js.svg";
import github from "../utils/gitHub.svg";
import reactimg from "../utils/react.svg";
import node from "../utils/nodejs.svg";
//import photoshop from "../utils/photoshop.svg";
import illustrate from "../utils/illustrator.svg";
import figma from "../utils/figma.svg";
import tailwind from "../utils/tailwind.svg";

const Container = styled.div`
  height: 500px;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 550px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.p`
  font-size: x-large;
  font-style: italic;
`;

const P = styled.span`
  color: #2d9596;
  font-size: x-large;
`;

const Info = styled.p`
  font-size: large;
`;

const ImageWrapper = styled.div`
  margin: 15px;
  height: 300px;
  width: 30vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  height: 35px;
  width: 45px;
`;

const Title = styled.p``;

const Technology = () => {
  const Tools = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "Tailwind CSS",
      image: tailwind,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "Git Hub",
      image: github,
    },
    {
      name: "ReactJS",
      image: reactimg,
    },
    {
      name: "NodeJS",
      image: node,
    },

    {
      name: "Illustrator",
      image: illustrate,
    },
    {
      name: "Figma",
      image: figma,
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Heading>
          <P>Tools</P> and <P>Technologies!</P>
        </Heading>
        <Info>
          Below are some of the tools and technologies which I am familiar with
          in Web Developmnt.
        </Info>
        <ImageWrapper>
          {Tools.map((item) => {
            return (
              <ImageContainer>
                <Image src={item.image}></Image>
                <Title>{item.name}</Title>
              </ImageContainer>
            );
          })}
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default Technology;
