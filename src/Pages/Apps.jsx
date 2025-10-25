import React, { useState } from "react";
import useAppsData from "../CustomHook/useAppsData";
import AppsCard from "../Components/appsCard";

const Apps = () => {
  const { apps } = useAppsData();
  const [search, setSearch] = useState("");
  const cleanedSearchValue = search.trim().toLocaleLowerCase();
  const searchedApps = cleanedSearchValue
    ? apps.filter((app) =>
        app.title.toLocaleLowerCase().includes(cleanedSearchValue)
      )
    : apps;

  return (
    <div className="px-3.5 my-12 md:my-20">
      <div className="mb-10 text-center">
        <h2 className="font-bold text-[#001931] text-4xl md:text-[48px]">
          Our All Applications
        </h2>
        <p className="md:text-xl text-lg px-2 text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between mb-4 flex-col-reverse sm:flex-row">
        <p className="text-lg md:text-2xl font-semibold mt-1.5">
          (<span>{searchedApps.length}</span>) Apps Found
        </p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchedApps.map((app) => (
          <AppsCard app={app} key={app.id}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
