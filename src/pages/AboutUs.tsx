import React from "react";
import Divider from "../components/divider/Divider";
import AboutusIcon from "../svg/AboutusIcon";
import Battery from "../svg/Battery";
import BgLogo from "../svg/BgLogo";
import Book from "../svg/Book";
import Face from "../svg/Face";
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
      {/*  */}
      <p className="font-medium text-2xl mb-2">Achievements</p>
      <p className="mb-12">
        Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements
      </p>

      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
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
          <p className="text-2xl font-bold mb-1">Positive Student Feedback</p>
          <p className="text-sm">
            We take pride in the positive feedback we receive from our students,
            who appreciate the practicality and relevance of our course
            materials.
          </p>
        </div>
        <div className="bg-white border-2 rounded-xl flex flex-col items-start p-7 mb-5">
          <div className="bg-[#FFF9F0] border-2 border-[#FFEACC] rounded-md p-4 mb-6">
            <Face />
          </div>
          <p className="text-2xl font-bold mb-1">Award-Winning Courses</p>
          <p className="text-sm">
            At SkillBridge, our goal is to empower individuals from all
            backgrounds to thrive in the world of design and development. We
            believe that education should be accessible and transformative,
            enabling learners to pursue their passions and make a meaningful
            impact. Through our carefully crafted courses, we aim to
          </p>
        </div>
        <div className="bg-white border-2 rounded-xl flex flex-col items-start p-7 mb-5">
          <div className="bg-[#FFF9F0] border-2 border-[#FFEACC] rounded-md p-4 mb-6">
            <Medal />
          </div>
          <p className="text-2xl font-bold mb-1">Positive Student Feedback</p>
          <p className="text-sm">
            We take pride in the positive feedback we receive from our students,
            who appreciate the practicality and relevance of our course
            materials.
          </p>
        </div>
      </div>
      {/*  */}
      <p className="font-medium text-2xl mb-2">Our Goals</p>
      <p className="mb-12">
        Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements
      </p>

      <div className="lg:grid lg:grid-cols-2 lg:gap-5 mb-12">
        <div className="bg-white border-2 rounded-xl flex flex-col items-start p-7 mb-5">
          <div className="bg-[#FFF9F0] border-2 border-[#FFEACC] rounded-md p-4 mb-6">
            <Book />
          </div>
          <p className="text-2xl font-bold mb-1">
            Foster Creative Problem-Solving
          </p>
          <p className="text-sm">
            We encourage creative thinking and problem-solving abilities,
            allowing our students to tackle real-world challenges with
            confidence and innovation.
          </p>
        </div>
        <div className="bg-white border-2 rounded-xl flex flex-col items-start p-7 mb-5">
          <div className="bg-[#FFF9F0] border-2 border-[#FFEACC] rounded-md p-4 mb-6">
            <Battery />
          </div>
          <p className="text-2xl font-bold mb-1">Provide Practical Skills</p>
          <p className="text-sm">
            We focus on delivering practical skills that are relevant to the
            current industry demands. Our courses are designed to equip learners
            with the knowledge and tools needed to excel in their chosen field.
          </p>
        </div>

      </div>
        <div className="bg-white border-2 rounded-xl flex flex-col items-start p-7 mb-12 relative">
          <p className="text-3xl font-bold mb-3">
            <span className="text-[#FF9500]">Together</span>, let's shape the
            future of digital innovation
          </p>
          <p className="text-sm mb-10">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
          <div className="flex flex-row justify-between items-end">
            <button className="bg-[#FF9500] py-4 px-5 rounded-md w-fit text-white">
              Join Now
            </button>
          </div>
            <div className="absolute bottom-0 right-1 opacity-45">
              <BgLogo />
            </div>
        </div>
    </div>
  );
}
