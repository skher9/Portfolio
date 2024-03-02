import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Card from "../components/Card";
import TicTacToe from "../utils/TicTacToe.png";
import AskOnDate from "../utils/AskOnDate.png";
import Ecommerce from "../utils/Ecommerce.png";
import ShoeStore from "../utils/ShoeStore.png";
import Weather from "../utils/Weather.png";
import ToDo from "../utils/ToDo.png";
import Joke from "../utils/Joke.png";
import Profit from "../utils/Profit.png";
import EMI from "../utils/EMI.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  min-height: 500px;
  width: 85vw;
  overflow-y: visible;
  align-self: center;
`;

const Heading = styled.p`
  font-size: 30px;
  font-style: italic;
`;

const P = styled.span`
  color: #2d9596;
  font-style: italic;
`;

const ProjectContainer = styled.div`
  margin: 20px;
  min-height: 450px;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 15px;
`;

const ProjectPage = () => {
  const Project = [
    {
      id: "1",
      title: "Tic Tac Toe",
      image: TicTacToe,
      technology: "#html #css #javascript #react.js",
      description:
        "A React-based Tic Tac Toe game app allowing two players to take turns.",
    },
    {
      id: "2",
      title: "Ask Out on a Date (Fun Game)",
      image: AskOnDate,
      technology: "#html #css #javascript #react.js",
      description:
        " Ask-Out app, where the 'No' button playfully evades capture, adding a fun twist to the excitement of accepting every date proposal.",
    },
    {
      id: "3",
      title: "Ecommerce Website for Apperals",
      image: Ecommerce,
      technology: "#html #css #javascript #react.js",
      description:
        "Shop seamlessly with our stylish React-powered E-commerce app, blending fashion and tech for a delightful experience",
    },
    {
      id: "4",
      title: "Shoe Store (Ecommerce Website)",
      image: ShoeStore,
      technology: "#html #css #javascript #react.js redux",
      description:
        "Effortless shoe shopping: React and Redux for seamless navigation and personalized recommendations.",
    },
    {
      id: "5",
      title: "Weather Prediction App",
      image: Weather,
      technology: "#html #css #javascript #react.js",
      description:
        "Prepare with ease: our Weather App delivers real-time updates and detailed forecasts in a user-friendly interface.",
    },
    {
      id: "6",
      title: "To Do List",
      image: ToDo,
      technology: "#html #css #javascript #react.js",
      description:
        "Effortlessly manage tasks with our streamlined to-do app using React, and Redux for enhanced productivity",
    },
    {
      id: "7",
      title: "EMI Calculator",
      image: EMI,
      technology: "#html #css #javascript #react.js",
      description:
        "Empower financial planning with our sleek EMI calculator – a smart blend of HTML, CSS, JavaScript, and React.",
    },
    {
      id: "8",
      title: "Dad Joke Generator",
      image: Joke,
      technology: "#html #css #javascript",
      description:
        "Daily joy: Our Dad Joke Generator app delivers smiles with witty dad jokes, bringing laughter to your fingertips.",
    },
    {
      id: "9",
      title: "Profit Loss",
      image: Profit,
      technology: "#html #css #javascript #react.js",
      description:
        "Track finances effortlessly with our 'ProfitLoss Calculator'—a quick, intuitive tool for informed decisions.",
    },
  ];

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Heading>
          My <P>Projects!</P>
        </Heading>
        <ProjectContainer>
          {Project.map((ele) => {
            return (
              <Card
                title={ele.title}
                description={ele.description}
                technology={ele.technology}
                image={ele.image}
              />
            );
          })}
        </ProjectContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProjectPage;
