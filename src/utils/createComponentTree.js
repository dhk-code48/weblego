import React from "react";
import { MdGrid3X3 } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";

const createComponentTree = (obj, index) => {
  const { tag, className, attributes, children } = obj;

  if (typeof children === "string") {
    return React.createElement(
      "div",
      {
        className:
          "py-2 group w-[100%] my-1 rounded-lg text-gray-700 tracking-wide text-[15px] flex items-center",
        key: index + 1 + obj.section_name,
      },
      <>
        <AiFillCaretRight
          size={12}
          className="mr-2 group-hover:visible invisible"
        />
        <MdGrid3X3 size={20} className="mr-2" />
        {obj.section_name}
      </>
    );
  } else {
    if (children) {
      const childElements = Object.keys(children).map((key) =>
        createComponentTree(children[key])
      );

      return React.createElement(
        tag,
        {
          className,
          attributes,
          key: index + 2 + obj.section_name,
        },
        childElements
      );
    }
  }
};

export { createComponentTree };
