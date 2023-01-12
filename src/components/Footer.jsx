import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0F2F63] ">
      <div className="flex md:flex-row flex-col px-5 md:justify-around gap-10 overflow-hidden shrink-0 md:px-20 h-auto py-10 mt-40 bg-[#0F2F63] text-gray-200 w-full relative bottom-0">
        <div className="shrink-0 flex flex-col gap-2 font-bold cursor-pointer">
          <h1 className="text-xl md:border-b-2 md:border-red-500">ABOUT US</h1>
          <p>About AMWE</p>
          <p>Contact Us</p>
          <p>Support Forums</p>
          <p>System Status</p>
        </div>
        <div className="shrink-0 flex flex-col gap-2 font-bold cursor-pointer">
          <h1 className="text-xl md:border-b-2 md:border-red-500">EXHIBITION</h1>
          <p>Exhibits</p>
          <p>Register</p>
          <p>Reviews</p>
        </div>
        <div className="shrink-0 flex flex-col gap-2 font-bold cursor-pointer">
          <h1 className="text-xl md:border-b-2 md:border-red-500">REGISTRATION</h1>
          <p>Guidelines</p>
          <p>Discussions</p>
          <p>Leaderboard</p>
          <p>Twitter</p>
        </div>
        <div className="shrink-0 flex flex-col gap-2 font-bold cursor-pointer">
          <h1 className="text-xl md:border-b-2 md:border-red-500">OTHERS</h1>
          <p>Conferences</p>
          <p>Awards</p>
          <p>Travel</p>
          <p>Adverts</p>
        </div>
      </div>
      <div className="w-full border-t-2">
        <div className="w-full m-10 flex items-center gap-5 ">
          <figure className="md:w-[20%] w-[20%]">
            <img
              src="AMWE5.png"
              alt="AMWE Official Logo"
              className="w-full md:h-full bg-[#0F2F63] rounded-full shadow-lg"
            />
          </figure>
          <figcaption className="bg-red-500 p-2 rounded-lg text-gray-200 text-sm">
            All Africa Medical & Wellness Expo <hr />{" "}
            <i className="text-[8px] md:text-[10px]">
              Where the world decides the future of healthcare
            </i>
          </figcaption>
        </div>
        <h1 className="text-center w-full bg-gray-900 text-gray-200 py-2">
          Copyright &copy; 2023. All rights reserved. AMWE.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
