import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const AppHeader = () => {
  return (
    <div className="overflow-hidden ml-[250px] h-16 w-screen fixed top-0 left-0 border-b border-gray-100 bg-white z-40 flex justify-between px-10 items-center">
      <div className="h-[50%] flex items-center bg-gray-100 px-2 py-1 rounded-md ">
        <AiOutlineSearch className="text-fray-800 text-lg" />
        <input
          placeholder="Serach Websitess ..."
          className="bg-gray-100 px-2 py-1 text-gray-700 outline-none w-[300px]"
        />
      </div>
    </div>
  );
};

export default AppHeader;
