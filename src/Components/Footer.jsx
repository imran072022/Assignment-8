import React from "react";
import footer from "../assets/footer.png";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="flex flex-col justify-between gap-10 px-4 md:px-10">
        {/* Left Section (Logo + About) */}
        <div className="flex-1">
          <div className="inline-flex gap-2 items-center mb-4">
            <Link to="/">
              <img
                className="cursor-pointer w-8 h-8"
                src={logo}
                alt="Hero.io logo"
              />
            </Link>
            <Link to="/">
              <h2 className="font-bold bg-gradient-to-br text-transparent bg-clip-text from-[#632EE3] to-[#9F62F2] text-2xl cursor-pointer">
                HERO.IO
              </h2>
            </Link>
          </div>
          <p className="text-white text-lg leading-relaxed">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>

        {/* Right Section (4 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 sm:flex-row gap-10 mt-6 md:mt-4">
          {/* Column 1 */}
          <div className="">
            <h3 className="text-white font-bold text-xl mb-3">Contacts</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Compare
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Bug Report
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="">
            <h3 className="text-white font-bold text-xl mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="">
            <h3 className="text-white font-bold text-xl mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          {/*Column 4  */}
          <div className="">
            <h3 className="text-white font-bold text-xl mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Top Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  New Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg cursor-pointer hover:underline"
                >
                  Featured
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center gap-4 items-center mb-0 md:mb-2 mt-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-white w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-white w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="text-white w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
          <FaRedditAlien className="text-white w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <AiFillTikTok className="text-white w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div>
        <p className="text-white text-lg text-center border-t border-[#414141] py-6">
          © Copyright 2025 HERO Game Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
