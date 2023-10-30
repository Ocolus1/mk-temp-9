import React from "react";
import logo from "../assets/website-logo-white.svg";

function Footer() {
  const footerLinks = [
    {
      column1: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Contact", url: "#" },
        { id: 3, title: "Blog", url: "#" },
        { id: 4, title: "Story", url: "#" },
        /* You can add more  */
      ],
      column2: [
        { id: 5, title: "Company", url: "#" },
        { id: 6, title: "Product", url: "#" },
        { id: 7, title: "Press", url: "#" },
        { id: 8, title: "More", url: "#" },
      ],
      column3: [
        { id: 9, title: "Press", url: "#" },
        { id: 10, title: "Careers", url: "#" },
        { id: 11, title: "Newsletters", url: "#" },
        { id: 12, title: "More", url: "#" },
      ],
    },
  ];

  return (
    <div className="footer pt-10 pb-20 bg-[#F7F7F7]">
      <div className="footer-headline mx-auto max-w-5xl pt-10 flex flex-col md:flex-row lg:gap-x-10 md:items-center md:justify-between px-8 lg:px-20 xl:px-0">
        <div className="left-footer-part md:w-1/3 flex flex-col justify-start items-start">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <div className="bg-[#242424] rounded-full p-2">
                <img className="h-5 w-5 " src={logo} alt="" />
              </div>
              <h2 className="text-black font-bold">Side</h2>
            </div>
          </button>
          <p className="text-black/60 text-sm mt-5 max-w-xs font-[400]">
            What matters is productivity with fun culture
          </p>
        </div>

        <div className="right-footer-part pt-5 md:w-2/3">
          <div className="flex gap-x-3 items-center justify-between px-0 lg:px-10">
            {Object.keys(footerLinks[0]).map((columnKey) => (
              <ul
                key={columnKey}
                className="footer-link-list  text-sm font-medium flex flex-col gap-y-2"
              >
                {footerLinks[0][columnKey].map((link) => (
                  <li
                    key={link.id}
                    className="footer-link-item text-black/50 hover:text-black transition-all duration-300 ease-in-out flex items-center gap-x-2"
                  >
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
