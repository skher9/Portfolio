import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Creative from "../components/Creative";
import Technology from "../components/Technology";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Projects />
      <Creative />
      <Blog />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
