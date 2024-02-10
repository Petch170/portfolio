const Aboutus = () => {
  return (
    <div id="about-me" className="p-5 md:mx-36 lg:mx-56 md:h-[750px]">
      <h1 className="text-center text-lg md:text-xl lg:text-3xl font-semibold my-2 md:my-8 underline lg:pt-36">
        About
      </h1>
      <div className=" flex flex-col md:flex-row gap-10 md:gap-4 ">
        <div className="flex flex-1">
          <p className="text-sm md:text-md lg:text-xl font-base text-start pt-2 px-8 ">
            My name is{" "}
            <span className="font-bold"> Sojirat Petchpaiboon, </span>I
            graduated from the Generation Thailand Bootcamp cohort 6,
            masterring JavaScript, React, Node.js, Express, TailwindCSS,
            MongoDB, HTML, CSS, and Git. Quick learner, always evolving. Excited
            to contribute my skills to innovative projects and continually grow
            in the ever-changing tech landscape.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <img src="/com.jpg" className=" rounded-md h-[80%]"></img>
        </div>
        {/* <Education/> */}
      </div>
    </div>
  );
};

export default Aboutus;
