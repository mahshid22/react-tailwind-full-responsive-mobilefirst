import React from "react";
import Adobe from "../svg/Adobe";
import Amazon from "../svg/Amazon";
import Arrow from "../svg/Arrow";
import Netflix from "../svg/Netflix";
import Spotify from "../svg/Spotify";
import Zapier from "../svg/Zapier";
import Zoom from "../svg/Zoom";

export default function Home() {
  return (
    <div className="bg-[#F1F1F3]  h-[100%] flex flex-col items-center justify-center text-black p-3">
      {/* banner */}
      <div className="flex items-center bg-[#FF9500] rounded-lg p-4 text-center text-sm	w-full">
        {/* <img src="/icons/speaker.png" className="w-[15px]" /> */}
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <img
          src="/icons/arrow.png"
          className="object-cover h-[15px] w-[15px] self-end"
        />
      </div>
      {/* menu */}
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

      {/* titre */}
      <div className="bg-white h-16 w-full flex justify-center items-center mt-11 rounded-lg">
        <p className="text-base font-bold	">
          <span className="text-[#FF9500]">Unlock</span> Your Creative Potential
        </p>
      </div>

      {/* text */}
      <p className="mt-3 text-2xl text-center">
        with Online Design and Development Courses.
      </p>
      <p className="mt-2 text-sm">
        Learn from Industry Experts and Enhance Your Skills
      </p>

      {/* buttons */}
      <div className="flex items-center justify-center w-full mt-3">
        <button className="bg-white py-4 px-5 rounded-md mt-11">
          Explore Courses
        </button>
        <button className="bg-[#FF9500] py-4 px-5 rounded-md mt-11 ml-2">
          View Pricing
        </button>
      </div>

      {/* brands */}
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

      {/* video */}
      <img
        src="/banner1.png"
        alt=""
        className="w-full h-[247px] mt-8 mb-12 rounded-xl "
      />

      {/* Benefits */}
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

      {/* cards */}
      <div className="bg-white min-h-[293px] w-full mb-5 rounded-xl p-7 flex flex-col">
        <p className="text-4xl font-bold text-right mb-6">01</p>
        <p className="text-xl font-bold mb-3">Flexible Learning Schedule</p>
        <p className="mb-8">
          Fit your coursework around your existing commitments and obligations.
        </p>
        <button className="bg-[#F1F1F3] p-2 self-end rounded-md border-2">
          <Arrow />
        </button>
      </div>
      <div className="bg-white h-[293px] w-full mb-5 rounded-xl p-7 flex flex-col">
        <p className="text-4xl font-bold text-right mb-6">02</p>
        <p className="text-xl font-bold mb-3">Expert Instruction</p>
        <p className="mb-8">
          Learn from industry experts who have hands-on experience in design and
          development.
        </p>
        <button className="bg-[#F1F1F3] p-2 self-end rounded-md border-2">
          <Arrow />
        </button>
      </div>
      <div className="bg-white h-[293px] w-full mb-5 rounded-xl p-7 flex flex-col">
        <p className="text-4xl font-bold text-right mb-6">03</p>
        <p className="text-xl font-bold mb-3">Diverse Course Offerings</p>
        <p className="mb-8">
          Explore a wide range of design and development courses covering
          various topics.
        </p>
        <button className="bg-[#F1F1F3] p-2 self-end rounded-md border-2">
          <Arrow />
        </button>
      </div>
      <div className="bg-white h-[293px] w-full mb-5 rounded-xl p-7 flex flex-col">
        <p className="text-4xl font-bold text-right mb-6">04</p>
        <p className="text-xl font-bold mb-3">Updated Curriculum</p>
        <p className="mb-8">
          Access courses with up-to-date content reflecting the latest trends
          and industry practices.
        </p>
        <button className="bg-[#F1F1F3] p-2 self-end rounded-md border-2">
          <Arrow />
        </button>
      </div>

      {/* Our Courses */}
      <div className="flex flex-col mb-10">
        <div className="flex flex-col justify-start">
          <p className="font-bold text-3xl text-left">Our Courses</p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="bg-white h-[50px] rounded-md p-3">View All</button>
      </div>

      {/* Cards */}
      <div className="bg-white w-full mb-5 rounded-xl p-7 flex flex-col">
        <img src="/Untitled1.png" alt="" className="rounded-md mb-6" />
        <div className="flex flex-row mb-3">
          <button className="bg-white rounded-lg border-2 p-2 mr-2">
            4 Weeks
          </button>
          <button className="bg-white rounded-lg border-2 p-2">
            For Beginners
          </button>
        </div>
        <p className="mb-6 font-medium">By John Smith</p>
        <p className="text-xl font-bold mb-3">Web Design Fundamentals</p>
        <p className="mb-8">
          Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create visually
          appealing and user-friendly websites.
        </p>
        <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
      </div>

      <div className="bg-white w-full mb-5 rounded-xl p-7 flex flex-col">
        <img src="/Untitled2.png" alt="" className="rounded-md mb-6" />
        <div className="flex flex-row mb-3">
          <button className="bg-white rounded-lg border-2 p-2 mr-2">
            6 Weeks
          </button>
          <button className="bg-white rounded-lg border-2 p-2">
            Intermediate
          </button>
        </div>
        <p className="mb-6 font-medium">By Emily Johnson</p>
        <p className="text-xl font-bold mb-3">UI/UX Design</p>
        <p className="mb-8">
          Master the art of creating intuitive user interfaces (UI) and
          enhancing user experiences (UX). Learn design principles, wireframing,
          prototyping, and usability testing techniques.
        </p>
        <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
      </div>

      <div className="bg-white w-full mb-5 rounded-xl p-7 flex flex-col">
        <img src="/Untitled3.png" alt="" className="rounded-md mb-6" />
        <div className="flex flex-row mb-3">
          <button className="bg-white rounded-lg border-2 p-2 mr-2">
            6 Weeks
          </button>
          <button className="bg-white rounded-lg border-2 p-2">
            Intermediate
          </button>
        </div>
        <p className="mb-6 font-medium">By David Brown</p>
        <p className="text-xl font-bold mb-3">Mobile App Development</p>
        <p className="mb-8">
          Dive into the world of mobile app development. Learn to build native
          iOS and Android applications using industry-leading frameworks like
          Swift and Kotlin.
        </p>
        <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
      </div>

      <div className="bg-white w-full mb-5 rounded-xl p-7 flex flex-col">
        <img src="/Untitled4.png" alt="" className="rounded-md mb-6" />
        <div className="flex flex-row mb-3">
          <button className="bg-white rounded-lg border-2 p-2 mr-2">
            8 Weeks
          </button>
          <button className="bg-white rounded-lg border-2 p-2">
            Beginners
          </button>
        </div>
        <p className="mb-6 font-medium">By Sarah Thompson</p>
        <p className="text-xl font-bold mb-3">Graphic Design for Beginners</p>
        <p className="mb-8">
          Discover the fundamentals of graphic design, including typography,
          color theory, layout design, and image manipulation techniques. Create
          visually stunning designs for print and digital media.
        </p>
        <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
      </div>

      <div className="bg-white w-full mb-5 rounded-xl p-7 flex flex-col">
        <img src="/Untitled5.png" alt="" className="rounded-md mb-6" />
        <div className="flex flex-row mb-3">
          <button className="bg-white rounded-lg border-2 p-2 mr-2">
            10 Weeks
          </button>
          <button className="bg-white rounded-lg border-2 p-2">
            Intermediate
          </button>
        </div>
        <p className="mb-6 font-medium">By Michael Adams</p>
        <p className="text-xl font-bold mb-3">Front-End Web Development</p>
        <p className="mb-8">
          Become proficient in front-end web development. Learn HTML, CSS,
          JavaScript, and popular frameworks like Bootstrap and React. Build
          interactive and responsive websites.
        </p>
        <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
      </div>
    </div>
  );
}
