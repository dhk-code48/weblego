import React from "react";

const Element = ({ tag, styles, children }) => {
  const TagName = tag;
  return (
    <TagName style={styles}>
      {Array.isArray(children)
        ? children.map((child, index) => <Element key={index} {...child} />)
        : children}
    </TagName>
  );
};

const App = () => {
  const data = [
    {
      sectionName: "Header",
      tag: "div",
      styles: {
        background: "#000",
        width: "100%",
        display: "flex",
        "justify-content": "space-between",
      },
      children: [
        {
          sectionName: "Header Title",
          tag: "div",
          styles: { background: "#000" },
          children: [
            {
              sectionName: "Header Logo",
              tag: "h1",
              styles: { color: "#fff", "font-size": "20px" },
              children: "Lego Site",
            },
          ],
        },
        {
          sectionName: "Header Navigation",
          tag: "ul",
          styles: {
            display: "flex",
            "align-items": "center",
            color: "#fff",
          },
          children: [
            {
              tag: "li",
              children: "Home",
              sectionName: "Header Navigation List",
              styles: { margin: "0px 5px" },
            },
            {
              tag: "li",
              children: "About",
              sectionName: "Header Navigation List",
              styles: { margin: "0px 5px" },
            },
            {
              tag: "li",
              children: "Services",
              sectionName: "Header Navigation List",
              styles: { margin: "0px 5px" },
            },
            {
              tag: "li",
              children: "Contact",
              sectionName: "Header Navigation List",
              styles: { margin: "0px 5px" },
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {data.map((element, index) => (
        <Element key={index} {...element} />
      ))}
    </div>
  );
};

export default App;
