import React from "react";
import { useNavigate } from "react-router-dom";

export default function Menue() {
    const nav = useNavigate();

  return (
    <div className="flex items-center justify-end w-full mt-3 md:justify-between">
      <div className="max-md:hidden flex">
        <img src="/logo.png" alt="" className="w-[45px] h-[45px] rounded-md" />
        <button
          className="p-3 rounded-md bg-[#c9bcbc] md:mx-2 lg:mx-7"
          onClick={() => nav(`/`)}
        >
          Home
        </button>
        <button className="md:mx-2 lg:mx-7" onClick={() => nav(`/courses`)}>
          Contact
        </button>
        <button className="md:mx-2 lg:mx-7">About Us</button>
        <button className="md:mx-2 lg:mx-7">Courses</button>
        <button className="md:mx-2 lg:mx-7">Pricing</button>
      </div>
      <div className="">
        <button className="bg-white py-4 px-5 rounded-md border-2 w-[99px]">
          Sign Up
        </button>
        <button className="bg-[#FF9500] py-4 px-5 rounded-md w-[99px] ml-2">
          Log In
        </button>
      </div>
      <img src="/icons/menu.png" className="w-[35px] h-[35px] ml-5 md:hidden" />
    </div>
  );
}
