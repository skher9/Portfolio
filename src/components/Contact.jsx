import React from "react";
import styled from "styled-components";
import SquareSharpIcon from "@mui/icons-material/SquareSharp";
import contact from "../assets/images/contact.svg"

const Container = styled.div`
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
            Let's <P>Collab!</P>
            <br />
            <SquareSharpIcon
              style={{ marginTop: 20, width: 20, color: "2d9596" }}
            />
          </Heading>
          <Info>
              Got an awesome project idea but need a partner in crime? 🕵️‍♂️💡<br/>
              Or maybe you’re on the lookout for someone to bring your vision to life? 💼🎨<br/>
              Hit me up via email or slide into my DMs on LinkedIn – let’s make some digital magic together! ✨🚀 Let’s talk and turn ideas into epic reality! 🔥
          </Info>
          <Link href="https://www.linkedin.com/in/shravani-kher-0875281b6/">
            <Button>LinkedIn</Button>
          </Link>

          <SquareSharpIcon
            style={{ marginTop: 5, width: 20, color: "2d9596" }}
          />
          <Line1></Line1>
          <Line2></Line2>
        </InfoContainer>
        <ImageContainer>
          <Image src={contact} alt="Contact Image" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Creative;
