// import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Project from "./Component/Project";
import Skill from './Component/Skill'
import Contact from './Component/Contact'
import Experience from "./Component/Experience";


function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Aboutus />
      <Skill/>
      <Experience/>
      <Project />
      <Contact/>
    </>
  );
}

export default App;
