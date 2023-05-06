import React from "react";
import useToListWebsite from "../db/listWebsites";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { AppSidebar, AppHeader } from "../layouts";

const Websites = () => {
  const { userUid } = useParams();

  const websiteList = useToListWebsite(userUid);

  console.log(websiteList);

  return (
    <div className="ml-[250px] mt-20">
      <AppHeader />
      <AppSidebar />
      {websiteList !== "Not Found" && websiteList ? (
        Object.keys(websiteList).map((website, index) => (
          <div key={index + 1}>{websiteList[website].website_name}</div>
        ))
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Websites;
