import React from "react";
import styled from "styled-components";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = styled.div`
  min-height: 450px;
  max-height: 500px;
  min-width: 25vw;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  margin: 20px 20px 0px 20px;
  max-height: 180px;
  border-radius: 20px;
`;

const InfoContainer = styled.div`
  margin: 0px 10px 20px 10px;
  flex: 2;
  height: 50px;
  text-align: left;
`;

const Title = styled.p`
  font-size: 20px;
  color: #2d9596;
`;

const Text = styled.p``;

const B = styled.span`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 100px;
`;

const Button = styled.button`
  margin-left: 5px;
  color: #2d9596;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Link = styled.a`
  color: #2d9596;
`;

const Card = ({ title, description, technology, image, live, git }) => {
  return (
    <Project>
      <Image src={image} />
      <InfoContainer>
        <Title>
          <B>{title}</B>
        </Title>
        <Text>
          {technology}
          <br />
          <br />
          {description}
        </Text>
        <ButtonContainer>
          <Button>
            <Link href={live}>
              <LaunchOutlinedIcon />
            </Link>
          </Button>
          <Button>
            <Link href={git}>
              <GitHubIcon />
            </Link>
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </Project>
  );
};

export default Card;
