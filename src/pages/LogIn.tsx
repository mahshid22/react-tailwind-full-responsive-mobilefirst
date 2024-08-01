import React from "react";
import Divider from "../components/divider/Divider";
import Google from "../svg/Google";
import LeftArrow from "../svg/LeftArrow";
import RightArrow from "../svg/RightArrow";

export default function LogIn() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 ">
      <div className="bg-white p-7 mb-12 lg:order-last">
        <p className="text-3xl font-bold mb-2">Login</p>
        <p className="text-sm mb-7">
          Welcome back! Please log in to access your account.
        </p>
        <form id="form1" className="flex flex-col mb-6">
          <label htmlFor="fname" className="font-medium mb-2">
            Email
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your Email"
            className="p-5 border-2 rounded-lg bg-[#FCFCFD] mb-5"
          />
          <label htmlFor="fname" className="font-medium mb-2">
            Password
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your Password"
            className="p-5 border-2 rounded-lg bg-[#FCFCFD] mb-2"
          />
          <p className="text-right text-sm">Forgot Password?</p>
          <div className="flex flex-row mb-5">
            <input
              className="text-violet-500 focus:ring-violet-300 border-red-700 peer rounded-lg w-6 h-6 mr-2"
              id="custom-checkbox"
              name="custom-checkbox"
              type="checkbox"
              value="custom-checkbox"
            />
            <label className=" cursor-pointer  " htmlFor="custom-checkbox">
              Remember Me
            </label>
          </div>

          <input
            type="submit"
            value="Submit"
            className="bg-[#FF9500] py-4 px-5 rounded-md w-full "
          />
        </form>
        <div className="flex flex-row mb-4">
          <div className=" w-2/4">
            <Divider />
          </div>
          <p className="text-lg text-[#98989A] text-center px-1">OR</p>
          <div className=" w-2/4">
            <Divider />
          </div>
        </div>
        <button className="bg-[#F1F1F3] py-3 rounded-md flex flex-row justify-center items-center w-full p-4 mb-6">
          <Google />
          <p className="pl-2">Login with Google</p>
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <span className="font-medium cursor-pointer">
            <a>Sign Up</a>
          </span>
        </p>
      </div>
      <div className="c">
        <div className="mb-10">
          <p className="font-bold text-3xl mb-1">Students Testimonials</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="c">
          <div className="bg-white p-7 mb-5">
            <p className="text-sm">
              The web design course provided a solid foundation for me. The
              instructors were knowledgeable and supportive, and the interactive
              learning environment was engaging. I highly recommend it!
            </p>
            <Divider />
            <div className="flex flex-row justify-between p-5">
              <div className="flex flex-row justify-center items-center">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-12 h-12 rounded-md mr-2"
                />
                <p className="">Sarah L</p>
              </div>
              <button className="bg-[#F1F1F3] p-3 rounded-md flex flex-row justify-center items-center">
                Read Full Story
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-row items-center">
              <button className="bg-white p-3 rounded-md flex flex-row justify-center items-center mr-2">
                <LeftArrow />
              </button>
              <button className="bg-white p-3 rounded-md flex flex-row justify-center items-center">
                <RightArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
