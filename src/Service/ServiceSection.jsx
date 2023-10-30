import React from "react";
import code from "../../src/assets/clock.svg";
import monitor from "../../src/assets/lock.svg";
import contentWriting from "../../src/assets/flash.svg";
import branding from "../../src/assets/notify.svg";
import illustrate from "../../src/assets/gift.svg";
import motionGraphics from "../../src/assets/shield.svg";

const servicesData = [
  {
    title: "Seamless way",
    description: "Moments flow into one another, AI creates a seamless way",
    image: monitor,
  },
  {
    title: "Built in lock systems",
    description: "Lines on a page that together form the story of our lives.",
    image: code,
  },
  {
    title: "Quick & reliable",
    description: "Time flashes by, reminding us to seize every moment",
    image: contentWriting,
  },
  {
    title: "Notify user",
    description: "Every moment will be notified for user in a flash",
    image: branding,
  },
  {
    title: "A side gift",
    description: "Get discounts for every single new sessions",
    image: illustrate,
  },
  {
    title: "Safe & Secure",
    description: "Securely built-in AI system for every user in every session",
    image: motionGraphics,
  },
];

const Card = ({ title, description, image }) => {
  return (
    <div className="services-card-box border border-[#d4d4d440] bg-[#F3F3F3] rounded-2xl p-5 flex flex-col gap-y-2">
      <div className="h-16 w-16 flex items-center justify-center rounded-full">
        <img className="h-8 w-8 " src={image} alt="" />
      </div>
      <div className="card-content flex flex-col gap-y-2">
        <h3 className="text-xl lg:text-2xl font-medium text-[#16403F]">
          {title}
        </h3>
        <p className="text-base text-[#7c7c7c] font-medium">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services max-w-5xl mx-auto px-0 py-10">
      <div className="services-headline flex flex-col lg:flex-row lg:items-center lg:justify-between px-10 lg:px-20 xl:px-0">
        <div className="left-service-part mx-auto flex flex-col gap-y-5 justify-center items-center">
          <h3 className="text-3xl lg:text-6xl font-bold text-[#242424]">
            Time less Productivity
          </h3>
          <p className="text-[#626262] max-w-lg text-base lg:text-lg mx-auto text-center">
            The expectation that productivity should always lead to tangible
            results or accomplishments.
          </p>
          <a
            href="#"
            className="flex w-full md:w-fit items-center text-white justify-center rounded-full bg-[#EDA35E] px-5 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
          >
            Create Account
          </a>
        </div>
      </div>
      <div className="services-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 lg:py-20">
        {servicesData.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
