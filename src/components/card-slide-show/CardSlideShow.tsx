import React, { useState } from "react";
import Divider from "../divider/Divider";

interface ISlide {
  index: number;
  src: string;
  currentIndex: number;
}
export default function CardSlideShow(props: ISlide) {
  const { index, src, currentIndex } = props;
  console.log("🚀 ~ CardSlideShow ~ src:", src);
  console.log("🚀 ~ CardSlideShow ~ index:", index);

  return (
    <div className={`bg-white p-7 mb-5 ${index===currentIndex ? '' : 'hidden'}`}>
      <p className="text-sm">
        The web design course provided a solid foundation for me. The
        instructors were knowledgeable and supportive, and the interactive
        learning environment was engaging. I highly recommend it!
      </p>
      <Divider />
      <div className="flex flex-row justify-between p-5">
        <div className="flex flex-row justify-center items-center">
          <img src={src} alt="" className="w-12 h-12 rounded-md mr-2" />
          <p className="">Sarah L</p>
        </div>
        <button className="bg-[#F1F1F3] p-3 rounded-md flex flex-row justify-center items-center">
          Read Full Story
        </button>
      </div>
    </div>
  );
}
