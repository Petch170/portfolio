import html from "/HTML-n.png"
import css from "/CSS-n.png"
import javascript from "/JavaScript-logo.png"
import react from "/React.png"
import nodejs from "/nodejs.png"
import tailwind from "/tailwind.png"
import git from "/Git.png"
import mongo from "/mongo-n.png"


const Skill = () => {
  
  const data = [
    {
      id: 0,
      image: html,
      name: "HTML",
    },
    {
      id: 1,
      image: css,
      name: "CSS",
    },
    {
      id: 2,
      image: javascript,
      name: "Javascript",
    },
    {
      id: 3,
      image: react,
      name: "React",
    },
    {
      id: 4,
      image: nodejs,
      name: "Node.js",
    },
    {
      id: 5,
      image: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 6,
      image: git,
      name: "Git",
    },
    {
      id: 7,
      image: mongo,
      name: "Mongo DB",
    },
 
  ];

  return (
    <div id="skill" className="px-5 h-screen flex items-center justify-center">
    <div className=" h-full w-full md:mx-36 lg:mx-56 flex flex-col justify-center">
        <h2 className=" text-center text-xl md:text-3xl lg:text-5xl font-semibold my-2 md:my-6 underline text-[#c2a371]">My Skill</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 justify-center pt-2 pb-5">
          {data.map((member) => (
            <div
              key={member.id}
              className=" bg-slate-700  border-b-2 hover:scale-105 duration-300 rounded-md flex flex-col items-center "
            >
              <div className=" p-3 w-20 md:w-25  h-16  ">
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
      </div>
   
  );
};

export default Skill;
