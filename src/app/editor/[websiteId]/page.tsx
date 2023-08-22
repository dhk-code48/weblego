"use client";
import SideTabs from "@/components/editor/SideTabs/SideTabs";
import Inspect from "@/components/editor/Inspect/Inspect";
import Menubar from "@/components/editor/Menubar";
import React, { FC, ReactElement, ReactNode } from "react";
import getWebsiteData from "@/db/getWebsiteData";
import { ref } from "firebase/database";
import {
  useList,
  useObject,
  useObjectVal,
} from "react-firebase-hooks/database";
import { db } from "@/config/firebase";
interface ElementProps {
  childElement: {
    elements: {
      [childId: string]: ElementProps;
    };
  } | null;
  element: keyof JSX.IntrinsicElements;
  type: string;
  content: string;
}

interface websiteDataProps {
  name: string;
  userName: string;
  pages: {
    [pageKey: string]: {
      pageName: string;
      sections: {
        [sectionId: string]: {
          elements: {
            [elementId: string]: ElementProps;
          };
        };
      };
    };
  };
}

interface Elements {
  elements: { [elementId: string]: ElementProps };
}

const RenderData: FC<{ elementData: Elements | string }> = ({
  elementData,
}) => {
  if (typeof elementData === "string") {
    return <>{elementData}</>;
  }

  return (
    <>
      {Object.keys(elementData.elements).map((elementId) => {
        const element = elementData.elements[elementId];
        const Tag = element.element;

        return (
          <Tag key={elementId}>
            {typeof element.childElement !== "string" ? (
              <RenderData elementData={element.childElement} />
            ) : (
              <RenderData elementData={element.childElement} />
            )}
          </Tag>
        );
      })}
    </>
  );
};

const Editor: FC<{
  params: { websiteId: string };
}> = ({ params }) => {
  const [value, loading, error] = useObjectVal<websiteDataProps>(
    ref(db, "websites/uid")
  );
  console.log("value ", value?.pages["pageId-123"]);
  console.log("loading ", loading);
  console.log("error ", error);

  return (
    <>
      <Menubar />
      <div className="flex justify-between">
        <SideTabs />
        <div className="flex-1 w-full">
          {value !== undefined &&
            Object.keys(value.pages["pageId-123"].sections).map((sectionId) => {
              return (
                <RenderData
                  elementData={
                    value?.pages["pageId-123"].sections[sectionId].elements
                  }
                />
              );
            })}
        </div>
        <Inspect />
      </div>
    </>
  );
};

export default Editor;
