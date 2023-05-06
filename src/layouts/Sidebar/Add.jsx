import React, { useContext } from "react";
import { elements } from "./addData";
import { AppContext } from "../../context";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../db/config";

const Add = () => {
  const { selected } = useContext(AppContext);
  console.log("Selected", selected);
  async function handleAdd(element) {
    await addDoc(collection(firestore, `${selected.path}/Sections`), {
      ...element,
      webId: "gt19dj2ve83",
    })
      .then((e) =>
        localStorage.setItem(
          e.id,
          JSON.stringify({ ...element, webId: "gt19dj2ve83" })
        )
      )
      .finally((e) => console.log("Suggess", e))
      .catch((e) => console.log("Error -> ", e));
  }
  return (
    <div className="mx-3 w-full">
      <p className="text-slate-600 font-medium my-5">Add</p>
      <div className="flex flex-wrap justify-between ">
        {elements.map((element) => {
          const TagName = element.properties.tag;
          return (
            <div
              className="py-3 px-4 border border-gray-100 shadow-sm"
              onClick={() => handleAdd(element.properties)}
            >
              <TagName
                style={{
                  ...element.properties.styles,
                }}
              >
                {element.properties.children}
              </TagName>
              <p className="text-slate-600 font-medium text-center border-t border-gray-200  mt-2">
                {element.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Add;
