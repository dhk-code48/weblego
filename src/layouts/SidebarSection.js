import React, { useContext, useEffect, useState } from "react";
import { MdGrid3X3, MdOutlineSegment } from "react-icons/md";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { AppContext } from "../context";

function isString(element) {
  return typeof element === "string";
}

const SidebarSection = ({ website }) => {
  console.log(website);
  const [tree, setTree] = useState({});
  const { setSelected } = useContext(AppContext);

  const RecursiveComponent = ({ children, parindex }) => {
    return (
      <div>
        {children.map((child, index) => {
          const local = JSON.parse(localStorage.getItem(child.id));
          const key = parindex.toString() + index.toString();
          return (
            <div className="pl-5" key={child.id}>
              <div
                className="justify-between hover:bg-gray-100 group py-2 px-5 cursor-pointer w-[100%] my-1 rounded-lg text-gray-900 tracking-wide text-[15px] flex items-center relative"
                onClick={() => {
                  !isString(child.children) &&
                    setTree((prev) => ({ ...prev, [key]: !prev[key] }));
                  setSelected(local.id ? local : child);
                }}
              >
                <div className="flex items-center flex-1">
                  {!isString(child.children) ? (
                    <MdGrid3X3 size={19} className="mr-2" />
                  ) : (
                    <MdOutlineSegment size={19} className="mr-2" />
                  )}
                  {child.sectionName}
                </div>
                {tree[key] && !isString(child.children) ? (
                  <BiChevronDown size={22} className="mr-2 " />
                ) : (
                  !isString(child.children) && (
                    <BiChevronRight size={22} className="mr-2 " />
                  )
                )}
              </div>
              {!isString(child.children) && tree[key] && (
                <RecursiveComponent
                  children={child.children}
                  parindex={index}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mx-3 w-full ">
      <p className="text-slate-600 font-medium my-5">Body</p>
      <div>
        {website !== undefined &&
          website.map((element, index) => {
            const local = JSON.parse(localStorage.getItem(element.id));

            return (
              <div key={index}>
                <div
                  className={`hover:bg-[#753AF2] hover:text-white font-medium ${
                    tree[index]
                      ? "bg-[#753AF2] text-white"
                      : "bg-gray-100 text-gray-800"
                  } py-2 px-5 cursor-pointer w-[80%] my-1 rounded-lg tracking-wide text-[17px] flex items-center justify-between`}
                  onClick={() => {
                    setTree((prev) => ({ ...prev, [index]: !prev[index] }));
                    setSelected(local?.id ? local : element);
                  }}
                >
                  <div className="flex items-center">
                    <MdGrid3X3 size={19} className="mr-2" />
                    {element.sectionName}
                  </div>
                  {tree[index] ? (
                    <BiChevronDown size={22} className="mr-2 " />
                  ) : (
                    <BiChevronRight size={22} className="mr-2 " />
                  )}
                </div>
                {tree[index] && !isString(element.children) ? (
                  <RecursiveComponent
                    children={element.children}
                    parindex={index}
                  />
                ) : (
                  isString(element.children) && element.sectionName
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SidebarSection;
