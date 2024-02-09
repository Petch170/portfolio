import React, { useState } from "react";
import {
  MapPinIcon,
  DevicePhoneMobileIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/outline";
import Contactform from "./Contactform";

const Contact = () => {
  const infoMe = {
    phone: "088-946-5164",
    email: "sojirat.petch@gmail.com",
    home: "nonthaburi,Thailand",
  };

  return (
    <div id="contactme" className="p-5">
      <h2 className="text-center text-lg md:text-xl lg:text-2xl font-semibold pb-2">
        Contact
      </h2>
      <div className="flex flex-wrap justify-center gap-14 pt-5 ">
        <div className="Left flex flex-wrap justify-center gap-5">
          <div className=" bg-[#588594] gap-3 flex flex-col justify-center items-center w-[240px] p-5 rounded-lg text-sm md:text-md ">
            <DevicePhoneMobileIcon className=" w-10 bg-gray-600 rounded-[50%] p-1 justify-center items-center" />
            {infoMe.phone}
          </div>
          <div className="bg-[#588594]  gap-3 flex flex-col justify-center items-center w-[240px] p-5 rounded-lg text-sm md:text-md ">
            <AtSymbolIcon className=" w-10 bg-gray-600 rounded-[50%] p-1 justify-center items-center" />
            {infoMe.email}
          </div>
          <div className="bg-[#588594] gap-3 flex flex-col justify-center items-center w-[240px] p-5 rounded-lg text-sm md:text-md ">
            <MapPinIcon className=" w-10  bg-gray-600 rounded-[50%] p-1 justify-center items-center" />
            {infoMe.home}
          </div>
        </div>
        {/* <div className="right  flex flex-grow py-3 px-5">
          <Contactform />
        </div> */}
      </div>
    </div>
  );
};
export default Contact;
