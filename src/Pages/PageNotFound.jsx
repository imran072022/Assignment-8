import React from "react";
import pageNotFoundImg from "../assets/error-404.png";
import { Link } from "react-router";
const PageNotFound = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen">
      <div className="my-20 text-center">
        <div>
          <img className="mx-auto" src={pageNotFoundImg} alt="Page not found" />
        </div>
        <div className="mb-4 mt-14">
          <h1 className="font-semibold text-5xl text-[#001931] mb-2">
            Oops, page not found!
          </h1>
          <p className="text-xl text-[#627382]">
            The page you are looking for is not available.
          </p>
        </div>
        <Link
          to="/"
          className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-sm py-[14.5px] px-[39px]"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
