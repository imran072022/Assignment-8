import React from "react";
import { Link, NavLink } from "react-router";
import githubLogo from "../assets/github.png";
import logo from "../assets/logo.png";
const Navbar = () => {
  const activeStyle =
    "font-medium text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text relative after:content-[''] after:absolute after:left-0 after:-bottom-0.25 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]";
  const linkBase =
    "text-[rgba(0,0,0,0.9)] font-medium text-base relative after:content-[''] after:absolute after:left-0 after:-bottom-0.25 after:w-0 hover:after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:transition-all after:duration-300 ";
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${isActive ? activeStyle : linkBase}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="flex gap-1 items-center">
          <img className="w-10 h-10" src={logo} alt="" />
          <h2 className="font-bold bg-gradient-to-br text-transparent bg-clip-text from-[#632EE3] to-[#9F62F2]">
            HERO.IO
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-8 items-center ">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${isActive ? activeStyle : linkBase}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/imran072022"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold flex gap-2.5 rounded-sm py-2 px-3 md:py-[11.5px] md:px-[15.5px] items-center"
        >
          <img className="w-5 h-5" src={githubLogo} alt="" />
          <p className="text-sm md:text-base">Contribute</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
