import { db } from "@/config/firebase";
import { ref, onValue } from "firebase/database";

const getWebsiteData = async (websiteId: string) => {
  const starCountRef = ref(db, "Websites/" + websiteId);

  return onValue(starCountRef, (snapshot) => {
    return snapshot.val();
  });
};

export default getWebsiteData;
