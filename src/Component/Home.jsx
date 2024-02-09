import React, { useState, useEffect } from "react";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const toRotate = ["web Developer", "Full-Stack Developer"];
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
    <div className=" relative flex justify-center flex-col md:flex-row gap-10 overflow-hidden bg-[url('public/diego-ph-5LOhydOtTKU-unsplash.jpg')] px-24 py-12 bg-center bg-cover bg-no-repeat ">
      <div className="  order-2 lg:w-2/3 md:order-1 md:w-1/2 border border-red-700 p-10 gap-10 justify-center">
        <div>
          <span className="tagline tracking-[.8px] font-bold text-xl mb-4 inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 border border-[255,255,255,.5] rounded-md py-2 px-3">
            {" "}
            Welcome to my Portfolio
          </span>
          <h1 className=" font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I'm Sojirat Petchpaiboon
          </h1>
          <h4 className=" font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl h-24">
            {text}
          </h4>

          <p className=" font-base text-xl md:text-4xl lg:text-5xl xl:text-xl pb-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            possimus nobis voluptates voluptatum pariatur unde atque est magnam
            amet deleniti. Molestias consequuntur alias, labore ipsa magnam
            provident perspiciatis temporibus soluta!
          </p>
        </div>
        <div className="flex  p-5 gap-5">
          <button
            onClick={() => console.log("Download")}
            className=" border border-blue px-7 py-1 gap-2"
          >
            Download CV
          </button>
          <button
            onClick={() => console.log("linkin")}
            className=" flex border border-blue px-11 py-1 gap-2"
          >
            {" "}
            <img
              src="src/assets/github_2111432.png"
              alt="github"
              width="20px"
            ></img>{" "}
            Linkin
          </button>
        </div>
      </div>
      {/* <div className="order-1 md:order-2 flex border border-yellow-500 bg-center md:w-1/2 lg:w-1/3 ">
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
