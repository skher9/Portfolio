import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Container = styled.div`
  height: 150px;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 100px;
  width: 80vw;
  display: flex;
`;

const LocationContainer = styled.div`
  height: 100px;
  width: 50%;
  text-align: left;
`;

const SocialContainer = styled.div`
  height: 100px;
  width: 50%;
  text-align: right;
`;

const InfoContainer = styled.div`
  color: gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const IconContainer = styled.div`
  color: gray;
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;
`;

const Title = styled.p``;

const Link = styled.a`
  color: gray;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LocationContainer>
          <Title>Portfolio of Shravani Kher</Title>
          <InfoContainer>
            <FontAwesomeIcon icon={faLocationDot} /> currently in
            Akola,Maharashtra.
          </InfoContainer>
        </LocationContainer>
        <SocialContainer>
          <Title style={{ fontSize: "large", fontWeight: "bold" }}>
            Socials:
          </Title>
          <IconContainer>
            <Link href="https://twitter.com/shravani_k89430">
              <TwitterIcon style={{ cursor: "pointer" }} />
            </Link>
            <Link href="https://www.linkedin.com/in/shravani-kher-0875281b6/">
              <LinkedInIcon style={{ cursor: "pointer" }} />
            </Link>
            <Link href="https://github.com/skher9">
              <GitHubIcon style={{ cursor: "pointer" }} />
            </Link>
          </IconContainer>
        </SocialContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
