import React from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import Logo from "../../svg/Logo";

const activeStyle = " bg-[#c9bcbc]";

export default function Menue() {
  const nav = useNavigate();
  const location = useLocation();
  const match = useMatch("/courses/*");

  return (
    <div className="flex items-center justify-end w-full mt-3 md:justify-between">
      <div className="max-md:hidden flex">
        <div className="md:mr-2 lg:mr-10">
          <Logo />
        </div>
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
            location.pathname === "/courses" || match ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
          onClick={() => nav(`/courses`)}
        >
          Courses
        </button>

        <button
          className={`${
            location.pathname === "/aboutus" ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
          onClick={() => nav(`/aboutus`)}
        >
          About Us
        </button>

        <button
          className={`${
            location.pathname === "/contactus" ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
          onClick={() => nav(`/contactus`)}
        >
          contacts
        </button>
        <button
          className={`${
            location.pathname === "/pricing" ? activeStyle : ""
          } "md:mx-2 p-3 rounded-md border-2"`}
          onClick={() => nav(`/pricing`)}
        >
          Pricing
        </button>
      </div>
      <div className="">
        <button className={`${
            location.pathname === "/signup" ? "bg-[#FF9500]  rounded-md border-2" : ""
          } py-4 px-5 w-[99px]`}
        onClick={() => nav(`/signup`)}>
          Sign Up
        </button>
        <button
          className={`${
            location.pathname === "/login" ? "bg-[#FF9500] rounded-md border-2" : ""
          } py-4 px-5  w-[99px]`}
          onClick={() => nav(`/login`)}
        >
          Log In
        </button>
      </div>
      <img src="/icons/menu.png" className="w-[35px] h-[35px] ml-5 md:hidden" />
    </div>
  );
}
