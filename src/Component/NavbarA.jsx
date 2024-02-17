import { useState } from "react";
import {
  ArrowDownTrayIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function NavbarA() {
  const [nav, setNav] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className=" bg-[#0E3B43] top-0 z-20 py-6 px-5 w-full hidden sm:flex flex-wrap justify-between items-center text-lg fixed">
        <div>
          <a
            className="hover:cursor-pointer opacity-100"
            onClick={() => scrollToSection("home")}
          >
            Petch
          </a>
        </div>
        <ul className="list flex gap-10">
          <li>
            <a
              className="hover:cursor-pointer opacity-100"
              onClick={() => scrollToSection("about-me")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:cursor-pointer opacity-100"
              onClick={() => scrollToSection("skill")}
            >
              Skill
            </a>
          </li>
          <li>
            <a
              className="hover:cursor-pointer opacity-100"
              onClick={() => scrollToSection("Exp")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="hover:cursor-pointer opacity-100"
              onClick={() => scrollToSection("myproject")}
            >
              Project
            </a>
          </li>
          <li>
            <a
              className="hover:cursor-pointer opacity-100"
              onClick={() => scrollToSection("contactme")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="fixed top-0 sm:hidden z-50 w-full ">
        <div className="flex justify-between  items-center bg-[#0E3B43] border-b rounded-md p-5">
          <Bars3Icon
            className="w-8 border border-blue rounded-lg"
            onClick={() => setNav(!nav)}
          />
          {/* <div className=" flex justify-between items-center z-50 py-1 w-[250px]">  */}
          <p className="flex  text-2xl font-bold left-4"  onClick={() => scrollToSection("home")}> Petch</p>
        </div>
        {/* <XMarkIcon  className="w-8 relative right-4 top-0 " /> */}
        {/* </div> */}
        {nav ? (
          <nav className=" flex flex-col w-[250px] bg-[#0E3B43] h-screen duration-300">
            <ul className="flex flex-col px-4 pt-5 ">
              <li
                onClick={() => scrollToSection("about-me")}
                className="text-xl py-4 border-b border-gray-200 rounded-xl text-center shadow-lg hover:font-bold hover:scale-105 "
              >
                About
              </li>
              <li
                onClick={() => scrollToSection("skill")}
                className="text-xl py-4 border-b border-gray-200 rounded-xl text-center shadow-lg hover:font-bold hover:scale-105 "
              >
                Skill
              </li>
              <li
                onClick={() => scrollToSection("Exp")}
                className="text-xl py-4 border-b border-gray-200 rounded-xl text-center shadow-lg hover:font-bold hover:scale-105 "
              >
                Experience
              </li>
              <li
                onClick={() => scrollToSection("myproject")}
                className="text-xl py-4 border-b border-gray-200 rounded-xl text-center shadow-lg hover:font-bold hover:scale-105 "
              >
                Project
              </li>
              <li
                onClick={() => scrollToSection("contactme")}
                className="text-xl py-4 border-b border-gray-200 rounded-xl text-center shadow-lg hover:font-bold hover:scale-105 "
              >
                Contact
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default NavbarA;
