import React from "react";
import Adobe from "../svg/Adobe";
import Amazon from "../svg/Amazon";
import Netflix from "../svg/Netflix";
import Spotify from "../svg/Spotify";
import Zapier from "../svg/Zapier";
import Zoom from "../svg/Zoom";

export default function Home() {
  return (
    <div className="bg-[#F1F1F3] w-[100vw] h-[100%] flex flex-col items-center p-3 text-black">
      <div className="flex items-center bg-[#FF9500] rounded-lg p-4 text-center text-sm	">
        <img src="/icons/speaker.png" className="w-[15px]" />
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <img
          src="/icons/arrow.png"
          className="object-cover h-[15px] w-[15px] self-end"
        />
      </div>
      <div className="flex items-center justify-end w-full mt-3">
        <button className="bg-white py-4 px-5 rounded-md border-2 w-[99px]">
          Sign Up
        </button>
        <button className="bg-[#FF9500] py-4 px-5 rounded-md w-[99px] ml-2">
          Log In
        </button>
        <img src="/icons/menu.png" className="w-[35px] h-[35px] ml-5" />
      </div>
      <hr className="w-full h-[2px] mt-4 bg-gray-200 border-1 dark:bg-gray-700" />
      <div className="bg-white h-16 w-full flex justify-center items-center mt-11">
        <p className="text-base font-bold	">
          <span className="text-[#FF9500]">Unlock</span> Your Creative Potential
        </p>
      </div>
      <p className="mt-3 text-2xl text-center">
        with Online Design and Development Courses.
      </p>
      <p className="mt-2 text-sm">
        Learn from Industry Experts and Enhance Your Skills
      </p>
      <div className="flex items-center justify-center w-full mt-3">
        <button className="bg-white py-4 px-5 rounded-md mt-11">
          Explore Courses
        </button>
        <button className="bg-[#FF9500] py-4 px-5 rounded-md mt-11 ml-2">
          View Pricing
        </button>
      </div>
      <div className="bg-white w-full h-[84px] mt-8  px-2 border-red rounded-lg border-2 flex justify-start items-center flex-row flex-nowrap overflow-x-scroll overflow-y-scroll no-scrollbar">
        <div className="w-[30%] p-4 flex">
          <Zapier />
        </div>
        <div className="w-[10px] ">
          <hr className="h-[64px]  w-[2px] bg-gray-200  dark:bg-gray-700 " />
        </div>
        <div className="w-[30%] p-4 flex">
          <Spotify />
        </div>
        <div className="w-[10px] ">
          <hr className="h-[64px]  w-[2px] bg-gray-200  dark:bg-gray-700 " />
        </div>
        <div className="w-[30%] p-4 flex">
          <Zoom />
        </div>
        <div className="w-[10px] ">
          <hr className="h-[64px]  w-[2px] bg-gray-200  dark:bg-gray-700 " />
        </div>
        <div className="w-[30%] p-4 flex">
          <Netflix />
        </div>
        <div className="w-[10px] ">
          <hr className="h-[64px]  w-[2px] bg-gray-200  dark:bg-gray-700 " />
        </div>{" "}
        <div className="w-[30%] p-4 flex">
          <Amazon />
        </div>
        <div className="w-[10px] ">
          <hr className="h-[64px]  w-[2px] bg-gray-200  dark:bg-gray-700 " />
        </div>
        <div className="w-[30%] p-4 flex">
          <Adobe />
        </div>
      </div>
      <img
        src="/banner1.png"
        alt=""
        className="w-full h-[247px] mt-8 mb-12 rounded-xl "
      />
      <div className="flex flex-col mb-10">
        <div className="flex flex-col justify-start">
          <p className="font-bold text-3xl text-left">Benefits</p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="bg-white h-[50px] rounded-md p-3">View All</button>
      </div>
      <div className="bg-white h-[293px] w-full mb-5 rounded-xl"></div>
      <div className="bg-white h-[293px] w-full mb-5 rounded-xl"></div>
    </div>
  );
}
