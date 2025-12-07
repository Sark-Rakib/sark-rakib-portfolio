import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Services from "./Component/Services";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Experience from "./component/Experience";
// import { skills, projects, services, socials, experience } from "./data/data";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
};

export default App;
