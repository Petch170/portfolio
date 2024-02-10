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
    <div id="skill" className="p-5 lg:h-[750px] flex items-center justify-center overflow-hidden bg-[url('/star2.jpg')] bg-center bg-cover bg-no-repeat">
    <div className="w-full md:mx-36 lg:mx-56">
        <h1 className=" text-center text-lg md:text-xl lg:text-3xl font-semibold my-2 mg:my-8 underline ">My Skill</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 justify-center pt-2 pb-5">
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
      </div>
   
  );
};

export default Skill;
