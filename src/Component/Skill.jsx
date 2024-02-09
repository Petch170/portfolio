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
      <div className="px-20">
        <h1 className=" text-center text-2xl font-semibold border border-r-amber-500 p-5">My Skill</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-blue-800 gap-4">
          {data.map((member) => (
            <div
              key={member.id}
              className="border border-orange-600 mx-4 p-5 flex flex-col justify-center items-center  "
            >
              <div className=" border border-t-green-900 p-2 w-40 h-40  ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-scale-down"
                />
              </div>
              <h3 className="text-lg p-3">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
