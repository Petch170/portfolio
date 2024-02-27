import { useState } from "react";
import {
  ArrowDownTrayIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import diamond from "/diamond.svg";

function NavbarA() {
  const [nav, setNav] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // bg-[#0E3B43] top-0 z-20 py-2 px-5 w-full hidden sm:flex flex-wrap justify-between items-center text-lg fixed
  // fixed top-0 sm:hidden z-50 w-full #9f651a #d7ba8d #c2a371
  return (
    <div className="sticky top-0 z-50">
      <div className=" bg-[#c2a371] p-4 w-full hidden md:flex justify-between items-center text-lg ">
        <div className=" flex items-center gap-2" onClick={() => scrollToSection("home")}>
          <img src={diamond} alt="diamond" className=" w-12 bg-transparent cursor-pointer" />
          <a
            className="hover:cursor-pointer opacity-100 text-2xl lg:text-4xl  font-bold hover:text-[#01314c]"
            
          >
            Petch
          </a>
        </div>
        <ul className="list flex gap-10">
          <li>
            <a
              className="hover:cursor-pointer opacity-100 text-xl lg:text-2xl hover:font-bold hover:text-[#01314c] hover:scale-150 "
              onClick={() => scrollToSection("about-me")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:cursor-pointer opacity-100 text-xl lg:text-2xl hover:font-bold hover:text-[#01314c] hover:scale-150"
              onClick={() => scrollToSection("skill")}
            >
              Skill
            </a>
          </li>
          <li>
            <a
              className="hover:cursor-pointer opacity-100 text-xl lg:text-2xl hover:font-bold hover:text-[#01314c] hover:scale-150"
              onClick={() => scrollToSection("Exp")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="hover:cursor-pointer opacity-100 text-xl lg:text-2xl hover:font-bold hover:text-[#01314c] hover:scale-150"
              onClick={() => scrollToSection("myproject")}
            >
              Project
            </a>
          </li>
          <li>
            <a
              className="hover:cursor-pointer opacity-100 text-xl lg:text-2xl hover:font-bold hover:text-[#01314c] hover:scale-150"
              onClick={() => scrollToSection("contactme")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile */}  
      {/* fixed top-0 z-50 */}
      <div className=" md:hidden w-full sticky top-0 z-50">
        <div className=" flex justify-between items-center bg-[#c2a371] border-b rounded-b-lg p-5">
          <Bars3Icon
            className="w-8 border border-blue rounded-lg"
            onClick={() => setNav(!nav)}
          />
          {/* <div className=" flex justify-between items-center z-50 py-1 w-[250px]">  */}
          <p
            className="flex text-2xl font-bold left-4 hover:cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            {" "}
            Petch
          </p>
        </div>
        {/* <XMarkIcon  className="w-8 relative right-4 top-0 " /> */}
        {/* </div> */}
        {nav ? (
          <nav className=" sticky top-0">
            <ul className="px-4 py-5 duration-300 w-[250px] bg-[#c2a371] rounded-b-xl">
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
