import React, { useEffect, useState } from "react";
import logo from'../assets/download.jpg';

function Navbar() {
  const [activeLink,setActiveLink] = useState('home');
  const [scrolled,setScrolled]=useState(false);

useEffect(()=>{
  const onScroll =()=>{
    if(window.scrollY>50){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }
window.addEventListener("scroll",onscroll);
return()=>window.removeEventListener('scroll',onScroll);

},[])

const onUpdateActiveLink = (value)=>{
  setActiveLink(value);
}


  return (
    <div className={`${scrolled ? "scrolled" : ""} bg-blue h-16 w-full flex justify-between items-center px-6 text-lg opacity-75`}>
      <div > <img src="#" alt="logo"/>   Petch</div>
      <ul className="list flex gap-10 ">
        <li>
          <a className={`hover:cursor-pointer opacity-100 ${activeLink==='home'? 'active navbar-link':'navbar-link'} `} href="#" onClick={()=>onUpdateActiveLink('home')}>About Us</a> 
        </li>
        <li>
          <a className={`hover:cursor-pointer opacity-100 ${activeLink==='project'? 'active navbar-link':'navbar-link'} `} href="#" onClick={()=>onUpdateActiveLink('project')}>Project</a> 
        </li>
        <li>
          <a className={`hover:cursor-pointer opacity-100 ${activeLink==='contact'? 'active navbar-link':'navbar-link'} `} href="#" onClick={()=>onUpdateActiveLink('contact')}>Contact</a> 
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
