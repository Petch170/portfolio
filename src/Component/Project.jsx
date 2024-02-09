import React from "react";
import project from "../data/project.json";
import { getImageUrl } from "../utils";

const Project = () => {
  return (
    <div className="px-24 py-5 bg-yellow-200">
      <h2 className=" font-bold text-4xl tracking-[.8px] text-center">
        Projects
      </h2>
      <div className=" mt-9 flex items-center flex-wrap justify-center gap-4 w-full">
        {project.map((project, id) => {
          return (
            <div
              key={id}
              className=" flex flex-col border-2 border-red-300 rounded-lg px-6 py-4 max-w-sm"
            >
              <img
                className=" mb-7 rounded-lg border border-blue-500 bg-contain bg-center w-[350px] h-[250px]"
                src={getImageUrl(project.imageSrc)}
                alt={` image of ${project.title}`}
              ></img>
              <h3 className=" text-2xl font-bold">{project.title}</h3>
              <p className=" mt-2 font-normal text-xl">{project.description}</p>
              <ul className="w-full mt-4 flex flex-row flex-wrap gap-2 list-none">
                {project.skill.map((skill, id) => {
                  return (
                    <li
                      key={id}
                      className=" text-xl font-normal border rounded-full px-3 py-[2px]"
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div className="w-full mt-6 flex justify-around gap-6">
                <a
                  className="text-xl font-semibold tracking-[1.5px] border bg-red-300 rounded-full px-5 py-[2px]"
                  href={project.demo}
                >
                  Demo
                </a>
                <a
                  className="text-xl font-semibold border  bg-red-300 rounded-full px-5 py-[2px]"
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
