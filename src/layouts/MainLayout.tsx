import React from "react";
import { Outlet } from "react-router-dom";
import Divider from "../components/divider/Divider";
import Footer from "../components/fotter/Footer";
import Banner from "../components/header/Banner";
import Menue from "../components/header/Menue";

export default function MainLayout() {
  return (
    <div className="flex flex-col bg-[#F1F1F3] text-black">
      <div className="bg-[#F1F1F3]  h-[100%] flex flex-col items-center justify-center text-black p-3 md:p-10 lg:p-20 lg:pt-5">
        {/* banner */}
        <Banner />
        {/* menu */}
        <Menue />
        <Divider style={'mb-10 lg:mb-20'}/>
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
