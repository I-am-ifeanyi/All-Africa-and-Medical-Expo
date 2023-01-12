import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import sliding1 from "../images/Rotating-picture/sliding1.jpg";
import sliding2 from "../images/Rotating-picture/sliding2.jpg";
import sliding3 from "../images/Rotating-picture/sliding3.jpg";
import sliding4 from "../images/Rotating-picture/sliding4.jpg";
import sliding5 from "../images/Rotating-picture/sliding5.jpg";
import sliding6 from "../images/Rotating-picture/sliding6.jpg";
import whyexhibit from "../images/whyexhibit.jpg";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      url: sliding1,
    },
    {
      id: 2,
      url: sliding2,
    },
    {
      id: 3,
      url: sliding3,
    },
    {
      id: 4,
      url: sliding4,
    },
    {
      id: 5,
      url: sliding5,
    },
    {
      id: 6,
      url: sliding6,
    },
  ];

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  const autoScroll = true;
  let slideInterval;
  let slideIntervalTime = 10000;

  function auto() {
    slideInterval = setInterval(goToNext, slideIntervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="relative top-28 md:top-0">
      <section className="">
        <div className="w-full h-full relative  overflow-hidden ">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={index === currentIndex ? "slide current" : "slide "}
            >
              {index === currentIndex && (
                <div className="w-4/4">
                  <figure className="w-full h-[300px] md:h-[400px]">
                    <img src={slide.url} className="w-full h-full" />
                  </figure>
                </div>
              )}
            </div>
          ))}
          <div className="absolute w-full h-full">
            <div className="flex justify-between mt-[-250px] md:mt-[-300px]">
              <div
                className="hidden md:block md:text-3xl ml-2 md:ml-10 text-white bg-black/50 rounded-full p-2  "
                onClick={goToPrev}
              >
                <AiFillCaretLeft />
              </div>
              <div
                className="hidden md:block md:text-3xl mr-2 md:mr-10 text-white  bg-black/50 rounded-full p-2"
                onClick={goToNext}
              >
                <AiFillCaretRight />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-[#0F2F63] my-5 border-2 shadow-lg outline outline-offset-2  md:p-5 p-3 leading-tight text-gray-200 tracking-widest">
          <h1 className="md:mb-4 mb-2 md:pb-2 md:text-3xl text-xl font-bold font-serif text-red-500 border-b-2 border-gray-200 w-[50%] relative m-auto">
            WELCOME!!!
          </h1>
          <p className="text-sm md:text-lg">
            You are highly welcome to All Africa & Wellness Expo (AMWE 2023)
          </p>
          <p className="text-sm md:text-lg mb-2">
            The biggest event in Africa where the world decides the future of
            Healthcare
          </p>
          <p
            className="text-sm md:text-lg font-bold bg-red-500 md:w-[50%] w-[60%] relative m-auto border-2 border-gray-200"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <i>Date</i>: 30<sup>th</sup> - 31<sup>th</sup> August
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-16 my-10 md:my-10 md:gap-0 md:px-10 md:py-16 p-5 justify-around tracking-wider font-bold cursor-pointer">
          <div
            className="flex flex-col items-center"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[#0F2F63] md:text-red-500 md:bg-transparent md:h-auto flex items-center justify-center md:p-0 md:text-4xl  text-3xl md:hover:translate-y-1 transition-all duration-300">
              4000
            </p>
            <p className="text-lg">Exhibitors</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[#0F2F63] md:text-red-500 md:bg-transparent md:h-auto flex items-center justify-center md:p-0 md:text-4xl  text-3xl md:hover:translate-y-1 transition-all duration-300">
              85
            </p>
            <p className="text-lg">Exhibiting Countries</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[#0F2F63] md:text-red-500 md:bg-transparent md:h-auto flex items-center justify-center md:p-0 md:text-4xl  text-3xl md:hover:translate-y-1 transition-all duration-300">
              60,000
            </p>
            <p className="text-lg">Live Visitors</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[#0F2F63] md:text-red-500 md:bg-transparent md:h-auto flex items-center justify-center md:p-0 md:text-4xl  text-3xl md:hover:translate-y-1 transition-all duration-300">
              10
            </p>
            <p className="text-lg">Conferences</p>
          </div>
        </div>
        <div className="md:px-10 md:py-16 py-5 flex flex-col items-center w-full bg-[#0F2F63]">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-red-500">
            Why Visit?
          </h1>
          <div className="flex md:flex-row flex-col items-center justify-around gap-10 w-full mt-10">
            <div className="flex flex-col items-center  md:w-1/4">
              <figure
                className="bg-gray-200 p-3 w-28 h-28 rounded-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src="travel.svg" alt="" className="w-full h-full" />
              </figure>
              <p className="text-gray-200 text-center  mt-5">
                To explore the biggest market and services around the world
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/4">
              <figure
                className="bg-gray-200 p-3 w-28 h-28 rounded-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src="network.svg" alt="" className="w-full h-full" />
              </figure>
              <p className="text-gray-200 text-center mt-5">
                To network with your target market audience
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/4">
              <figure
                className="bg-gray-200 p-3 w-28 h-28 rounded-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src="display.svg" alt="" className="w-full h-full" />
              </figure>
              <p className="text-gray-200 text-center mt-5">
                To display your abilities and products
              </p>
            </div>
            <div className="flex flex-col items-center md:w-1/4">
              <figure
                className="bg-gray-200 p-3 w-28 h-28 rounded-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src="increase.svg" alt="" className="w-full h-full" />
              </figure>
              <p className="text-gray-200 text-center mt-5">
                To increase your international presence
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between  items-center my-20 gap-10 w-[90%] md:w-full">
            <figure className="md:w-2/4 ">
              <img
                src={whyexhibit}
                alt="Exhibition Event"
                className="shadow-lg rounded hover:scale-105 transition-all duration-400"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </figure>
            <div className="md:w-1/3 text-gray-200 text-justify tracking-wider border-l-2 border-red-500 pl-3">
              <p>
                There are many opportunies for everyone coming for this life
                changing event. Among many things, you get to discover new
                innovations, you get to build an engaging relationship and
                exchange ideas with experts, and above all, you get to be well
                informed about new trends and technology in the health industry.
              </p>
            </div>
          </div>
          <Link to="exhibit">
            <button className="flex gap-1 items-center text-xl bg-red-500 hover:bg-red-400 hover:translate-x-1 transition-all duration-300 text-gray-200 md:mt-10 p-2 rounded-xl">
              Learn More
              <img src="arrow-right.png" alt="" className="" />
            </button>
          </Link>
        </div>
      </section>
      <section className="my-20 mx-10 md:mx-20">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0 justify-around">
          <div className="md:w-1/3 flex flex-col items-center">
            <figure className="md:w-full md:h-[250px] shadow-lg rounded-tl-2xl rounded-br-2xl md:hover:scale-105 transition-all duration-300">
              <img
                src="https://marketplace.canva.com/EAFMpe1T88Q/1/0/1600w/canva-blue-modern-dental-clinic-trifold-brochure-O5muq1jXx60.jpg"
                alt=""
                className="w-full h-full rounded-tl-2xl rounded-br-2xl "
              />
            </figure>
            <h1 className="md:text-xl font-semibold mt-4">
              Conference Brochure
            </h1>
            <p className="text-center">
              This brochure gives you details about the general overview of AMWE
              2023, our sponsors and benefits.
            </p>
            <button className="py-2 px-4 bg-red-500 text-gray-200 rounded-md mt-2 hover:bg-red-400 transition-all duration-300">
              Download
            </button>
          </div>
          <div className="md:w-1/3 flex flex-col items-center">
            <figure className="md:w-full md:h-[250px] shadow-lg rounded-tr-2xl rounded-bl-2xl md:hover:scale-105 transition-all duration-300">
              <img
                src="https://marketplace.canva.com/EAE8-qdHVmo/2/0/1600w/canva-blue-clean-medical-promotion-service-trifold-brochure-5lqWs8Yqnr8.jpg"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl w-full h-full"
              />
            </figure>
            <h1 className="md:text-xl font-semibold mt-4">
              Sponsorship Brochure
            </h1>
            <p className="text-center">
              This brochure is an avenue for advertizing our partners and
              sponsors.
            </p>
            <button className="py-2 px-4 bg-red-500 text-gray-200 rounded-md mt-2 hover:bg-red-400 transition-all duration-300">
              Download
            </button>
          </div>
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-lg">Powered By:</h1>
      </section>
    </div>
  );
};

export default Home;
