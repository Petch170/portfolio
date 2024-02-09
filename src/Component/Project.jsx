import React from "react";
import project from "../data/project.json";
import { getImageUrl } from "../utils";

const Project = () => {
  return (
    <div id="myproject" className="p-5">
      <h2 className=" text-lg md:text-xl lg:text-2xl font-semibold pb-2 tracking-[.8px] text-center">
        Projects
      </h2>
      <div className="flex flex-wrap gap-6 pt-2 pb-5 justify-center">
        {project.map((project, id) => {
          return (
            <div key={id} className=" border border-red-300 rounded-lg py-4 ">
              <div className="px-6 w-60 md:w-72 h-44 md:h-52">
                <img
                  className=" mb-2 rounded-lg border border-blue-500 bg-contain bg-center w-full h-full "
                  src={getImageUrl(project.imageSrc)}
                  alt={` image of ${project.title}`}
                ></img>
              </div>
              <div>
                <h3 className=" text-md md:text-xl font-semibold text-wrap text-center">
                  {project.title}
                </h3>
                <p className=" font-normal text-sm md:text-lg text-center">
                  {project.description}
                </p>
                <ul className="w-full mt-4 flex flex-row flex-wrap gap-2 list-none justify-center">
                  {project.skill.map((skill, id) => {
                    return (
                      <li
                        key={id}
                        className=" text-sm md:text-lg font-normal border rounded-full px-2 "
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
                </div>
                <div className="w-full mt-4 flex justify-around ">
                  <a
                    className="text-sm md:text-lg font-semibold tracking-[1.5px] bg-[#588594] rounded-lg px-5 py-[2px]"
                    href={project.demo}
                  >
                    Demo
                  </a>
                  <a
                    className="text-sm md:text-lg font-semibold bg-[#588594] rounded-lg px-5 py-[2px]"
                    href={project.github}
                  >
                    Source
                  </a>
                </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
