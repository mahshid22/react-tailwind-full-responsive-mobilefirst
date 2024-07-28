import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const activeStyle = " bg-[#c9bcbc]";

export default function Menue() {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center justify-end w-full mt-3 md:justify-between">
      <div className="max-md:hidden flex">
        <img src="/logo.png" alt="" className="w-[45px] h-[45px] rounded-md mr-5" />
        <button
          className={`${
            location.pathname === "/" ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
          onClick={() => nav(`/`)}
        >
          Home
        </button>
        <button
          className={`${
            location.pathname === "/courses" ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
          onClick={() => nav(`/courses`)}
        >
          Courses
        </button>
        <button
          className={`${
            location.pathname === "/aboutus" ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
        >
          About Us
        </button>
        <button
          className={`${
            location.pathname === "/contacts" ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
        >
          contacts
        </button>
        <button
          className={`${
            location.pathname === "/aboutus" ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
        >
          Pricing
        </button>
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
