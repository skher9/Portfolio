import React from "react";
import styled from "styled-components";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = styled.div`
  height: 450px;
  width: 25vw;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  margin: 20px 20px 0px 20px;
  max-height: 180px;
  min-height: 100px;
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

const Card = ({ title, description, technology, image }) => {
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
            <LaunchOutlinedIcon />
          </Button>
          <Button>
            <GitHubIcon />
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </Project>
  );
};

export default Card;
