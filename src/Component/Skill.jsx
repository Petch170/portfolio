import React from "react";

const Skill = () => {
  const data = [
    {
      id: 0,
      image: "src/assets/HTML-n.png",
      name: "HTML",
    },
    {
      id: 1,
      image: "src/assets/CSS-n.png",
      name: "CSS",
    },
    {
      id: 2,
      image: "src/assets/JavaScript-logo.png",
      name: "Javascript",
    },
    {
      id: 3,
      image: "src/assets/React.png",
      name: "React",
    },
    {
      id: 4,
      image: "src/assets/885px-Node.js_logo.svg.png",
      name: "Node.js",
    },
    {
      id: 5,
      image: "src/assets/tailwind.png",
      name: "Tailwind CSS",
    },
    {
      id: 6,
      image: "src/assets/Git.png",
      name: "Git",
    },
    {
      id: 7,
      image: "src/assets/mongo-n.png",
      name: "Mongo DB",
    },
 
  ];

  return (
    <div className="p-5 ">
    
        <h1 className=" text-center text-lg md:text-xl lg:text-2xl font-semibold pb-2">My Skill</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 justify-center pt-2 pb-5">
          {data.map((member) => (
            <div
              key={member.id}
              className="border border-orange-600 rounded-md flex flex-col items-center "
            >
              <div className=" p-3 w-20 md:w-25 lg:24 h-16  ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-scale-down"
                />
              </div>
              <h3 className="text-sm md:text-md lg:text-lg text-wrap text-center pb-3">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default Skill;
