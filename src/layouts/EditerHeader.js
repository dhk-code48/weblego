import React from "react";
import { FiMonitor, FiTablet, FiEye } from "react-icons/fi";
import { CiMobile1 } from "react-icons/ci";

const EditerHeader = ({ websiteName }) => {
  return (
    <div className="bg-white text-black items-center px-[74px] h-20 flex justify-between border-b border-gray-200">
      <h3 className="text-lg font-semibold tracking-wide text-gray-800">
        {websiteName}
      </h3>
      <div className="flex text-2xl">
        <FiMonitor className="m-5" />
        <CiMobile1 className="m-5" />
        <FiTablet className="m-5" />
      </div>
      <div className="flex">
        <button className="font-medium tracking-wide mr-6 items-center flex text-gray-900">
          Preview <FiEye className="text-base ml-3" />
        </button>
        <button className="bg-[#753AF2] px-4 py-1 rounded font-medium tracking-wide text-white">
          Publish
        </button>
      </div>
    </div>
  );
};

export default EditerHeader;
