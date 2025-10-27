import React, { useState, useRef } from "react";
import useAppsData from "../CustomHook/useAppsData";
import AppsCard from "../Components/appsCard";
import Lottie from "lottie-react";
import loadingSpinner from "../assets/deliverService.json";
const Apps = () => {
  const { apps, loading } = useAppsData();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowLoader(true);
      setDebouncedSearch(value.trim().toLowerCase());
      setTimeout(() => {
        setShowLoader(false);
        inputRef.current?.focus();
      }, 200);
    }, 300);
  };
  const filteredApps = debouncedSearch
    ? apps.filter((app) => app.title.toLowerCase().includes(debouncedSearch))
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
          (<span>{filteredApps.length}</span>) Apps Found
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
            ref={inputRef}
            value={search}
            onChange={handleSearchChange}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      {loading || showLoader ? (
        <div className="flex justify-center items-center mt-6">
          <Lottie
            animationData={loadingSpinner}
            loop={true}
            style={{ height: 300, width: 300 }}
          />
        </div>
      ) : filteredApps.length === 0 ? (
        <p className="text-center text-5xl font-bold mt-20 text-[#627382]">
          No Apps Found!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredApps.map((app) => (
            <AppsCard app={app} key={app.id}></AppsCard>
          ))}
        </div>
      )}
    </div>
  );
};
export default Apps;
