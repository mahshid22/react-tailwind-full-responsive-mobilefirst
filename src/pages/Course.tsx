import React from "react";
import Divider from "../components/divider/Divider";

export default function Course() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-1">
        <p className="text-3xl font-bold mb-4">UI/UX Design Course</p>
        <p className="text-sm mb-7">
          Welcome to our UI/UX Design course! This comprehensive program will
          equip you with the knowledge and skills to create exceptional user
          interfaces (UI) and enhance user experiences (UX). Dive into the world
          of design thinking, wireframing, prototyping, and usability testing.
          Below is an overview of the curriculum
        </p>
      </div>
      <Divider style={"mb-16"} />
      <img src="/course/video.png" alt="" className="w-full mb-16"/>
      <div className="border-2 rounded-lg bg-white p-7 mb-5">
        <p className="font-bold text-5xl text-right mb-7">01</p>
        <p className="font-bold text-lg mb-7">Introduction to UI/UX Design</p>
        <div className="p-6 border-2 rounded-md mb-4">
          <div className="mb-6">
            <p className="font-medium text-base">
              Understanding UI/UX Design Principles
            </p>
            <p className="text-sm text-[#59595A]">Lesson 01</p>
          </div>
          <button className="bg-white rounded-lg border-2 p-2">
            45 Minutes
          </button>
        </div>
        <div className="p-6 border-2 rounded-md mb-4">
          <div className="mb-6">
            <p className="font-medium text-base">
              Importance of User-Centered Design
            </p>
            <p className="text-sm text-[#59595A]">Lesson 02</p>
          </div>
          <button className="bg-white rounded-lg border-2 p-2">1 Hour</button>
        </div>
        <div className="p-6 border-2 rounded-md mb-4">
          <div className="mb-6">
            <p className="font-medium text-base">
              The Role of UI/UX Design in Product Development
            </p>
            <p className="text-sm text-[#59595A]">Lesson 03</p>
          </div>
          <button className="bg-white rounded-lg border-2 p-2">
            45 Minutes
          </button>
        </div>
      </div>
      <div className="border-2 rounded-lg bg-white p-7 mb-5">
        <p className="font-bold text-5xl text-right mb-7">02</p>
        <p className="font-bold text-lg mb-7">User Research and Analysis</p>
        <div className="p-6 border-2 rounded-md mb-4">
          <div className="mb-6">
            <p className="font-medium text-base">
              Conducting User Research and Interviews
            </p>
            <p className="text-sm text-[#59595A]">Lesson 01</p>
          </div>
          <button className="bg-white rounded-lg border-2 p-2">
            45 Minutes
          </button>
        </div>
        <div className="p-6 border-2 rounded-md mb-4">
          <div className="mb-6">
            <p className="font-medium text-base">
              Analyzing User Needs and Behavior
            </p>
            <p className="text-sm text-[#59595A]">Lesson 02</p>
          </div>
          <button className="bg-white rounded-lg border-2 p-2">1 Hour</button>
        </div>
        <div className="p-6 border-2 rounded-md mb-4">
          <div className="mb-6">
            <p className="font-medium text-base">
              Creating User Personas and Scenarios
            </p>
            <p className="text-sm text-[#59595A]">Lesson 03</p>
          </div>
          <button className="bg-white rounded-lg border-2 p-2">
            45 Minutes
          </button>
        </div>
      </div>
    </>
  );
}
