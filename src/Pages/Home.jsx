import React from "react";

import Banner from "../Components/Banner";
import useAppsData from "../CustomHook/useAppsData";
import AppsCard from "../Components/appsCard";
import { Link } from "react-router";
const Home = () => {
  const { apps } = useAppsData();
  const slicedData = apps.slice(0, 8);
  console.log(slicedData);
  return (
    <div>
      <Banner></Banner>
      <div className="mb-10 text-center px-3.5">
        <h2 className="font-bold text-[#001931] text-4xl md:text-[48px]">
          Trending Apps
        </h2>
        <p className="md:text-xl text-lg px-2 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3.5">
        {" "}
        {slicedData.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
      <div className="flex justify-center mb-20 px-3.5">
        <Link
          to="/apps"
          className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold mt-10 rounded-sm py-[14.5px] px-[39px]"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
