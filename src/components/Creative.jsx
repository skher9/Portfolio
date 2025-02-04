import React from "react";
import styled from "styled-components";
import SquareSharpIcon from "@mui/icons-material/SquareSharp";
import designing from "../assets/images/designing.svg"

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
            Apart from coding, I’m also deeply passionate about designing. 🎨💡<br/>
            Here are some of my creative designs that I’ve crafted with love and attention to detail. 🖌️✨<br/>
            Check them out and let me know what you think! 💬👀<br/><br/>
            I’ve got a lot more designs in the works, so stay tuned for new ones coming soon! 🔥🌟 The creativity never stops! 🚀
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
          <Image src={designing} alt="Designes Image" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Creative;
