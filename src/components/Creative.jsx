import React from "react";
import styled from "styled-components";
import SquareSharpIcon from "@mui/icons-material/SquareSharp";

const Container = styled.div`
  height: 600px;
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
`;

const ImageContainer = styled.div`
  height: 100%;
  min-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  height: 100%;
  min-width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  height: 350px;
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

const Button = styled.button`
  font-size: 17px;
  height: 45px;
  width: 150px;
  background-color: transparent;
  border: 2px solid #2d9596;
  margin: 5px 0px 5px 0px;
  cursor: pointer;
`;

const Link = styled.a`
  align-self: flex-start;
`;

const Creative = () => {
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Heading>
            My <P>Creatives!</P>
            <br />
            <SquareSharpIcon
              style={{ marginTop: 20, width: 20, color: "2d9596" }}
            />
          </Heading>
          <Info>
            Apart from coding I am also keenly interested in Designing. Here are
            some of my creatives which I have designed.
          </Info>
          <Link href="https://dribbble.com/Shra0910">
            <Button>See Designs</Button>
          </Link>

          <SquareSharpIcon
            style={{ marginTop: 5, width: 20, color: "2d9596" }}
          />
          <Line1></Line1>
          <Line2></Line2>
        </InfoContainer>
        <ImageContainer>
          <Image src="https://simran-gangwani.netlify.app/images/designing.svg" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Creative;
