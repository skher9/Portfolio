import React from "react";
import styled from "styled-components";
import SquareSharpIcon from "@mui/icons-material/SquareSharp";

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
  flex-wrap: wrap;
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
`;

const Image = styled.img`
  height: 400px;
`;

const Heading = styled.p`
  font-size: x-large;
  font-style: italic;
  text-align: left;
`;

const P = styled.span`
  color: #2d9596;
  font-size: x-large;
  font-style: italic;
`;

const Info = styled.p`
  text-align: left;
  font-size: large;
`;

const Line1 = styled.span`
  margin-top: 20px;
  border: 1px solid #2d9596;
  width: 100px;
`;

const Line2 = styled.span`
  margin-top: 20px;
  border: 1px solid #2d9596;
  width: 60px;
`;

const Introduction = () => {
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Heading>
            Hey <P>there!</P>
            <br />
            I'm Shravani, <P>A Web Developer</P> with a{" "}
            <P>Passion for Design!</P>
            <br />
            <SquareSharpIcon
              style={{ marginTop: 20, width: 20, color: "2d9596" }}
            />
          </Heading>
          <Info>
            I code, I read, and lately, I've fallen in love with design. Turning
            lines of code into digital wonders is my jam. On a break, you'll
            find me nose-deep in a book.
            <br />
            Let's turn ideas into interactive experiences together!
          </Info>
          <SquareSharpIcon
            style={{ marginTop: 5, width: 20, color: "2d9596" }}
          />
          <Line1></Line1>
          <Line2></Line2>
        </InfoContainer>
        <ImageContainer>
          <Image src="https://simran-gangwani.netlify.app/images/main.svg" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Introduction;

/** */
