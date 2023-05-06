import { EditerHeader, Inspect, Sidebar, WebView } from "../layouts";
import { Error } from "../views";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { firestore } from "../db/config";
import { collectionGroup, query, where, onSnapshot } from "firebase/firestore";

const Editor = () => {
  const { userUid, websiteName } = useParams();
  const [sections, setSections] = useState([]);
  const [tree, setTree] = useState([]);
  const [updatedTree, setUpdatedTree] = useState([]);

  useEffect(() => {
    const section = query(
      collectionGroup(firestore, "Sections"),
      where("webId", "==", "gt19dj2ve83")
    );

    const unsub = onSnapshot(section, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        parent:
          doc.ref.parent.path.split("/")[
            doc.ref.parent.path.split("/").length - 2
          ],
        path: doc.ref.path,
        ...doc.data(),
      }));
      setSections(data);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    const createTree = (data, parent) => {
      let tree = [];
      data
        .filter((item) => item.parent === parent)
        .forEach((item) => {
          let children = createTree(data, item.id);
          if (children.length > 0) {
            item.children = children;
          }
          tree.push(item);
        });
      return tree;
    };

    const treeData = createTree(sections, "7V3XahXPovLTdYSFsMle");
    setTree(treeData);
  }, [sections]);

  useEffect(() => {
    setUpdatedTree(tree);
  }, [tree]);

  return (
    <div>
      <EditerHeader websiteName={websiteName} />
      <div className="bg-slate-50 h-screen flex justify-between">
        <Sidebar website={tree} />
        <WebView website={updatedTree} />
        <Inspect />
      </div>
    </div>
  );
};

export default Editor;
