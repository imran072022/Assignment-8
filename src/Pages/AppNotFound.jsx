import React from "react";
import appNotFoundImg from "../assets/App-Error.png";
import { Link } from "react-router";
const AppNotFound = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen">
      <div className="my-20 text-center">
        <div>
          <img className="mx-auto" src={appNotFoundImg} alt="App not found" />
        </div>
        <div className="mb-4 mt-14">
          <h1 className="font-semibold text-5xl text-[#001931] mb-2">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-xl text-[#627382]">
            The App you are requesting is not found on our system. Please try
            another app.
          </p>
        </div>
        <Link
          to="/apps"
          className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-sm py-[14.5px] px-[39px]"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
