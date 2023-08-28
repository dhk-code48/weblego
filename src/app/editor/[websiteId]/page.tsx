"use client";
import SideTabs from "@/components/editor/SideTabs/SideTabs";
import Inspect from "@/components/editor/Inspect/Inspect";
import Menubar from "@/components/editor/Menubar";
import React, { FC, ReactElement, ReactNode } from "react";
import getWebsiteData from "@/db/getWebsiteData";
import { ref } from "firebase/database";
import {
  useObjectVal,
} from "react-firebase-hooks/database";
import { db } from "@/config/firebase";
interface ElementProps {
[elementId:string]:{
    childElement: {
    elements: ElementProps;
  
  } | null;
  element: keyof JSX.IntrinsicElements;
  type: string;
  content: string;
}
}

interface SectionProps{
  elements: ElementProps
  
}

interface websiteDataProps {
  pageName: string, 
  pages:{
    [pageId:string]:{
      sections:{
        [sectionId:string]:SectionProps
      }
    }
  }
}

const RenderData: FC<{ elementData: ElementProps  }> = ({
  elementData,
}) => {

  console.log("ELEMENT DATA => ", elementData)


  return (
    <>
      {Object.keys(elementData).map((elementId) => {
        const element = elementData[elementId];
        const Tag = element.element;

        return (
          <Tag key={elementId}>
            {
              element.childElement ? <RenderData elementData={element.childElement.elements}/>:<>{element.content}</> 
            }
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
      <div className="flex justify-between  h-[calc(100vh-40px)] overflow-hidden">
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
