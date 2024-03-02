import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  min-height: 500px;
  width: 85vw;
  overflow-y: visible;
  align-self: center;
`;

const Heading = styled.p`
  font-size: 30px;
  font-style: italic;
`;

const P = styled.span`
  color: #2d9596;
  font-style: italic;
`;

const BlogPage = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Heading>
          My <P>Blogs</P>
        </Heading>
        <Heading>
          <P>Comming Soon.....</P>
        </Heading>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default BlogPage;
