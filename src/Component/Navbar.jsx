import { useState } from "react";

function Navbar() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="bg-[#0E3B43] top-0 z-20 py-6 px-5 w-full flex flex-wrap justify-between items-center text-lg Desktop fixed">
      <div>
        <a className="hover:cursor-pointer opacity-100" onClick={()=>scrollToSection('home')}>Petch</a> 
      </div>
      <ul className="list flex gap-10" >
        <li>
          <a className="hover:cursor-pointer opacity-100"  onClick={()=>scrollToSection('about-me')}>About</a> 
        </li>
        <li>
          <a className="hover:cursor-pointer opacity-100"  onClick={()=>scrollToSection('skill')}>Skill</a> 
        </li>
        <li>
          <a className="hover:cursor-pointer opacity-100"  onClick={()=>scrollToSection('Exp')}>Experience</a> 
        </li>
        <li>
          <a className="hover:cursor-pointer opacity-100"  onClick={()=>scrollToSection('myproject')}>Project</a> 
        </li>
        <li>
          <a className="hover:cursor-pointer opacity-100"  onClick={()=>scrollToSection('contactme')}>Contact</a> 
        </li>
      </ul>
   
    </div>
    
  );
}

export default Navbar;
