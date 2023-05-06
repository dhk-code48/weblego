import React from "react";

// import { v4 as uuidv4 } from "uuid";
// import writeUserData from "../db/addWebsite";

const Home = () => {
  // const legosite = {
  //   id: uuidv4(),
  //   name: "Lego Site",
  //   createdOn: "2023/16/4",
  //   sections: [
  //     {
  //       sectionName: "Header",
  //       id: uuidv4(),
  //       tag: "div",
  //       styles: {
  //         background: "#000",
  //         width: "100%",
  //         display: "flex",
  //         "justify-content": "space-between",
  //       },
  //       children: [
  //         {
  //           id: uuidv4(),
  //           sectionName: "Header Title",
  //           tag: "div",
  //           styles: { background: "#000" },
  //           children: [
  //             {
  //               id: uuidv4(),
  //               sectionName: "Header Logo",
  //               tag: "h1",
  //               styles: { color: "#fff", "font-size": "20px" },
  //               children: "Lego Site",
  //             },
  //           ],
  //         },
  //         {
  //           sectionName: "Header Navigation",
  //           tag: "ul",
  //           styles: {
  //             display: "flex",
  //             "align-items": "center",
  //             color: "#fff",
  //           },
  //           id: uuidv4(),
  //           children: [
  //             {
  //               tag: "li",
  //               children: "Home",
  //               sectionName: "Header Navigation List",
  //               styles: { margin: "0px 5px" },
  //               id: uuidv4(),
  //             },
  //             {
  //               tag: "li",
  //               children: "About",
  //               sectionName: "Header Navigation List",
  //               styles: { margin: "0px 5px" },
  //               id: uuidv4(),
  //             },
  //             {
  //               tag: "li",
  //               children: "Services",
  //               sectionName: "Header Navigation List",
  //               styles: { margin: "0px 5px" },
  //               id: uuidv4(),
  //             },
  //             {
  //               tag: "li",
  //               children: "Contact",
  //               sectionName: "Header Navigation List",
  //               styles: { margin: "0px 5px" },
  //               id: uuidv4(),
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl font-bold">Create Your Own Website</h1>
      <h3 className="text-xl">With No Code</h3>
      {/* <button onClick={() => writeUserData(legosite)}>Add Data</button> */}
    </div>
  );
};

export default Home;
