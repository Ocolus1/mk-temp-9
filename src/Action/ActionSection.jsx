import React from "react";

function CtaSection() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-5 lg:px-0">
      <div
        className=" bg-[#FBEDDF] p-10 rounded-2xl
       mx-auto flex flex-col gap-y-5 justify-center items-center"
      >
        <h3 className="text-3xl lg:text-6xl font-bold text-[#242424] text-center">
          Get to know whats next for Side
        </h3>
        <p className="text-[#626262] max-w-lg text-base lg:text-lg mx-auto text-center font-medium">
          Get prepared to secure, Side as a new AI generated for every account
          in a new and A Side way
        </p>
        <a
          href="#"
          className="flex w-full md:w-fit items-center text-white justify-center rounded-full bg-[#EDA35E] px-5 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
        >
          Create Account
        </a>
      </div>
    </div>
  );
}

export default CtaSection;
