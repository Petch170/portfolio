
import {
  MapPinIcon,
  DevicePhoneMobileIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/outline";


const Contact = () => {
  const infoMe = {
    phone: "088-946-5164",
    email: "sojirat.petch@gmail.com",
    home: "nonthaburi,Thailand",
  };

  return (
    <div id="contactme" className="p-5 md:mx-36 lg:mx-56 h-screen flex justify-center items-center">
     <div className="flex justify-center gap-5 flex-col items-center  ">
      <h2 className="text-center text-xl md:text-3xl lg:text-5xl font-semibold my-2 underline text-[#c2a371]">
        Contact
      </h2>
      
        <div className="Left flex flex-wrap justify-center gap-5">
          <div className=" bg-[#588594] gap-3 flex flex-col justify-center items-center w-[240px]  md:w-[350px] p-5 rounded-lg text-lg md:text-2xl ">
            <DevicePhoneMobileIcon className=" w-10 bg-gray-600 rounded-[50%] p-1 justify-center items-center" />
            {infoMe.phone}
          </div>
          <div className="bg-[#588594]  gap-3 flex flex-col justify-center items-center w-[240px]  md:w-[350px] p-5 rounded-lg text-lg md:text-2xl ">
            <AtSymbolIcon className=" w-10 bg-gray-600 rounded-[50%] p-1 justify-center items-center" />
            {infoMe.email}
          </div>
          <div className="bg-[#588594] gap-3 flex flex-col justify-center items-center w-[240px]  md:w-[350px] p-5 rounded-lg text-lg md:text-2xl ">
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
