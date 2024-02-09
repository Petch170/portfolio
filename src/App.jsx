import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import logo1 from './Picture/logo1'
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Project from "./Component/Project";
// import Skill from './Component/Skill'
import Contact from './Component/Contact'
// import Portfolio from './Component/portfolio'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Aboutus />
      <Project />
      <Contact/>
    </>
  );
}

export default App;
