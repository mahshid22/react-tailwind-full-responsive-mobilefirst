import React from "react";
import Email from "../../svg/Email";
import FaceBook from "../../svg/FaceBook";
import LinkedIn from "../../svg/LinkedIn";
import LocationIcon from "../../svg/Location";
import Phone from "../../svg/Phone";
import Twiter from "../../svg/Twiter";

export default function Footer() {
  return (
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
  );
}
