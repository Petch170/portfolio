// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import exwork from "../data/exwork.json";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Experience = () => {

  return (
    <div id="Exp" className="px-5 md:mx-36 lg:mx-56 lg:h-[750px]">
      <h2 className="text-center text-lg md:text-xl lg:text-3xl font-semibold my-2 md:my-8 underline lg:pt-36">Experience</h2>
      <Swiper
        slidesPerView={2} 
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{350:{slidesPerView: 1,},768: {
          slidesPerView: 2,
        },
      }}
      >
        {exwork.map((exWork) => (
          <SwiperSlide key={exWork.title}>
            <div className="border rounded-lg mb-5 p-4 mx-4 text-wrap ">
              <h2 className=" text-md md:text-lg lg:text-xl font-semibold text-wrap text-center">
                {exWork.title}
              </h2>
              <div className="flex flex-col md:flex-row justify-between my-3 gap-2">
                <p className="inline-block bg-[#588594] text-wrap w-auto py-1 px-2 rounded-lg text-sm md:text-lg font-normal text-center">
                  {exWork.company}
                </p>
                <p className="inline-block bg-[#588594] w-auto py-1 px-2 rounded-lg text-sm md:text-lg font-normal text-center">
                  {exWork.date}
                </p>
              </div>
              <ul className="pl-10 inline-block relative text-wrap list-disc text-sm md:text-base font-normal">
                {exWork.work.map((workItem) => (
                  <li key={workItem}>{workItem}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Experience;
