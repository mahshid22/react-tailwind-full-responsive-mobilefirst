import React from "react";
import Divider from "../components/divider/Divider";
import Close from "../svg/Close";
import Plus from "../svg/Plus";
import RightArrow from "../svg/RightArrow";
import Tick from "../svg/Tick";

export default function Pricing() {
  return (
    <>
      {/* Our Pricing */}
      <div className="flex flex-col mb-10 md:flex md:flex-row w-full md:justify-between md:items-center">
        <div className="flex flex-col justify-start md:max-lg::max-w-[450px]">
          <p className="font-bold text-3xl text-left">Our Pricing</p>
          <p className="mb-5 md:max-w-[500px] md:pr-3">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Divider style="mb-12 md:hidden"/>
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
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
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

            <div className="flex flex-col items-center rounded-xl border-2 border-[#F1F1F3] p-6  mb-5">
              <div className="flex flex-row items-center w-full justify-between">
                <p className="c">
                  What kind of support can I expect from instructors?
                </p>
                <div className="bg-[#FFF4E5] p-2 mr-2 rounded">
                  <Plus />
                </div>
              </div>
              <div className="flex flex-col"></div>
            </div>
            <div className="flex flex-col items-center rounded-xl border-2 border-[#F1F1F3] p-6  mb-5">
              <div className="flex flex-row items-center w-full justify-between">
                <p className="c">
                  Are the courses self-paced or do they have specific start and
                  end dates?
                </p>
                <div className="bg-[#FFF4E5] p-2 mr-2 rounded">
                  <Plus />
                </div>
              </div>
              <div className="flex flex-col"></div>
            </div>
            <div className="flex flex-col items-center rounded-xl border-2 border-[#F1F1F3] p-6  mb-5">
              <div className="flex flex-row items-center w-full justify-between">
                <p className="c">
                  Are there any prerequisites for the courses?
                </p>
                <div className="bg-[#FFF4E5] p-2 mr-2 rounded">
                  <Plus />
                </div>
              </div>
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
