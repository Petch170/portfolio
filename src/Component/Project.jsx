import React from "react";
import project from "../data/project.json";
import { getImageUrl } from "../utils";

const Project = () => {
  return (
    <div
      id="myproject"
      className="px-5 md:mx-30 lg:mx-56 flex items-center justify-center">
      <div className=" flex flex-col gap-5 my-10 ">
        <h2 className=" text-center text-xl md:text-3xl lg:text-5xl font-semibold my-2 underline text-[#c2a371]">
          Projects
        </h2>
        <div className="flex flex-wrap gap-10 pt-2 pb-5 justify-center">
          {project.map((project, id) => {
            return (
              <div key={id} className=" border border-slate-600 bg-slate-700 rounded-2xl py-4 shadow-lg hover:scale-105 duration-300">
                <div className="px-6 w-60 md:w-[350px] h-44 md:h-[250px]">
                  <img
                    className=" mb-2 rounded-lg bg-cover w-full h-full"
                    src={getImageUrl(project.imageSrc)}
                    alt={` image of ${project.title}`}
                  ></img>
                </div>
                <div className="px-6 w-60 md:w-[350px]">
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
    </div>
  );
};

export default Project;
