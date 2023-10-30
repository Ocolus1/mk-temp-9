import React from "react";
import { BsArrowRight } from "react-icons/bs";
import checkMark from "../../src/assets/pricing-checkmark.svg";
import Pricingtoggle from "./PricingToggle";
import { useState } from "react";

function PricingSection() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      name: "Starter",
      popular: "",
      price: "$19",
      yearlyPrice: "$84",
      yearTag: "/year",
      monthTag: "/month",
      timeTagColor: "text-slate-500",
      description: "Unleash the power of automation.",
      features: ["Multi-step Zaps", "3 Premium Apps", "2 Users team"],
      backgroundColor: "#FFFFFF00",
      buttonColor: "bg-[#EDA35E]",
      tagTextColor: "text-black",
      buttonTextColor: "text-white",
      descriptionTextColor: "text-black",
      featuresTextColor: "text-black",
      PricingTextColor: "text-black",
      checkMarkBgColor: "bg-[#EDA35E]",
    },
    {
      name: "Professional",
      popular: "",
      price: "$54",
      yearlyPrice: "$228",
      yearTag: "/year",
      timeTagColor: "text-slate-500",
      monthTag: "/month",
      description: "Advanced tools to take your work to the next level.",
      features: [
        "Multi-step Zaps",
        "3 Premium Apps",
        "2 Users team",
        "Shared Workspace",
      ],
      backgroundColor: "#FFFFFF00",
      buttonColor: "bg-[#EDA35E]",
      tagTextColor: "text-black",
      buttonTextColor: "text-white",
      descriptionTextColor: "text-black",
      featuresTextColor: "text-black",
      PricingTextColor: "text-black",
      checkMarkBgColor: "bg-[#EDA35E]",
    },
    {
      name: "Company",
      popular: "Most Popular",
      price: "$89",
      yearlyPrice: "$228",
      yearTag: "/year",
      monthTag: "/month",
      timeTagColor: "text-white",
      description: "Automation plus enterprise-grade features.",
      features: [
        "Multi-step Zap",
        "Unlimited Premium Apps",
        "Unlimited Users Team",
        "Advanced Admin",
        "Custom Data Retention",
      ],
      backgroundColor: "#EDA35E",
      buttonColor: "bg-white",
      buttonTextColor: "text-black",
      tagTextColor: "text-white",
      descriptionTextColor: "text-white",
      featuresTextColor: "text-white",
      PricingTextColor: "text-white",
      checkMarkBgColor: "bg-white/40",
    },
  ];

  return (
    <div className="pricing max-w-5xl mx-auto py-10">
      <div className="featured-headline flex flex-col gap-y-2">
        <p
          className={`text-amber-400 rounded-full px-2.5 py-[1px] mt-10 text-center`}
        >
          Pricing
        </p>
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-black">
          Pick the pricing that fits for you
        </h3>
        <div className="flex justify-center my-14">
          <Pricingtoggle enabled={enabled} setEnabled={setEnabled} />
        </div>
        <div className="pricing-card-container relative isolate">
          <div className="pricing-card grid px-10 lg:px-14 xl:px-10 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`card pricing-card-box relative isolate p-5 flex flex-col rounded-xl`}
                style={{ backgroundColor: option.backgroundColor }}
              >
                <div className="p-5 flex flex-col gap-y-2">
                  {option.popular && (
                    <p className="bg-white px-5 text-sm font-medium rounded-full py-1 w-fit">
                      {option.popular}
                    </p>
                  )}
                  <h3 className="mt-5 text-sm font-medium text-slate-500/70">
                    <span
                      className={`text-3xl font-bold ${option.PricingTextColor}`}
                    >
                      {enabled ? option.yearlyPrice : option.price}
                    </span>{" "}
                    <span className={`${option.timeTagColor} font-medium`}>
                      {enabled ? option.yearTag : option.monthTag}
                    </span>
                  </h3>
                  <p className={`text-xl font-semibold ${option.tagTextColor}`}>
                    {option.name}
                  </p>
                  <p
                    className={`text-sm font-medium ${option.descriptionTextColor}`}
                  >
                    {option.description}
                  </p>
                </div>
                <div className="pricing-features my-2.5 flex flex-col gap-y-5 p-5">
                  {option.features.map((feature, index) => (
                    <div key={index} className="flex gap-x-3">
                      <div
                        className={`${option.checkMarkBgColor} rounded-full flex items-center justify-center w-5 h-5`}
                      >
                        <img src={checkMark} alt="" />
                      </div>
                      <p
                        className={`text-sm font-medium ${option.featuresTextColor}`}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  className={`my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold hover:shadow-lg hover:drop-shadow-lg transition duration-200 ${option.buttonColor} ${option.buttonTextColor}`}
                >
                  <span
                    className="tracking-tight"
                    style={{ color: option.buttonTextColor }}
                  >
                    Choose Plan
                  </span>
                  <BsArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
