import React from "react";
import logo from "../utils/logo.png";
import { FiHome } from "react-icons/fi";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { TbTemplate } from "react-icons/tb";
import { AiOutlineFile } from "react-icons/ai";

const AppSidebar = () => {
  return (
    <div className="w-[250px] z-50 bg-white h-screen fixed top-0 left-0 border-r border-gray-100">
      <div className="flex items-center border-b border-gray-100">
        <img src={logo} width="50px" alt="Website Logo" />
        <div>
          <h1 className="font-medium text-slate-800">Darshan Dhakal</h1>
          <p className="text-sm text-gray-600">dhk.darshan48@gmail.com</p>
        </div>
      </div>
      <div className="pt-2">
        <div className="w-full flex text-lg items-center py-3 cursor-pointer hover:bg-gray-100 text-gray-700">
          <FiHome className="text-xl ml-5 mr-2" /> Home
        </div>
        <div className="w-full flex text-lg items-center py-3 cursor-pointer hover:bg-gray-100 text-gray-700">
          <HiOutlineFolderOpen className="text-xl ml-5 mr-2" /> Projects
        </div>
        <div className="w-full flex text-lg items-center py-3 cursor-pointer hover:bg-gray-100 text-gray-700">
          <TbTemplate className="text-xl ml-5 mr-2" /> Templates
        </div>
        <div className="w-full flex text-lg items-center py-3 cursor-pointer hover:bg-gray-100 text-gray-700">
          <AiOutlineFile className="text-xl ml-5 mr-2" /> Drafts
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
