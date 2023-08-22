import SideTabs from "@/components/editor/SideTabs/SideTabs";
import Inspect from "@/components/editor/Inspect/Inspect";
import Menubar from "@/components/editor/Menubar";
import React, { FC } from "react";

const Editor: FC = () => {
  return (
    <>
      <Menubar />
      <div className="flex justify-between">
        <SideTabs />
        <Inspect />
      </div>
    </>
  );
};

export default Editor;
