import React from "react";
import workLaptop from "../assets/working-laptop.svg";
import doingMessage from "../assets/doing-message.svg";
import heroProfile from "../../src/assets/hero-profile.jpg";
import blackCheck from "../../src/assets/black-check.svg";

function BenefitSection() {
  return (
    <div className="bg-[#FBEDDF] py-10 px-10">
      <div className="total-feature-container flex flex-col gap-y-20 lg:gap-y-14 max-w-5xl mx-auto">
        {/* Edit First Feature Section "Activity in Sides" */}
        <div className="first-feature-section flex flex-col-reverse gap-y-10 md:flex-row items-center justify-between gap-x-10">
          <div className="left-text w-full lg:w-1/2 flex flex-col items-center md:items-start gap-y-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.25] font-bold text-[#0A071B]">
              Activity in Sides
            </h2>
            <p className="text-sm md:text-base font-medium pr-2 text-[#5B5675]">
              The expectation that productivity should always lead to tangible
              results or accomplishments.
            </p>
            <a
              href="#"
              className="flex w-full md:w-fit items-center text-white justify-center rounded-full bg-[#242424] px-5 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
              Create Account
            </a>
          </div>
          <div className="right-image w-full lg:w-1/2">
            <div className="rounded-2xl image-container relative isolate">
              <img className="h-[80%] w-[80%]" src={workLaptop} alt="" />
              <div className="absolute top-5 right-0 lg:top-10 lg:right-0 bg-white shadow flex items-center gap-x-2 p-1.5 lg:p-3 rounded-lg">
                <img
                  className="rounded-full w-4 h-4 lg:h-7 lg:w-7"
                  src={heroProfile}
                  alt=""
                />
                <p className="text-sm lg:text-base">Allison Stone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit second Feature Section "AI generated chat" */}
        <div className="second-feature-section flex flex-col gap-y-10 md:flex-row items-center justify-between gap-x-10">
          <div className="left-image w-full lg:w-1/2">
            <div className="rounded-2xl image-container relative isolate">
              <img className="h-[80%] w-[80%]" src={doingMessage} alt="" />
              <div className="absolute -top-14 -left-7 md:top-0 md:left-44 lg:-top-20 lg:-left-5 xl:top-0 xl:-left-28 bg-white shadow flex flex-col items-center gap-y-3 p-1.5 lg:p-3 rounded-lg">
                <div className="flex items-center gap-x-2">
                  <div className="bg-[#EDA35E]/20 px-1.5 py-2 rounded-full">
                    <img
                      className="h-2 w-2 lg:h-auto lg:w-auto"
                      src={blackCheck}
                      alt=""
                    />
                  </div>
                  <p className="text-sm lg:text-base">Session request</p>
                </div>
                <button className="bg-[#0A2640]/10 w-full py-1.5 rounded text-sm lg:text-base">
                  Accept
                </button>
              </div>
            </div>
          </div>
          <div className="right-text leading-[1.25] lg:w-1/2 flex flex-col items-center md:items-start gap-y-5">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0A071B]">
              AI generated chat
            </h2>
            <p className="font-medium text-sm md:text-base text-[#5B5675]">
              The expectation that productivity should always lead to tangible
              results or accomplishments.
            </p>
            <a
              href="#"
              className="flex w-full md:w-fit items-center text-white justify-center rounded-full bg-[#242424] px-5 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitSection;
