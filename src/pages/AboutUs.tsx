import React from "react";
import Divider from "../components/divider/Divider";
import AboutusIcon from "../svg/AboutusIcon";
import Medal from "../svg/Medal";

export default function AboutUs() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-1">
        <p className="text-3xl font-bold mb-4">About Skillbridge</p>
        <p className="text-sm mb-7">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      <Divider style={"mb-16"} />
      <p className="font-medium text-2xl mb-2">Achievements</p>
      <p className="mb-12">
        Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements
      </p>

      <div className="c">
        <div className="bg-white border-2 rounded-xl flex flex-col items-start p-7 mb-5">
          <div className="bg-[#FFF9F0] border-2 border-[#FFEACC] rounded-md p-4 mb-6">
            <AboutusIcon />
          </div>
          <p className="text-2xl font-bold mb-1">Trusted by Thousands</p>
          <p className="text-sm">
            We have successfully served thousands of students, helping them
            unlock their potential and achieve their career goals.
          </p>
        </div>
        <div className="bg-white border-2 rounded-xl flex flex-col items-start p-7 mb-5">
          <div className="bg-[#FFF9F0] border-2 border-[#FFEACC] rounded-md p-4 mb-6">
            <Medal />
          </div>
          <p className="text-2xl font-bold mb-1">Award-Winning Courses</p>
          <p className="text-sm">
            Our courses have received recognition and accolades in the industry
            for their quality, depth of content, and effective teaching
            methodologies.
          </p>
        </div>
      </div>
    </div>
  );
}
