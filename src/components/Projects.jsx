import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SquareSharpIcon from "@mui/icons-material/SquareSharp";
import projects from "../assets/images/projects.svg"

const Container = styled.div`
  margin-top: 40px;
  max-width: 100vw;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
`;

const ImageContainer = styled.div`
  height: 100%;
  min-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  flex: 1 1 50%;
  height: 100%;
  min-width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
`;

const Image = styled.img`
  height: 400px;
  transform: scaleX(-1);
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

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: end;
`;

const Line1 = styled.span`
  margin-top: 20px;
  border: 1px solid #2d9596;
  width: 100px;
`;

const Line2 = styled.span`
  margin-left: 40px;
  margin-top: 20px;
  border: 1px solid #2d9596;
  width: 60px;
`;

const Button = styled.button`
  font-size: 17px;
  height: 45px;
  width: 150px;
  background-color: transparent;
  border: 2px solid #2d9596;
  align-self: flex-end;
  margin: 5px 0px 5px 0px;
  cursor: pointer;
`;

const Projects = () => {
  return (
    <Container>
      <Wrapper>
      <ImageContainer>
        <Image src={projects} alt="Projects Image" />
      </ImageContainer>
        <InfoContainer>
          <Heading>
            My <P>Projects!</P>
            <br />
            <SquareSharpIcon
              style={{ marginTop: 20, width: 20, color: "2d9596" }}
            />
          </Heading>
          <Info>
            Take a peek at some of my web development adventures that I’ve brought to life online. 🌐✨ Each project is linked to its GitHub repo, so you can dive deep into the code and see the magic behind the scenes! 🔍💻<br/><br/>
            I’ll admit, these projects are a bit on the older side, but don’t worry—new, shiny ones are coming soon! 🌟 Stay tuned for the next level of digital awesomeness! 🎉
          </Info>
          <Link to="/Projects">
            <Button>See Projects</Button>
          </Link>

          <LineContainer>
            <LineWrapper>
              <SquareSharpIcon
                style={{
                  marginTop: 5,
                  marginLeft: 82,
                  width: 20,
                  color: "2d9596",
                }}
              />
              <Line1></Line1>
              <Line2></Line2>
            </LineWrapper>
          </LineContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
