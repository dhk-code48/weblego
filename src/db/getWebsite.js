import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

import { db } from "./config";

const useToGetWebsite = (userUid, websiteName) => {
  const [website, setwebsites] = useState([]);
  const docRef = ref(db, `/${userUid}/Websites/${websiteName}`);

  async function getData() {
    onValue(docRef, (snapshot) => {
      if (snapshot.exists) {
        const data = snapshot.val();
        setwebsites(data);
      } else {
        setwebsites("NotFound");
      }
    });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return website;
};
export default useToGetWebsite;
