import React from "react";
import Navbar from "../Navbar";
import heroChart from "../../src/assets/HeroGraphics.svg";
import fluidGlu from "../../src/assets/fluid-glu.svg";
import hikkeno from "../../src/assets/hikkeno.svg";
import bubble from "../../src/assets/bubble.svg";
import blackCheck from "../../src/assets/black-check.svg";
import heroProfile from "../../src/assets/hero-profile.jpg";

function HeroSection() {
  return (
    <div className="hero z-10">
      <Navbar />
      {/* HeroSection */}
      <div className="main-hero-section px-7 lg:px-10 max-w-5xl mx-auto flex flex-col gap-y-5  items-center gap-x-10 justify-center py-10 lg:pt-24 ">
        <div className="hero-content flex flex-col max-w-2xl mx-auto gap-y-5">
          <h1 className="text-4xl md:text-5xl xl:text-[70px] leading-[1.35] md:max-w-xl md:mx-auto text-center lg:mx-0 lg:max-w-full font-semibold text-[#1A1A1A]">
            One way to your side{" "}
            <span className="text-[#EDA35E]">activity</span>
          </h1>
          <p className="text-sm font-medium text-[#1A1A1A]/80 max-w-lg mx-auto text-center">
            Squaree helps users to go from Zero to Hero with Pockets flow’s
            simple platform that helps creators like you sell their digital
            products online.
          </p>
          <div className="input-form lg:w-2/3 mx-auto py-0.5 rounded-full px-1 flex items-center justify-center lg:justify-start gap-x-1 lg:gap-x-5 ring-1 ring-[#D0D0D0] focus:ring-2 focus:ring-[#D0D0D0]">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className=" py-2 px-5 lg:py-3 placeholder:text-sm rounded-full w-full focus:outline-none"
              />
            </div>
            <button className="bg-[#EDA35E] w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-white font-semibold text-xs lg:text-base rounded-full px-4 py-2">
              Try free
            </button>
          </div>
        </div>
        {/* Features */}
        <div className="flex flex-col lg:flex-row lg:items-center max-w-5xl mx-auto py-10 lg:pb-20 justify-center gap-y-2 lg:gap-x-10">
          <div className="flex items-center gap-x-2">
            <div className="bg-[#EDA35E]/20 px-1.5 py-2 rounded-full">
              <img src={blackCheck} alt="" />
            </div>
            <p className="text-sm lg:text-base">Match your content</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="bg-[#EDA35E]/20 px-1.5 py-2 rounded-full">
              <img src={blackCheck} alt="" />
            </div>
            <p className="text-sm lg:text-base">Perfectly a side hustle</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="bg-[#EDA35E]/20 px-1.5 py-2 rounded-full">
              <img src={blackCheck} alt="" />
            </div>
            <p className="text-sm lg:text-base">Undetectable AI content</p>
          </div>
        </div>
        {/* Section of 2x faster outputs */}
        <div className="hero-image max-w-5xl mx-auto py-10 relative isolate px-10 lg:p-20 rounded-2xl">
          <div className="flex flex-col gap-y-3 lg:gap-y-10 items-center justify-center">
            <p className="text-lg lg:text-5xl">Save hundreds of hours</p>
            <h3 className="font-bold text-3xl lg:text-[88px]">
              2X faster outputs
            </h3>
          </div>
          <div className="flex items-center justify-center relative pt-20 lg:pt-14">
            <img className="h-[80%] w-[80%]" src={heroChart} alt="" />
            <div className="absolute top-5 left-0 lg:top-10 lg:left-20 bg-white shadow flex items-center gap-x-2 p-1.5 lg:p-3 rounded-lg">
              <img
                className="rounded-full w-4 h-4 lg:h-7 lg:w-7"
                src={heroProfile}
                alt=""
              />
              <p className="text-sm lg:text-base">Allison Stone</p>
            </div>
            <div className="absolute top-0 -right-[3.5rem] lg:top-10 lg:-right-24 xl:top-20 xl:-right-40 border border-slate-500/20 bg-white shadow flex flex-col items-center gap-x-2 py-3 px-5 lg:py-5 lg:px-10 rounded-lg">
              <div className="bg-[#E5E7EA]/20 px-1.5 py-2 rounded-full">
                <img
                  className="h-4 w-4 lg:h-auto lg:w-auto"
                  src={blackCheck}
                  alt=""
                />
              </div>
              <p className="text-sm lg:text-base">Revice payroll</p>
              <div className="bg-[#E5E7EA] h-2 lg:h-3 w-full mt-2 rounded-full"></div>
              <div className="bg-[#E5E7EA] h-2 lg:h-3 w-2/3 mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured-company Section */}
      <div className="testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center px-5 py-5 lg:pb-20">
        <p className="text-base text-center lg:text-xl font-medium px-10 text-slate-500/70">
          We have the fast paced growing companies with us
        </p>
        <div className="company-logo flex items-center lg:w-full max-w-4xl mx-auto justify-center gap-x-10 lg:gap-x-20">
          <img
            className="h-14 w-24 lg:h-auto lg:w-auto"
            src={fluidGlu}
            alt=""
          />
          <img className="h-14 w-24 lg:h-auto lg:w-auto" src={hikkeno} alt="" />
          <img className="h-14 w-24 lg:h-auto lg:w-auto" src={bubble} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
