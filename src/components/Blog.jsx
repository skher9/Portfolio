import React from "react";
import styled from "styled-components";
import SquareSharpIcon from "@mui/icons-material/SquareSharp";
import { Link } from "react-router-dom";

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
  text-align: right;
`;

const Image = styled.img`
  height: 400px;
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
          <Image src="https://simran-gangwani.netlify.app/images/blogs.svg" />
        </ImageContainer>
        <InfoContainer>
          <Heading>
            My <P>Blogs!</P>
            <br />
            <SquareSharpIcon
              style={{ marginTop: 20, width: 20, color: "2d9596" }}
            />
          </Heading>
          <Info>
            I love writing in my free time. I have also worked with Scaler
            Academy and Codedamn as a content writer and wrote several tech
            blogs for their programming and development courses.
          </Info>
          <Link to="/Blogs">
            <Button>See Blogs</Button>
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
