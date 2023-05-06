import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";

const WebView = ({ website }) => {
  const { selected } = useContext(AppContext);

  const Element = ({ element }) => {
    // Element = <div>{...children }</div> || <h1>H1</h1>
    const { id, tag } = element;

    // Getting the local version of The Element
    // const localElement = JSON.parse(localStorage.getItem(element.id));

    // if (!localElement?.sectionName) {
    //   localStorage.setItem(element.id, JSON.stringify(element));
    // }

    // Creating a react state to store the data of element to display on web view
    const [elementMeta, setElement] = useState({
      styles: element.styles,
      children: element.children,
    });

    useEffect(() => {
      setElement({
        styles: element.styles,
        children: element.children,
      });
    }, [element, website]);

    const TagName = tag;

    // Is the element is selected or not
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
      setIsSelected(selected?.id === id);
    }, [id, selected]);

    return (
      <TagName
        style={{
          ...elementMeta.styles,
          outline: isSelected ? "3px solid #0096c7" : "none",
          cursor: "pointer",
        }}
      >
        {Array.isArray(elementMeta.children)
          ? elementMeta.children.map((child) => (
              <Element key={child.id} element={child} />
            ))
          : elementMeta.children}
      </TagName>
    );
  };

  return (
    <div className="select-none flex-1 w-full overflow-x-scroll">
      {website.map((element) => (
        <Element key={element.id} element={element} />
      ))}
    </div>
  );
};

export default WebView;
