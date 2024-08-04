import React from "react";
import Divider from "../components/divider/Divider";
import Email from "../svg/Email";
import FaceBook from "../svg/FaceBook";
import LinkedIn from "../svg/LinkedIn";
import LocationIcon from "../svg/Location";
import Phone from "../svg/Phone";
import Twiter from "../svg/Twiter";

export default function ContactUs() {
  return (
    <div>
      <div className="xl:grid xl:grid-cols-2">
        <p className="text-3xl font-bold mb-4">Contact Us</p>
        <p className="text-sm mb-7">
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
      <Divider />
      <div className="bg-white pb-7 border-2 rounded-md mt-7 lg:flex lg:flex-row">
        <form id="form1" className="flex flex-col mb-6 p-7 lg:w-4/6">
          <label htmlFor="fname" className="font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your Name"
            className="p-5 border-2 rounded-lg bg-[#FCFCFD] mb-5 w-full"
          />
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
            Phone
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter Phone Number"
            className="p-5 border-2 rounded-lg bg-[#FCFCFD] mb-5"
          />
          <label htmlFor="fname" className="font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your Subject"
            className="p-5 border-2 rounded-lg bg-[#FCFCFD] mb-5"
          />
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-7"
            placeholder="Enter your Message here..."
          ></textarea>
          <input
            type="submit"
            value="Send Your Message"
            className="bg-[#FF9500] py-4 px-5 rounded-md w-full "
          />
        </form>
        <Divider style="lg:hidden" />
        <Divider variant="vertical" style="max-lg:hidden h-full" />
        <div className="flex  flex-col justify-stretch p-7 lg:p-10 xl:p-16 lg:w-2/6 ">
          <div className="bg-[#FCFCFD] flex flex-col items-center border-2 rounded-md p-7 mb-5  ">
            <button className="bg-[#F7F7F8] border-2 rounded-md p-3 mb-4">
              <Email />
            </button>
            <p className="">support@skillbridge.com</p>
          </div>
          <div className="bg-[#FCFCFD] flex flex-col items-center border-2 rounded-md p-7 mb-5 ">
            <button className="bg-[#F7F7F8] border-2 rounded-md p-3 mb-4">
              <Phone />
            </button>
            <p className="">+91 00000 00000</p>
          </div>
          <div className="bg-[#FCFCFD] flex flex-col items-center border-2 rounded-md p-7 mb-5 ">
            <button className="bg-[#F7F7F8] border-2 rounded-md p-3 mb-4">
              <LocationIcon />
            </button>
            <p className="">Some Where in the World</p>
          </div>
          <div className="bg-[#FCFCFD] flex flex-col items-center border-2 rounded-md p-7 mb-5 ">
            <div className="flex flex-row gap-2">
              <button className="bg-[#F7F7F8] border-2 rounded-md p-3 mb-4">
                <FaceBook />
              </button>
              <button className="bg-[#F7F7F8] border-2 rounded-md p-3 mb-4">
                <Twiter />
              </button>
              <button className="bg-[#F7F7F8] border-2 rounded-md p-3 mb-4">
                <LinkedIn />
              </button>
            </div>
            <p className="">Social Profiles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
