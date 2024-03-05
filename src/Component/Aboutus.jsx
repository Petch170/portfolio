const Aboutus = () => {
  return (
    <div id="about-me" className="px-5 md:mx-30 lg:mx-56 flex items-center justify-center ">
      <div className="  flex flex-col gap-5 my-10 sm:my-12 md:my-20 lg:my-28">
        <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-semibold m-2 underline text-[#c2a371]">
          About
        </h1>
        <div className=" flex flex-col md:flex-row gap-10 md:gap-4 items-center">
          <div className="flex flex-1">
            <p className="text-lg md:text-xl lg:text-2xl font-base text-start pt-2 px-8 ">
              My name is{" "}
              <span className="font-bold"> Sojirat Petchpaiboon , </span>I
              graduated from the Generation Thailand Bootcamp cohort 6,
              masterring JavaScript, React, Node.js, Express, TailwindCSS,
              MongoDB, HTML, CSS, SQL and Git. Always evolving. Excited to
              contribute my skills to innovative projects and continually grow
              in the ever-changing tech landscape.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <img src="/com.jpg" className=" rounded-md h-[80%]"></img>
          </div>
          {/* <Education/> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
