import React from "react";

function Home() {
  return (
    <div>
      <div className="homepage w-full ">
        <div className="Container">
          <img className="banner" src="src\Picture\run.jpg"  alt="run"/></div>
        <div className="homewelcome block ">
            <img className="logowelcome w-14 h-14 " src="src\Picture\logo1.png" alt="logo"/>
          <h1 className="text-3xl">Welcome to I.Move</h1>
          <p className="text-2xl">A healthy outside starts from the inside</p>
          <button>Start</button>
        </div>
      </div>
      <br></br>
      <div className="content text-center">
        <h2 className="content-wellcome text-4xl font-bold"><em>Track your progress, celebrate your success. Our app, your journey.</em></h2>
        <p>img dashboard</p>
      </div>
      <br />
      <h2>Testttttttttttttttttttttttttttt</h2>
    </div>
  );
}

export default Home;
