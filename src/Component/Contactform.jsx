import React, { useState } from "react";

const Contactform = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <div className=" w-full">
      <form>
        <div className="w-full mb-8 flex gap-8 items-center">
          {" "}
          <label htmlFor="name" className=" text-lg">
            Name:
          </label>
          <input
            className=" w-full text-xl p-2 outline-none border-none rounded-lg mt-2  text-gray-600"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full mb-8 flex gap-9 items-center">
          <label htmlFor="email" className=" text-lg">
            Email:
          </label>
          <input
            className=" w-full text-xl p-2 outline-none border-none rounded-lg mt-2 text-gray-600"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full mb-8 flex gap-3 items-center">
          <label htmlFor="message" className=" text-lg">
            Message:
          </label>
          <textarea
            className=" w-full text-xl p-2 outline-none border-none rounded-lg mt-2  text-gray-600"
            placeholder="Message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <button
            type="submit"
            className="border border-blue-600 bg-orange-500 rounded-2xl py-3 px-8 "
          >
            Button
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contactform;
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
