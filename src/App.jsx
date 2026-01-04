import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Services from "./Component/Services";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Experience from "./component/Experience";
import Loading from "./component/Loading";
// import { skills, projects, services, socials, experience } from "./data/data";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 sec loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading></Loading>;
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
