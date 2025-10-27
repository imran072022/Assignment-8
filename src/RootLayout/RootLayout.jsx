import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
