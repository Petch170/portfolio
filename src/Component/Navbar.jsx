import React from "react";
// import logo1 from './Picture/logo1'

function Navbar() {
  return (
    <div className="navbar bg-orange-200 h-16 w-full flex justify-between items-center pl-2 pr-16">
      <div className="navlogobar flex  items-center">
        <img className="nav w-14 h-14" src="src\Picture\logo1.png" alt="icon" />
        <span className="Logo">I.MOVE</span>
      </div>
      <ul className="list flex gap-10">
        <li>
          <a href="#"></a> Contact
        </li>
        <li>
          <a href="#"></a> About
        </li>
        <li>
          <a href="#"></a> Login
        </li>
        <li>
          <a href="#"></a> Sign up
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
