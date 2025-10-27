import React from "react";
import download from "../assets/icon-downloads.png";
import ratingStar from "../assets/icon-ratings.png";
import { Link } from "react-router";
const AppsCard = ({ app }) => {
  const { title, image, ratingAvg, downloads, id } = app;
  return (
    <Link
      to={`/appDetails/${id}`}
      className="w-full mx-auto p-4 rounded-sm bg-white flex flex-col cursor-pointer shadow-md hover:shadow-2xl hover:transition-all hover:duration-300 hover:-translate-y-3"
    >
      <div className="w-full aspect-square rounded-lg flex justify-center items-center bg-[#f5f7fa]">
        <img
          className="w-auto h-full max-h-[336px] object-contain"
          src={image}
          alt=""
        />
      </div>
      <h3 className="font-medium text-xl text-[#001931] my-4">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="bg-[#F1F5E8] flex items-center px-2.5 py-1.5 rounded-sm gap-2">
          <img className="w-4 h-4" src={download} alt="" />
          <p className="text-[#00D390] font-medium">{downloads}</p>
        </div>
        <div className="bg-[#FFF0E1] flex items-center px-2.5 py-1.5 rounded-sm gap-2">
          <img className="w-4 h-4" src={ratingStar} alt="" />
          <p className="text-[#FF8811] font-medium">{ratingAvg}</p>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
