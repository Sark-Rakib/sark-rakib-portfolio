import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Loading from "./component/Loading";
import ReviewSection from "./component/ReviewSection";

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
      <ReviewSection></ReviewSection>
      <Contact></Contact>
    </div>
  );
};

export default App;
