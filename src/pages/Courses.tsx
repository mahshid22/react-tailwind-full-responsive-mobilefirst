import React from "react";
import Divider from "../components/divider/Divider";

export default function Courses() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-1">
        <p className="text-3xl font-bold mb-4">
          Online Courses on Design and Development
        </p>
        <p className="text-sm mb-7">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <Divider style={"mb-16"} />
      <div className="w-full bg-white p-6 rounded-lg mb-6">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="c">
            <p className="text-lg font-bold mb-2">Web Design Fundamentals</p>
            <p className="text-sm mb-5">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
          </div>
          <button className="py-4 px-5 rounded-md border-2 bg-[#F1F1F3] mb-6">
            View Course
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:gap-5 mb-6">
          <img src="/course/Untitled.png" alt="" className="rounded-md" />
          <img src="/course/Untitled2.png" alt="" className="rounded-md" />
          <img src="/course/Untitled3.png" alt="" className="rounded-md" />
        </div>
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
        <div className=" border-2 border-[#F1F1F3] rounded-xl lg:mb-10">
          <p className="my-4 mx-5 text-base font-bold">Curriculum</p>
          <Divider style={"mb-6"} />
          <div className="px-5 mb-6 lg:hidden">
            <div>
              <p className="font-bold text-3xl">01</p>
              <p className="text-sm">Introduction to HTML</p>
            </div>
            <Divider style={"mb-5"} />
            <div>
              <p className="font-bold text-3xl">02</p>
              <p className="text-sm">Styling with CSS</p>
            </div>
            <Divider style={"mb-5"} />
            <div>
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm">Introduction to Responsive Design</p>
            </div>
          </div>
          <div className="px-5 mb-6 max-lg:hidden lg:flex lg:flex-row lg:justify-center">
            <div className="w-60">
              <p className="font-bold text-3xl">01</p>
              <p className="text-sm w-[85%]">Introduction to HTML</p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">02</p>
              <p className="text-sm w-[85%]">Styling with CSS</p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6 rounded-lg mb-6">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="c">
            <p className="text-lg font-bold mb-2">UI/UX Design</p>
            <p className="text-sm mb-5">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
          </div>
          <button className="py-4 px-5 rounded-md border-2 bg-[#F1F1F3] mb-6">
            View Course
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:gap-5 mb-6">
          <img src="/course/Untitled.png" alt="" className="rounded-md" />
          <img src="/course/Untitled2.png" alt="" className="rounded-md" />
          <img src="/course/Untitled3.png" alt="" className="rounded-md" />
        </div>
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
        <div className=" border-2 border-[#F1F1F3] rounded-xl lg:mb-10">
          <p className="my-4 mx-5 text-base font-bold">Curriculum</p>
          <Divider style={"mb-6"} />
          <div className="px-5 mb-6 lg:hidden">
            <div>
              <p className="font-bold text-3xl">01</p>
              <p className="text-sm">Introduction to HTML</p>
            </div>
            <Divider style={"mb-5"} />
            <div>
              <p className="font-bold text-3xl">02</p>
              <p className="text-sm">Styling with CSS</p>
            </div>
            <Divider style={"mb-5"} />
            <div>
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm">Introduction to Responsive Design</p>
            </div>
          </div>
          <div className="px-5 mb-6 max-lg:hidden lg:flex lg:flex-row lg:justify-center">
            <div className="w-60">
              <p className="font-bold text-3xl">01</p>
              <p className="text-sm w-[85%]">Introduction to HTML</p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">02</p>
              <p className="text-sm w-[85%]">Styling with CSS</p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6 rounded-lg mb-6">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="c">
            <p className="text-lg font-bold mb-2">Mobile App Development</p>
            <p className="text-sm mb-5">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
          </div>
          <button className="py-4 px-5 rounded-md border-2 bg-[#F1F1F3] mb-6">
            View Course
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:gap-5 mb-6">
          <img src="/course/Untitled.png" alt="" className="rounded-md" />
          <img src="/course/Untitled2.png" alt="" className="rounded-md" />
          <img src="/course/Untitled3.png" alt="" className="rounded-md" />
        </div>
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
        <div className=" border-2 border-[#F1F1F3] rounded-xl lg:mb-10">
          <p className="my-4 mx-5 text-base font-bold">Curriculum</p>
          <Divider style={"mb-6"} />
          <div className="px-5 mb-6 lg:hidden">
            <div>
              <p className="font-bold text-3xl">01</p>
              <p className="text-sm">Introduction to HTML</p>
            </div>
            <Divider style={"mb-5"} />
            <div>
              <p className="font-bold text-3xl">02</p>
              <p className="text-sm">Styling with CSS</p>
            </div>
            <Divider style={"mb-5"} />
            <div>
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm">Introduction to Responsive Design</p>
            </div>
          </div>
          <div className="px-5 mb-6 max-lg:hidden lg:flex lg:flex-row lg:justify-center">
            <div className="w-60">
              <p className="font-bold text-3xl">01</p>
              <p className="text-sm w-[85%]">Introduction to HTML</p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">02</p>
              <p className="text-sm w-[85%]">Styling with CSS</p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
            <Divider variant="vertical" style={"h-full"} />
            <div className="w-60 ml-4">
              <p className="font-bold text-3xl">03</p>
              <p className="text-sm w-[85%]">
                Introduction to Responsive Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
