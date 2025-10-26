import React, { useEffect, useState } from "react";
import { getItem, removeItem } from "../localStorage";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import Lottie from "lottie-react";
import loadingSpinner from "../assets/deliverService.json";
import { ToastContainer, toast } from "react-toastify";
const Installation = () => {
  const [sort, setSort] = useState("none");
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const dataFromLocalStorage = getItem();
    setTimeout(() => {
      setInstalledApps(dataFromLocalStorage);
      setLoading(false);
    }, 200);
  }, []);

  const parseDownloads = (downloadsStr) => {
    const number = parseFloat(downloadsStr);
    if (downloadsStr.endsWith("B")) return number * 1000000000;
    if (downloadsStr.endsWith("M")) return number * 1000000;
    if (downloadsStr.endsWith("K")) return number * 1000;
    return number;
  };

  const sortingApps = (() => {
    const copiedArray = [...installedApps];
    if (sort === "size-ascending") {
      return copiedArray.sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sort === "size-descending") {
      return copiedArray.sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return copiedArray;
    }
  })();

  const handleRemove = (installedApp) => {
    removeItem(installedApp);
    toast.success("App uninstalled successfully");
    setInstalledApps((prev) =>
      prev.filter((app) => app.id !== installedApp.id)
    );
  };
  if (loading)
    return (
      <div className="flex min-h-screen justify-center items-center">
        <Lottie
          animationData={loadingSpinner}
          loop={true}
          style={{ height: 300, width: 300 }}
        ></Lottie>
      </div>
    );
  return (
    <div className="px-3.5 my-20">
      <div className="mb-10 text-center">
        <h2 className="font-bold text-[#001931] text-4xl md:text-[48px] mb-4">
          Your Installed Apps
        </h2>
        <p className="md:text-xl text-lg px-2 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/*Sort */}
      <div className="flex items-center justify-between mb-4 flex-col-reverse sm:flex-row">
        <p className="text-lg md:text-2xl font-semibold mt-1.5">
          (<span>{installedApps.length}</span>){" "}
          {installedApps.length === 1 ? "App" : "Apps"} Found
        </p>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="select w-[180px] h-[43px]"
        >
          <option value="none" hidden>
            Sort by Downloads
          </option>
          <option value="default">Default</option>
          <option value="size-descending">High-Low</option>
          <option value="size-ascending">Low-High</option>
        </select>
      </div>
      {/*Installed app */}
      {sortingApps.length === 0 ? (
        <h2 className="text-center text-4xl font-bold text-[#676f75] mt-12">
          No installed apps currently!
        </h2>
      ) : (
        <div className="space-y-4">
          {sortingApps.map((installedApp) => (
            <div className="flex bg-white p-4 gap-4 items-center shadow-sm hover:shadow-lg hover:transition-all hover:duration-300">
              <div>
                <img className="w-20 h-20" src={installedApp.image} alt="" />
              </div>
              <div>
                <h2 className="font-medium text-xl text-[#001931] mb-4">
                  {installedApp.title}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-sm gap-2">
                    <img className="w-4 h-4" src={download} alt="" />
                    <p className="text-[#00D390] font-medium">
                      {installedApp.downloads}
                    </p>
                  </div>
                  <div className="flex items-center rounded-sm gap-2">
                    <img className="w-4 h-4" src={rating} alt="" />
                    <p className="text-[#FF8811] font-medium">
                      {installedApp.ratingAvg}
                    </p>
                  </div>
                  <p className="text-[#627382]">{installedApp.size} MB</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(installedApp)}
                className="px-4 py-3 bg-[#00D390] text-white font-medium rounded-sm ml-auto cursor-pointer"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Installation;
