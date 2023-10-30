import React, { useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import albus from "../../src/assets/albus.svg";
import severus from "../../src/assets/severus.svg";
import harry from "../../src/assets/harry.svg";

function TestimonialSection() {
  const testimonials = [
    {
      content:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      author: "Albus Dumbledore",
      position: "Manager @ Howarts",
      profile: albus,
    },
    {
      content:
        "I'm super impressed by how intuitive and powerful your builder is.“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      author: "Severus Snape",
      position: "Manager @ Slytherin",
      profile: severus,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
    {
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      profile: harry,
    },
  ];

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleLeftClick = () => {
    containerRef.current.scrollLeft -= 500; // adjust this value as needed
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleRightClick = () => {
    containerRef.current.scrollLeft += 500; // adjust this value as needed
    setScrollLeft(containerRef.current.scrollLeft);
  };

  return (
    <div className="testimonial py-10">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col items-center gap-y-5 justify-between max-w-6xl mx-auto">
          <div className="testimonial-headline flex flex-col items-center justify-center  gap-y-2  px-10">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl max-w-xs mx-auto md:max-w-full md:mx-0 text-center lg:text-left font-bold leading-[1.5] lg:leading-[1.25] text-black">
              What side users say
            </h3>
            <p>Here is how homely can help you</p>
          </div>
        </div>
        <div
          className="testimonial-card py-10 px-10 scrollbar-hide scrollbar-hide mt-2 flex overflow-auto font-medium"
          ref={containerRef}
          style={{
            scrollBehavior: "smooth",
            scrollLeft: scrollLeft,
            transition: "scrollLeft 0.5s ease",
          }}
        >
          <div className="flex items-start gap-x-7 justify-between">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card-box rounded-xl flex flex-col w-[300px] justify-between bg-white"
              >
                <div className="testimonial-card-item bg-[#F3F3F3] rounded-xl border border-slate-400/30 p-6 gap-y-2">
                  <p className="text-sm lg:text-xl font-medium">
                    {testimonial.content}
                  </p>
                  <div className="mt-5 flex items-center gap-x-2">
                    <div>
                      <img
                        className="h-8 w-8"
                        src={testimonial.profile}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-[#7c7c7c] text-xs">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="scrollable-button flex items-center mx-auto justify-center gap-x-3 w-1/3">
          <div
            className="flex items-center gap-x-2 p-3 rounded-full bg-[#242424] shadow-md"
            onClick={handleLeftClick}
            role="button"
          >
            <BsArrowLeft className="text-white lg:text-3xl" />
          </div>
          <div
            className="flex items-center gap-x-2 p-3 rounded-full bg-[#f3f3f3] shadow-md"
            onClick={handleRightClick}
            role="button"
          >
            <BsArrowRight className="text-black lg:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
