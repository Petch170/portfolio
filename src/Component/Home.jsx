import { useState, useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import linkin from "/linkin.png"
import CV from "/CV_petch.pdf"


const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const toRotate = ["Web Developer", "Full-Stack Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  //ระยะเวลา
  const period = 1000;

  useEffect(() => {
    let tickker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(tickker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (

    <div id="home" className=" relative flex p-5 justify-center items-center md:flex-row ">
      <div className="items-center justify-center w-full md:w-[60%] my-10 sm:my-12 md:my-20 lg:my-28">
        <div className="px-4 ">
          <span className="tagline tracking-[.8px] p-3 font-bold text-lg my-4 inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 border border-[255,255,255,.5] rounded-md ">
            {" "}
            Welcome to my Portfolio
          </span>
          <h1 className=" font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 md:py-5 text-wrap">
            Hi, I'm Sojirat Petchpaiboon
          </h1>
          <h4 className=" font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl py-2 md:py-5">
            {text} <br />
          </h4>
          <p className=" font-base text-lg md:text-xl py-2 md:py-5 text-wrap">
          I'm a career changer passionate about building responsive web
          applications.
          </p>
        </div>
        <div className="flex pt-5 gap-5">
          <a href={CV} download="CV">
            <button className=" bg-[#588594] flex gap-2 w-32 lg:w-44 py-2 justify-center rounded-lg">
              <ArrowDownTrayIcon className="w-5" />
              CV
            </button>
          </a>

          <a href="https://www.linkedin.com/in/sojirat/">
            <button className=" flex bg-[#588594] gap-2 w-32 lg:w-44 py-2 justify-center rounded-lg">
              <img
                src={linkin}
                alt="github"
                width="20px"
              ></img>{" "}
              Linkin
            </button>
          </a>
        </div>
      </div>
      {/* <div className="flex border border-yellow-500 bg-center md:w-1/2 lg:w-1/3 ">
        <img
          className=" w-full h-full object-cover object-center"
          src="src/assets/377309.jpg"
          alt="Mypicture"
        />
      </div> */}
    </div>
  );
};

export default Home;
