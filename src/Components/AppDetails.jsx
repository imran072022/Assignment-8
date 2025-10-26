import Lottie from "lottie-react";
import loadingSpinner from "../assets/deliverService.json";
import React, { useEffect, useState } from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { useParams } from "react-router";
import useAppsData from "../CustomHook/useAppsData";
import setItem, { getItem } from "../localStorage";
import AppNotFound from "../Pages/appNotFound";
import { ToastContainer, toast } from "react-toastify";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useAppsData();
  const clickedApp = apps.find((app) => app.id === parseInt(id));
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!clickedApp) return;
    const dataFromLocalStorage = getItem() ?? [];
    const isInstalled = dataFromLocalStorage.some(
      (app) => app.id === clickedApp.id
    );
    setInstalled(isInstalled);
  }, [clickedApp]);
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
  if (!clickedApp) return <AppNotFound></AppNotFound>;

  const handleInstall = () => {
    setItem(clickedApp);
    setInstalled(true);
    toast.success("App installed successfully!");
  };
  const {
    title,
    image,
    companyName,
    reviews,
    downloads,
    ratingAvg,
    size,
    description,
  } = clickedApp;
  const chartData = clickedApp.ratings.map((r) => ({
    name: r.name,
    count: r.count,
  }));
  return (
    <div className="my-20 px-3.5">
      {/*details */}
      <div className="flex gap-10 items-center">
        <div>
          <img className="w-[350px] h-[350px]" src={image} alt="" />
        </div>
        <div className="flex-1">
          <div>
            {" "}
            <h2 className="text-[#001931] text-3xl font-bold mb-2">{title}</h2>
            <p className="text-[#627382] text-xl">
              Developed by{" "}
              <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-semibold bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <hr className="border-[0.5] border-[#cfcfcf] my-7" />
          <div className="flex gap-6">
            <div className="w-[150px]">
              <img className="w-10 h-10" src={download} alt="" />
              <p className="text-[#001931]">Downloads</p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {downloads}
              </h2>
            </div>
            <div className="w-[150px]">
              <img className="w-10 h-10" src={rating} alt="" />
              <p className="text-[#001931]">Average Ratings</p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {ratingAvg}
              </h2>
            </div>
            <div className="w-[150px]">
              <img className="w-10 h-10" src={review} alt="" />
              <p className="text-[#001931]">Total Reviews</p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {reviews}
              </h2>
            </div>
          </div>
          <button
            disabled={installed}
            onClick={() => handleInstall()}
            className="rounded-sm bg-[#00D390] px-5 py-3.5 text-white text-xl font-semibold mt-7"
          >
            {installed ? "Installed" : `Install Now (${size}) MB`}
          </button>
        </div>
      </div>
      <hr className="border border-[#cfcfcf] my-10" />
      {/*Chart*/}
      <div>
        <h2 className="font-semibold text-[#001931] text-2xl mb-6">Ratings</h2>
        <BarChart
          style={{
            height: "326px",
          }}
          responsive
          layout="vertical"
          data={chartData.slice().reverse()}
        >
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" barSize={32} />
        </BarChart>
      </div>
      {/*description */}
      <hr className="border border-[#cfcfcf] my-10" />
      <div>
        <h2 className="text-[#001931] text-2xl font-semibold mb-6">
          Description
        </h2>
        <p className="text-[#627382] text-xl whitespace-pre-line">
          {description}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
