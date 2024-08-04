import React, { useState } from "react";
import Divider from "../divider/Divider";

 type Data ={
  src: string
  name: string
}
interface ISlide {
  index: number;
  data: Data ;
  currentIndex: number;
}
export default function CardSlideShow(props: ISlide) {
  const { index, data, currentIndex } = props;
  console.log("🚀 ~ CardSlideShow ~ src:", data);
  console.log("🚀 ~ CardSlideShow ~ index:", index);

  return (
    <div className={`bg-white mb-5 ${index===currentIndex ? '' : 'hidden'}`}>
      <p className="text-sm p-10">
        The web design course provided a solid foundation for me. The
        instructors were knowledgeable and supportive, and the interactive
        learning environment was engaging. I highly recommend it!
      </p>
      <Divider />
      <div className="flex flex-row justify-between py-5 px-10">
        <div className="flex flex-row justify-center items-center">
          <img src={data.src} alt="" className="w-12 h-12 rounded-md mr-2" />
          <p className="">{data.name}</p>
        </div>
        <button className="bg-[#F1F1F3] p-3 rounded-md flex flex-row justify-center items-center">
          Read Full Story
        </button>
      </div>
    </div>
  );
}
