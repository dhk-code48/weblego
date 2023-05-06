import React, { useContext, useEffect, useState } from "react";
import {
  MdGrid3X3,
  MdOutlineSegment,
  MdRotate90DegreesCcw,
  MdRoundedCorner,
} from "react-icons/md";

import { AppContext } from "../context";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../db/config";

const Inspect = () => {
  const { selected, setSelected } = useContext(AppContext);

  const [ml, setMl] = useState();
  const [mr, setMr] = useState();
  const [mt, setMt] = useState();
  const [mb, setMb] = useState();
  const [pt, setPt] = useState();
  const [pb, setPb] = useState();
  const [pl, setPl] = useState();
  const [pr, setPr] = useState();
  const [width, setWidth] = useState();
  const [br, setBr] = useState();
  const [height, setHeight] = useState();
  const [bg, setBg] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    setMl(selected?.styles.marginLeft ? selected.styles.marginLeft : 0);
    setMr(selected?.styles.marginRight ? selected.styles.marginRight : 0);
    setMt(selected?.styles.marginTop ? selected.styles.marginTop : 0);
    setMb(selected?.styles.marginBottom ? selected.styles.marginBottom : 0);
    setPt(selected?.styles.paddingTop ? selected.styles.paddingTop : 0);
    setPb(selected?.styles.paddingBottom ? selected.styles.paddingBottom : 0);
    setPl(selected?.styles.paddingLeft ? selected.styles.paddingLeft : 0);
    setPr(selected?.styles.paddingRight ? selected.styles.paddingRight : 0);
    setWidth(selected?.styles.width ? selected.styles.width : "auto");
    setBr(selected?.styles.borderRadius ? selected.styles.borderRadius : 0);
    setHeight(selected?.styles.height ? selected.styles.height : "auto");
    setBg(selected?.styles.background ? selected.styles.background : "#fff");
    setColor(selected?.styles.color ? selected.styles.color : "#000");
  }, [selected]);

  const [tarnsform, setTarnsform] = useState(0);
  // const [spacing,setSpacing] = useState({})

  useEffect(() => {
    setSelected((prev) => ({
      ...prev,
      styles: {
        ...prev?.styles,
        marginLeft: parseInt(ml),
        marginRight: parseInt(mr),
        marginTop: parseInt(mt),
        marginBottom: parseInt(mb),
        paddingTop: parseInt(pt),
        paddingBottom: parseInt(pb),
        paddingLeft: parseInt(pl),
        paddingRight: parseInt(pr),
        width: width,
        height: height,
        borderRadius: parseInt(br),
        color: color,
        background: bg,
      },
    }));

    // eslint-disable-next-line
  }, [pl, mr, ml, pr, mb, pb, mt, pt, width, height, br, bg, color]);

  useEffect(() => {
    if (selected) {
      window.localStorage.setItem(selected.id, JSON.stringify(selected));
      setDoc(doc(firestore, selected.path), { ...selected });
    }
  }, [selected]);

  return (
    <div className="bg-white h-screen w-[300px] border-l border-gray-200 pt-5 px-5">
      {selected ? (
        <div>
          <div className="pb-1 border-b border-gray-200">
            <p className="text-gray-600 font-medium tracking-wide">Selector</p>
            <div className=" bg-gray-100 rounded-lg flex items-center px-5 my-3 py-2 w-[100%]">
              {typeof selected.children !== "string" ? (
                <MdGrid3X3 size={19} />
              ) : (
                <MdOutlineSegment size={19} />
              )}
              <p className="ml-3  font-medium text-gray-800">
                {selected.sectionName}
              </p>
            </div>
          </div>
          <div className="border-b border-gray-200 py-2">
            <div className="justify-between w-full flex overflow-hidden mt-3">
              <div className="bg-gray-100 rounded-3xl flex-1 h-10 items-center flex px-3 mr-3">
                W
                <input
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="bg-gray-100 rounded-3xl w-[90%] outline-none pl-4"
                />
              </div>
              <div className="bg-gray-100 rounded-3xl flex overflow-hidden items-center px-3 flex-1 ml-3">
                H
                <input
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-gray-100 w-[90%] outline-none pl-4"
                />
              </div>
            </div>
            <div className="justify-between w-full flex overflow-hidden my-3">
              <div className="bg-gray-100 rounded-3xl flex-1 h-10 items-center flex px-3 mr-3">
                <MdRotate90DegreesCcw />
                <input
                  value={tarnsform}
                  onChange={(e) => setTarnsform(e.target.value)}
                  className="bg-gray-100 rounded-3xl w-[90%] outline-none pl-4"
                />
              </div>
              <div className="bg-gray-100 rounded-3xl flex overflow-hidden items-center px-3 flex-1 ml-3">
                <MdRoundedCorner />
                <input
                  value={br}
                  onChange={(e) => setBr(e.target.value)}
                  className="bg-gray-100 w-[90%] outline-none pl-4"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-gray-600 font-medium tracking-wide">
              Spacing in px
            </p>
            <div className="w-full p-2 h-[200px] border border-dashed border-gray-600 rounded-xl my-3 bg-orange-50 overflow-hidden flex flex-col justify-between items-center">
              <input
                className="text-center rounded bg-transparent outline-none"
                value={mt}
                onChange={(e) => setMt(e.target.value)}
              />
              <div className="flex w-full justify-between flex-1 my-2">
                <input
                  className="text-center rounded bg-transparent h-6 self-center outline-none w-7"
                  value={ml}
                  onChange={(e) => setMl(e.target.value)}
                />
                <div className="p-2 flex-1 mx-3 bg-blue-50 rounded-xl border-gray-600 border border-dashed overflow-hidden flex flex-col justify-between items-center">
                  <input
                    className="text-center rounded bg-transparent outline-none"
                    value={pt}
                    onChange={(e) => setPt(e.target.value)}
                  />
                  <div className="flex w-full justify-between">
                    <input
                      className="text-center rounded bg-transparent h-6 self-center outline-none w-7"
                      value={pl}
                      onChange={(e) => setPl(e.target.value)}
                    />
                    <div className="h-[20px] w-[40%] bg-gray-600 rounded"></div>
                    <input
                      className="text-center rounded bg-transparent h-6 self-center outline-none w-7"
                      value={pr}
                      onChange={(e) => setPr(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      className="text-center rounded bg-transparent outline-none"
                      value={pb}
                      onChange={(e) => setPb(e.target.value)}
                    />
                  </div>
                </div>
                <input
                  className="text-center rounded bg-transparent h-6 self-center outline-none w-7"
                  value={mr}
                  onChange={(e) => setMr(e.target.value)}
                />
              </div>
              <input
                className="text-center rounded bg-transparent outline-none"
                value={mb}
                onChange={(e) => setMb(e.target.value)}
              />
            </div>
          </div>
          <div className="border-y border-gray-300 py-5 mt-3">
            <div>
              <p className="text-gray-800 font-medium">Color</p>
              <div className="flex items-center hover:outline hover:outline-gray-100 group w-[50%]">
                <input
                  type="color"
                  placeholder="Colors for element"
                  value={color}
                  className="w-6 h-6 bordre-none outline-none shadow-none"
                  onChange={(e) => setColor(e.target.value)}
                />
                <input
                  type="text"
                  className="outline-none text-gray-800 group-hover:outline group-hover:outline-gray-100 h-full w-[75%] pl-2 ml-3"
                  placeholder="Colors for element "
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              Background
              <input
                type="color"
                value={bg}
                placeholder="Background for element "
                onChange={(e) => setBg(e.target.value)}
              />{" "}
              <input
                type="text"
                value={bg}
                placeholder="Background for element "
                onChange={(e) => setBg(e.target.value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>Background</div>
      )}
    </div>
  );
};

export default Inspect;
