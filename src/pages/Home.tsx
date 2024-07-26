import React from "react";
import Adobe from "../svg/Adobe";
import Amazon from "../svg/Amazon";
import Arrow from "../svg/Arrow";
import Close from "../svg/Close";
import Email from "../svg/Email";
import FaceBook from "../svg/FaceBook";
import LinkedIn from "../svg/LinkedIn";
import LocationIcon from "../svg/Location";
import Netflix from "../svg/Netflix";
import Phone from "../svg/Phone";
import Plus from "../svg/Plus";
import RightArrow from "../svg/RightArrow";
import Spotify from "../svg/Spotify";
import Tick from "../svg/Tick";
import Twiter from "../svg/Twiter";
import Zapier from "../svg/Zapier";
import Zoom from "../svg/Zoom";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F1F1F3] text-black">
      <div className="bg-[#F1F1F3]  h-[100%] flex flex-col items-center justify-center text-black p-3 md:p-10 lg:p-20">
        {/* banner */}
        <div className="flex items-center justify-center bg-[#FF9500] rounded-lg p-4 text-center text-sm	w-full">
          {/* <img src="/icons/speaker.png" className="w-[15px]" /> */}
          <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
          <img
            src="/icons/arrow.png"
            className="object-cover h-[15px] w-[15px] self-end"
          />
        </div>
        {/* menu */}
        <div className="flex items-center justify-end w-full mt-3 md:justify-between">
          <div className="max-md:hidden flex">
            <img
              src="/logo.png"
              alt=""
              className="w-[45px] h-[45px] rounded-md"
            />
            <button className="p-3 rounded-md bg-[#c9bcbc] md:mx-2 lg:mx-7">
              Home
            </button>
            <button className="md:mx-2 lg:mx-7">Contact</button>
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
          <img
            src="/icons/menu.png"
            className="w-[35px] h-[35px] ml-5 md:hidden"
          />
        </div>
        <hr className="w-full h-[2px] mt-4 bg-gray-200 border-1 dark:bg-gray-700" />

        {/* titre */}
        <div className="bg-white h-16 flex justify-center items-center mt-11 rounded-lg max-md:w-full md:w-[643px]">
          <p className="text-base font-bold	">
            <span className="text-[#FF9500]">Unlock</span> Your Creative
            Potential
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
          className="w-full mt-8 mb-12 rounded-xl "
        />

        {/* Benefits */}
        <div className="flex flex-col mb-10 md:flex md:flex-row w-full md:justify-between">
          <div className="flex flex-col justify-start md:max-w-[500px]">
            <p className="font-bold text-3xl text-left md:hidden">Benefits</p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="bg-white h-[50px] rounded-md p-3">View All</button>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch lg:justify-around lg:px-0 mb-10">
          <div className="bg-white min-h-[293px]   rounded-xl p-7 flex flex-col">
            <p className="text-4xl font-bold text-right mb-6">01</p>
            <p className="text-xl font-bold mb-3">Flexible Learning Schedule</p>
            <p className="mb-8">
              Fit your coursework around your existing commitments and
              obligations.
            </p>
            <button className="bg-[#F1F1F3] p-2 self-end rounded-md border-2">
              <Arrow />
            </button>
          </div>
          <div className="bg-white min-h-[293px]   rounded-xl p-7 flex flex-col ">
            <p className="text-4xl font-bold text-right mb-6">02</p>
            <p className="text-xl font-bold mb-3">Expert Instruction</p>
            <p className="mb-8">
              Learn from industry experts who have hands-on experience in design
              and development.
            </p>
            <button className="bg-[#F1F1F3] p-2 self-end rounded-md border-2">
              <Arrow />
            </button>
          </div>
          <div className="bg-white min-h-[293px]   rounded-xl p-7 flex flex-col ">
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
          <div className="bg-white min-h-[293px]   rounded-xl p-7 flex flex-col ">
            <p className="text-4xl font-bold text-right mb-6">04</p>
            <p className="text-xl font-bold mb-3">Updated Curriculum</p>
            <p className="mb-8">
              Access courses with up-to-date content reflecting the latest
              trends and industry practices.
            </p>
            <button className="bg-[#F1F1F3] p-2 self-end rounded-md border-2">
              <Arrow />
            </button>
          </div>
          <div className="bg-white min-h-[293px]   rounded-xl p-7 flex flex-col">
            <p className="text-4xl font-bold text-right mb-6">04</p>
            <p className="text-xl font-bold mb-3">Updated Curriculum</p>
            <p className="mb-8">
              Access courses with up-to-date content reflecting the latest
              trends and industry practices.
            </p>
            <button className="bg-[#F1F1F3] p-2 self-end rounded-md border-2">
              <Arrow />
            </button>
          </div>
        </div>

        {/* Our Courses */}
        <div className="flex flex-col mb-10 md:flex md:flex-row w-full md:justify-between md:items-center">
          <div className="flex flex-col justify-start md:max-w-[500px]">
            <p className="font-bold text-3xl text-left mb-3 ">Our Courses</p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="bg-white h-[50px] rounded-md p-3">View All</button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch lg:justify-around  lg:px-0 mb-10">
          <div className="bg-white  mb-5 rounded-xl p-7 flex flex-col ">
            <img src="/Untitled1.png" alt="" className="rounded-md mb-6" />
            <div className="lg:flex lg:fle-row lg:justify-between lg:items-center lg:mb-3">
              <div className="flex flex-row mb-3 lg:mb-0">
                <button className="bg-white rounded-lg border-2 p-2 mr-2">
                  4 Weeks
                </button>
                <button className="bg-white rounded-lg border-2 p-2">
                  For Beginners
                </button>
              </div>
              <p className="mb-6 lg:mb-0 font-medium">By John Smith</p>
            </div>
            <p className="text-xl font-bold mb-3">Web Design Fundamentals</p>
            <p className="mb-8">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
          </div>

          <div className="bg-white  mb-5 rounded-xl p-7 flex flex-col">
            <img src="/Untitled2.png" alt="" className="rounded-md mb-6" />
            <div className="lg:flex lg:fle-row lg:justify-between lg:items-center lg:mb-3">
              <div className="flex flex-row mb-3 lg:mb-0">
                <button className="bg-white rounded-lg border-2 p-2 mr-2">
                  6 Weeks
                </button>
                <button className="bg-white rounded-lg border-2 p-2">
                  Intermediate
                </button>
              </div>
              <p className="mb-6 lg:mb-0 font-medium">By Emily Johnson</p>
            </div>
            <p className="text-xl font-bold mb-3">UI/UX Design</p>
            <p className="mb-8">
              Master the art of creating intuitive user interfaces (UI) and
              enhancing user experiences (UX). Learn design principles,
              wireframing, prototyping, and usability testing techniques.
            </p>
            <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
          </div>

          <div className="bg-white  mb-5 rounded-xl p-7 flex flex-col">
            <img src="/Untitled3.png" alt="" className="rounded-md mb-6" />
            <div className="lg:flex lg:fle-row lg:justify-between lg:items-center lg:mb-3">
              <div className="flex flex-row mb-3 lg:mb-0">
                <button className="bg-white rounded-lg border-2 p-2 mr-2">
                  6 Weeks
                </button>
                <button className="bg-white rounded-lg border-2 p-2">
                  Intermediate
                </button>
              </div>
              <p className="mb-6 lg:mb-0 font-medium">By David Brown</p>
            </div>
            <p className="text-xl font-bold mb-3">Mobile App Development</p>
            <p className="mb-8">
              Dive into the world of mobile app development. Learn to build
              native iOS and Android applications using industry-leading
              frameworks like Swift and Kotlin.
            </p>
            <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
          </div>

          <div className="bg-white  mb-5 rounded-xl p-7 flex flex-col">
            <img src="/Untitled4.png" alt="" className="rounded-md mb-6" />
            <div className="lg:flex lg:fle-row lg:justify-between lg:items-center lg:mb-3">
              <div className="flex flex-row mb-3 lg:mb-0">
                <button className="bg-white rounded-lg border-2 p-2 mr-2">
                  8 Weeks
                </button>
                <button className="bg-white rounded-lg border-2 p-2">
                  Beginners
                </button>
              </div>
              <p className="mb-6 lg:mb-0 font-medium">By Sarah Thompson</p>
            </div>
            <p className="text-xl font-bold mb-3">
              Graphic Design for Beginners
            </p>
            <p className="mb-8">
              Discover the fundamentals of graphic design, including typography,
              color theory, layout design, and image manipulation techniques.
              Create visually stunning designs for print and digital media.
            </p>
            <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
          </div>

          <div className="bg-white  mb-5 rounded-xl p-7 flex flex-col ">
            <img src="/Untitled5.png" alt="" className="rounded-md mb-6" />
            <div className="lg:flex lg:fle-row lg:justify-between lg:items-center lg:mb-3">
              <div className="flex flex-row mb-3 lg:mb-0">
                <button className="bg-white rounded-lg border-2 p-2 mr-2">
                  10 Weeks
                </button>
                <button className="bg-white rounded-lg border-2 p-2">
                  Intermediate
                </button>
              </div>
              <p className="mb-6 lg:mb-0 font-medium">By Michael Adams</p>
            </div>
            <p className="text-xl font-bold mb-3">Front-End Web Development</p>
            <p className="mb-8">
              Become proficient in front-end web development. Learn HTML, CSS,
              JavaScript, and popular frameworks like Bootstrap and React. Build
              interactive and responsive websites.
            </p>
            <button className="bg-[#F1F1F3] py-3 rounded-md">Get it Now</button>
          </div>
        </div>

        {/* Our Testimonials */}
        <div className="flex flex-col mb-10 md:flex md:flex-row w-full md:justify-between md:items-center">
          <div className="flex flex-col justify-start md:max-w-[500px]">
            <p className="font-bold text-3xl text-left mb-3">
              Our Testimonials
            </p>
            <p className="mb-5 md:max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="bg-white h-[50px] rounded-md p-3">View All</button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-10">
          <div className="bg-white  rounded-xl p-7 flex flex-col">
            <p className="mb-8">
              The web design course provided a solid foundation for me. The
              instructors were knowledgeable and supportive, and the interactive
              learning environment was engaging. I highly recommend it!
            </p>
            <hr className="w-full h-[2px] mt-4 bg-gray-200 border-1 dark:bg-gray-700" />
            <div className="flex flex-row  justify-between items-center mt-5">
              <div className="flex flex-row items-center">
                <img
                  src="/avatars/Untitled.png"
                  alt=""
                  className="w-[50px] h-[50px] rounded-md mr-2"
                />
                <p className="font-bold">Sarah L</p>
              </div>
              <button className="py-4 px-5 rounded-md border-2 bg-[#F1F1F3] ">
                Read Full Story
              </button>
            </div>
          </div>

          <div className="bg-white  rounded-xl p-7 flex flex-col">
            <p className="mb-8">
              The UI/UX design course exceeded my expectations. The instructor's
              expertise and practical assignments helped me improve my design
              skills. I feel more confident in my career now. Thank you!
            </p>
            <hr className="w-full h-[2px] mt-4 bg-gray-200 border-1 dark:bg-gray-700" />
            <div className="flex flex-row  justify-between items-center mt-5">
              <div className="flex flex-row items-center">
                <img
                  src="/avatars/Untitled2.png"
                  alt=""
                  className="w-[50px] h-[50px] rounded-md mr-2"
                />
                <p className="font-bold">Jason M</p>
              </div>
              <button className="py-4 px-5 rounded-md border-2 bg-[#F1F1F3] ">
                Read Full Story
              </button>
            </div>
          </div>

          <div className="bg-white  rounded-xl p-7 flex flex-col">
            <p className="mb-8">
              The mobile app development course was fantastic! The step-by-step
              tutorials and hands-on projects helped me grasp the concepts
              easily. I'm now building my own app. Great course!
            </p>
            <hr className="w-full h-[2px] mt-4 bg-gray-200 border-1 dark:bg-gray-700" />
            <div className="flex flex-row  justify-between items-center mt-5">
              <div className="flex flex-row items-center">
                <img
                  src="/avatars/Untitled3.png"
                  alt=""
                  className="w-[50px] h-[50px] rounded-md mr-2"
                />
                <p className="font-bold">Emily R</p>
              </div>
              <button className="py-4 px-5 rounded-md border-2 bg-[#F1F1F3] ">
                Read Full Story
              </button>
            </div>
          </div>
        </div>

        {/* Our Pricing */}
        <div className="flex flex-col mb-10 md:flex md:flex-row w-full md:justify-between md:items-center">
          <div className="flex flex-col justify-start md:max-lg::max-w-[450px]">
            <p className="font-bold text-3xl text-left">Our Pricing</p>
            <p className="mb-5 md:max-w-[500px] md:pr-3">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="flex items-center justify-center bg-white w-[220px] p-3 self-center rounded-lg mb-10 md:mb-0">
            <button className="bg-[#FF9500] h-[50px] rounded-md px-6 py-3">
              Monthly
            </button>
            <button className="bg-white h-[50px] rounded-md p-3">Yearly</button>
          </div>
        </div>

        {/* cards */}
        <div className="md:flex md:flex-row lg:w-full">
          <div className="bg-white w-full mb-5 rounded-xl md:rounded-none p-7 flex flex-col">
            <div className="bg-[#F1F1F3] w-full  rounded-xl p-7 flex flex-col">
              <button className="bg-[#FFF9F0] rounded-md border-2 border-[#FFEACC] py-2 font-medium">
                Free Plan
              </button>
              <div className="flex justify-center items-center self-center mb-7">
                <p className="font-bold text-5xl">$0</p>
                <p className="text-sm pl-1">/mounth</p>
              </div>
              <div className="bg-white w-full rounded-t-lg p-7 flex flex-col items-center min-h-[666px]">
                <p className="text-lg font-medium mb-5">Available Features</p>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">Access to selected free courses.</p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">
                    Limited course materials and resources.
                  </p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">Basic community support..</p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">No certification upon completion.</p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">Ad-supported platform.</p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">
                    Access to exclusive Pro Plan community forums.
                  </p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">
                    Early access to new courses and updates.
                  </p>
                </div>
              </div>
              <button className="bg-[#FF9500] rounded-b-lg py-4 font-bold text-md text-white">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-white w-full mb-5 rounded-xl md:rounded-none p-7 flex flex-col">
            <div className="bg-[#F1F1F3] w-full  rounded-xl p-7 flex flex-col">
              <button className="bg-[#FFF9F0] rounded-md border-2 border-[#FFEACC] py-2 font-medium">
                Pro Plan
              </button>
              <div className="flex justify-center items-center self-center mb-7">
                <p className="font-bold text-5xl">$79</p>
                <p className="text-sm pl-1">/mounth</p>
              </div>
              <div className="bg-white w-full rounded-t-lg p-7 flex flex-col items-center min-h-[666px]">
                <p className="text-lg font-medium mb-5">Available Features</p>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">Unlimited access to all courses.</p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">
                    Unlimited course materials and resources.
                  </p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">Priority support from instructors.</p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">Course completion certificates.</p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">Ad-free experience.</p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">
                    Access to exclusive Pro Plan community forums.
                  </p>
                </div>
                <div className="bg-white w-full rounded-xl p-3 flex flex-row items-start border-2 border-[#F1F1F3] mb-5">
                  <div className="bg-[#FFF4E5] p-1 mr-2 rounded">
                    <Tick />
                  </div>
                  <p className="text-sm">
                    Early access to new courses and updates.
                  </p>
                </div>
              </div>
              <button className="bg-[#FF9500] rounded-b-lg py-4 font-bold text-md text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-white w-full mb-5 rounded-xl p-7 flex flex-col">
          <div className="lg:flex lg:flex-row lg:justify-between">
            <div className="lg:w-[35%] ">
              <p className="font-bold text-3xl mb-2">
                Frequently Asked Questions
              </p>
              <p className="text-sm mb-5">
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
              <button className="rounded-md border-2 border-[#F1F1F3] p-3 mb-10">
                See All FAQ’s
              </button>
            </div>
            <div className="lg:w-[55%] ">
              <div className="flex flex-col items-center rounded-xl border-2 border-[#F1F1F3] p-6 mb-5">
                <div className="flex flex-row items-start w-full justify-between">
                  <p className="c">Can I enroll in multiple courses at once?</p>
                  <div className="bg-[#FFF4E5] p-2 mr-2 rounded">
                    <Close />
                  </div>
                </div>
                <div className="flex flex-col">
                  <hr className="w-full h-[2px] my-5 bg-gray-200 border-1 dark:bg-gray-700" />
                  <p className="text-sm mb-5">
                    Absolutely! You can enroll in multiple courses
                    simultaneously and access them at your convenience.
                  </p>
                  <div className="bg-[#F7F7F8] flex justify-between items-center py-3 px-5 rounded-md">
                    <p className="pr-3">
                      Enrollment Process for Different Courses
                    </p>
                    <div className="bg-white  rounded-full flex p-2 items-center">
                      <RightArrow />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-[#F1F1F3] p-6">
                <div className="flex flex-row items-center w-full justify-between">
                  <p className="c">Can I enroll in multiple courses at once?</p>
                  <div className="bg-[#FFF4E5] p-2 mr-2 rounded">
                    <Plus />
                  </div>
                </div>
                <div className="flex flex-col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-white w-full mt-12 pt-12 px-5 lg:flex lg:flex-row">
        <div className="lg:w-[40%]">
          <div className="flex mb-3">
            <Email />
            <p className="text-sm text-black ml-2">hello@skillbridge.com</p>
          </div>
          <div className="flex mb-3">
            <Phone />
            <p className="text-sm text-black ml-2">+91 91813 23 2309</p>
          </div>
          <div className="flex mb-3">
            <LocationIcon />
            <p className="text-sm text-black ml-2">Somewhere in the World</p>
          </div>
        </div>

        <div className="flex text-black mb-6">
          <div className="mr-20 flex flex-col lg:min-w-[200px] lg:mr-2">
            <p className="font-bold text-lg text-black mb-2">Home</p>
            <p className="text-sm">Benefits</p>
            <p className="text-sm">Our Courses</p>
            <p className="text-sm">Our Testimonials</p>
            <p className="text-sm">Our FAQ</p>
          </div>
          <div className="flex flex-col lg:min-w-[249px]">
            <p className="font-bold text-lg text-black">About Us</p>
            <p className="text-sm">Company</p>
            <p className="text-sm">Achievements</p>
            <p className="text-sm">Our Goals</p>
          </div>
        </div>
        <div className="c">
          <div className="font-bold text-lg mb-3">Social Profiles</div>
          <div className="flex mb-5">
            <button className="p-3 rounded-md bg-[#F7F7F8] border-[#F1F1F3] border-2 mr-2">
              <FaceBook />
            </button>
            <button className="p-3 rounded-md bg-[#F7F7F8] border-[#F1F1F3] border-2 mr-2">
              <Twiter />
            </button>
            <button className="p-3 rounded-md bg-[#F7F7F8] border-[#F1F1F3] border-2">
              <LinkedIn />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
