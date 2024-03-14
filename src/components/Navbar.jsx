import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Container = styled.div`
  height: 100px;
  max-width: 100vw;
  margin-top: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  flex: 1;
  border-bottom: 2px solid #2d9596;
  height: 70px;
  max-width: 80vw;
  display: flex;
`;

const StyledLink = styled(Link)`
  color: #2d9596;
  text-decoration: none;
`;

const HeadingContainer = styled.div`
  flex: 1;
  height: 70px;
  display: flex;
  align-items: flex-start;
`;

const Heading = styled.p`
  align-self: center;
  font-size: 50px;
  font-weight: bold;
  color: #2d9596;
  font-family: "Alex Brush", cursive;
`;

const NavItems = styled.div`
  height: 70px;
  width: 350px;
  display: flex;
  gap: 20px;
  flex-direction: row;
`;

const UL = styled.ul`
  width: 300px;
  list-style: none;
  display: flex;
  gap: 20px;
  font-size: larger;
  color: #2d9596;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 30%;
    left: 1%;
    gap: 10px;
    font-size: 15px;
  }
`;

const Button = styled.button`
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #2d9596;
  ${(props) => props.hidden && "display: none;"}
`;

const LI = styled.li`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  cursor: pointer;
`;

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #2d9596;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  @media screen and (max-width: 600px) {
    width: 270px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  color: #2d9596;
`;

const A = styled.a`
  text-decoration: none;
  color: #2d9596;
`;

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lessThan50Percent = windowWidth < 1000;

  const handleButtonClick = () => {
    setPopUpVisible(true);
  };

  const handlePopUpClose = () => {
    setPopUpVisible(false);
  };

  return (
    <Container>
      <Wrapper>
        <HeadingContainer>
          <Heading>ShravaniCodes</Heading>
        </HeadingContainer>
        {lessThan50Percent ? (
          <Button onClick={handleButtonClick}>
            <DensitySmallIcon />
          </Button>
        ) : (
          <NavItems>
            <UL>
              <StyledLink to="/">
                <LI>Home</LI>
              </StyledLink>
              <StyledLink to="/Blogs">
                <LI>Blogs</LI>
              </StyledLink>
              <StyledLink to="/Projects">
                <LI>Projects</LI>
              </StyledLink>
              <A href="https://dribbble.com/Shra0910">
                <LI>Creatives</LI>
              </A>
            </UL>
          </NavItems>
        )}
        {isPopUpVisible && (
          <PopUpContainer>
            <NavItems>
              <UL>
                <StyledLink to="/">
                  <LI>Home</LI>
                </StyledLink>
                <StyledLink to="/Blogs">
                  <LI>Blogs</LI>
                </StyledLink>
                <StyledLink to="/Projects">
                  <LI>Projects</LI>
                </StyledLink>
                <A href="https://dribbble.com/Shra0910">
                  <LI>Creatives</LI>
                </A>
              </UL>
            </NavItems>
            <CloseButton onClick={handlePopUpClose}>
              <CloseRoundedIcon />
            </CloseButton>
          </PopUpContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
