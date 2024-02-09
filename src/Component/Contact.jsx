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
    <div className="px-24 py-5 items-center border-green-300 border ">
      <h2 className="font-bold text-4xl tracking-[.8px] text-center">
        Contact
      </h2>
      <div className="flex gap-14">
        <div className="Left flex flex-col border border-purple-400  w-[350px] h-full gap-5">
          <div className="border border-white  gap-3 flex flex-col justify-center items-center w-auto p-5">
            <DevicePhoneMobileIcon className=" w-10 bg-gray-600 rounded-[50%] p-1 justify-center items-center" />
            {infoMe.phone}
          </div>
          <div className="border border-white  gap-3 flex flex-col justify-center items-center w-auto p-5">
            <AtSymbolIcon className=" w-10 bg-gray-600 rounded-[50%] p-1 justify-center items-center" />
            {infoMe.email}
          </div>
          <div className="border border-white  gap-3 flex flex-col justify-center items-center w-auto p-5">
            <MapPinIcon className=" w-10  bg-gray-600 rounded-[50%] p-1 justify-center items-center" />
            {infoMe.home}
          </div>
        </div>
        <div className="right border border-pink-400 flex flex-grow py-3 px-5">
          <Contactform />
        </div>
      </div>
    </div>
  );
};
export default Contact;
// const formInDetail = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   message: "",
// };
// const [formDetail, setFormDetail] = useState(formInDetail);
// const [btnSubmit, setBtn] = useState("send");
// const [status, setStatus] = useState({});

// const onFormUpdate = (category, value) => {
//   setFormDetail({
//     ...formDetail,
//     [category]: value,
//   });
// };

// const handleSubmit = () => {};

// return (
// <div className=" flex justify-evenly  pt-6 pb-6 border-black border">
// {/* <div className="flex flex-col justify-center">
// <h2 className=" font-medium text-2xl">
//   {" "}
//   <HomeIcon className=" w-3 h-3" /> Contact
// </h2>
// <h2> Get In Touch</h2>
// <form onSubmit={handleSubmit}>
//   <label htmlFor="firstname"></label>
//   <input
//     type="text"
//     placeholder="Firstname"
//     value={formDetail.firstName}
//     required
//     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//   />
//   <label htmlFor="lastname"></label>
//   <input
//     type="text"
//     placeholder="Lastname"
//     value={formDetail.lastName}
//     required
//     onChange={(e) => onFormUpdate("lastName", e.target.value)}
//   />
//   <label htmlFor="email"></label>
//   <input
//     type="email"
//     placeholder="Email"
//     value={formDetail.email}
//     required
//     onChange={(e) => onFormUpdate("email", e.target.value)}
//   />
//   <label htmlFor="phone"></label>
//   <input
//     type="tel"
//     placeholder="Phone"
//     value={formDetail.phone}
//     required
//     onChange={(e) => onFormUpdate("phone", e.target.value)}
//   />
//   <textarea
//     placeholder="Message"
//     value={formDetail.message}
//     onChange={(e) => onFormUpdate("message", e.target.value)}
//   />
//   <button type="sunmit">
//     <span>{btnSubmit}</span>
//   </button>
//   {status.message && (
//     <p className={status.success === false ? "danger" : "success"}>
//       {status.message}
//     </p>
//   )}
// </form>
