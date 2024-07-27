import React from "react";

export default function Banner() {
  return (
    <div className="flex items-center justify-center bg-[#FF9500] rounded-lg p-4 text-center text-sm	w-full">
      {/* <img src="/icons/speaker.png" className="w-[15px]" /> */}
      <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
      <img
        src="/icons/arrow.png"
        className="object-cover h-[15px] w-[15px] self-end"
      />
    </div>
  );
}
