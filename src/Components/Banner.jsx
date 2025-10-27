import React from "react";
import GooglePlay from "../assets/PlayStore.png";
import AppStore from "../assets/appStore.png";
import HeroImage from "../assets/hero.png";
const Banner = () => {
  return (
    <div className="my-12 md:my-20">
      {/* Banner Part*/}
      <div className="text-center">
        <h1 className="font-bold text-[40px] md:text-7xl text-[rgba(0,25,49,1)]  md:leading-20">
          We Build<br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
            {" "}
            Productive
          </span>{" "}
          Apps{" "}
        </h1>
        <p className="text-[#627382] md:text-[20px] md:mt-4 mt-2 mb-8 md:mb-10 px-1">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex flex-col md:flex-row items-center md:gap-4 gap-2 justify-center">
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2.5 items-center rounded-sm border border-[#D2D2D2] py-3.5 md:py-4 px-[21.5px] cursor-pointer hover:bg-gray-200 transition duration-150">
              <img className="w-8 h-8" src={GooglePlay} alt="" />
              <p className="font-semibold text-xl text-[#001931]">
                Google Play
              </p>
            </div>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2.5 items-center rounded-sm border border-[#D2D2D2] py-3.5 md:py-4 px-[30.5px] cursor-pointer hover:bg-gray-200 transition duration-150">
              <img className="w-8 h-8" src={AppStore} alt="" />
              <p className="font-semibold text-xl text-[#001931]">App Store</p>
            </div>
          </a>
        </div>
      </div>
      {/* Hero Image*/}
      <div className="mt-10 flex items-center justify-center">
        <img src={HeroImage} alt="" />
      </div>

      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-6 sm:p-6 md:p-12 lg:p-20 flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-[48px] text-white mb-10 text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex gap-10 md:gap-6 flex-col md:flex-row">
          <div className="lg:px-[82px] text-center">
            <p className="text-white">Total Downloads</p>
            <p className="font-extrabold text-5xl md:text-[64px] text-white my-2 md:my-4">
              29.6M
            </p>
            <p className="text-white">21% more than last month</p>
          </div>
          <div className="lg:px-[82px] text-center">
            <p className="text-white">Total Reviews</p>
            <p className="font-extrabold text-5xl md:text-[64px] text-white my-2 md:my-4">
              906K
            </p>
            <p className="text-white">46% more than last month</p>
          </div>
          <div className="lg:px-[82px] text-center">
            <p className="text-white">Active Apps</p>
            <p className="font-extrabold text-5xl md:text-[64px] text-white my-2 md:my-4">
              132+
            </p>
            <p className="text-white">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
