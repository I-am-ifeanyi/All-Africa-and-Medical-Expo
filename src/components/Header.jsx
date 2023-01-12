import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { myContextApi } from "../ContextApi";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Header = () => {
  const { toggleNavlinks, showNavlinks } = useContext(myContextApi);
  return (
    <div className="fixed z-50 md:sticky md:top-0">
      <div className="flex justify-between shadow-md gap-5 md:flex md:items-center  md:justify-between md:w-full md:z-20 md:px-5 bg-slate-100 md:py-2">
        <figure
          className={`${
            showNavlinks ? "hidden" : "flex"
          } md:flex md:flex-col items-center md:w-[20%] w-full gap-5 md:gap-1 md:h-100px m-5 md:mr-5 md:mt-2`}
        >
          <img
            src="AMWE5.png"
            alt="AMWE Official Logo"
            className="w-[30%] md:w-[50%] md:h-full bg-[#0F2F63] rounded-full shadow-lg"
          />
          <figcaption
            className="w-[250px]  h-11 p-1 md:h-auto md:text-sm md:font-normal md:p-1  md:block md:outline md:outline-offset-2 text-[10px] text-center leading-tight mt-1 bg-red-500 text-gray-200 rounded overflow-hidden"
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            All Africa Medical & Wellness Expo <hr />{" "}
            <i className="text-[8px] md:text-[10px]">
              Where the world decides the future of healthcare
            </i>
          </figcaption>
        </figure>

        <div className="w-full md:w-[70%]">
          {!showNavlinks && (
            <figure className="md:hidden relative float-right mr-5 mt-12  ">
              <GiHamburgerMenu
                className="text-[#0F2F63] text-2xl md:hidden border shadow-lg rounded scale-150"
                onClick={toggleNavlinks}
              />
            </figure>
          )}
          <nav
            className={`${
              showNavlinks ? "flex" : "hidden"
            } justify-between py-3 px-8 md:px-2 h-screen w-[410px] md:w-full md:h-12 md:border md:m-auto  md:top-0 outline outline-offset-1 bg-[#0F2F63] md:flex animate__animated
            animate__slideInRight
            animate__fadeIn`}
          >
            <ul className="flex flex-col overflow-hidden py-5 gap-2 md:py-0 md:flex md:flex-row md:items-center md:justify-around w-[80%] md:w-full text-gray-200 font-bold tracking-wide">
              <Link to="/">
                <li
                  className="hover:border-b-2 transition-all duration-300 border-red-500 border-b w-full pb-3 md:pb-0"
                  onClick={toggleNavlinks}
                >
                  Home
                </li>
              </Link>
              <Link to="aboutUs">
                <li
                  className="hover:border-b-2 transition-all duration-300 border-red-500 border-b w-full pb-3 md:pb-0"
                  onClick={toggleNavlinks}
                >
                  About Us
                </li>
              </Link>
              <Link to="exhibit">
                <li
                  className="hover:border-b-2 transition-all duration-300 border-red-500 border-b w-full pb-3 md:pb-0"
                  onClick={toggleNavlinks}
                >
                  Exhibit
                </li>
              </Link>
              <Link to="registration">
                {" "}
                <li
                  className="hover:border-b-2 transition-all duration-300 border-red-500 border-b w-full pb-3 md:pb-0"
                  onClick={toggleNavlinks}
                >
                  Registration
                </li>
              </Link>
              <Link to="conference">
                <li
                  className="hover:border-b-2 transition-all duration-300 border-red-500 border-b w-full pb-3 md:pb-0"
                  onClick={toggleNavlinks}
                >
                  Conference
                </li>
              </Link>
              <Link to="awards">
                <li
                  className="hover:border-b-2 transition-all duration-300 border-red-500 border-b w-full pb-3 md:pb-0"
                  onClick={toggleNavlinks}
                >
                  Awards
                </li>
              </Link>
              <Link to="travels">
                <li
                  className="hover:border-b-2 transition-all duration-300 border-red-500 border-b w-full pb-3 md:pb-0"
                  onClick={toggleNavlinks}
                >
                  Travel
                </li>
              </Link>
              <Link to="adverts">
                <li
                  className="hover:border-b-2 transition-all duration-300 border-red-500 "
                  onClick={toggleNavlinks}
                >
                  Adverts
                </li>
              </Link>
            </ul>
            <figure>
              <AiOutlineClose
                className="text-gray-200 text-2xl md:hidden mt-5"
                onClick={toggleNavlinks}
              />
            </figure>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
