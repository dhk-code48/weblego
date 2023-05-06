import { ref, set } from "firebase/database";
import { db } from "./config";

function writeUserData(data) {
  set(ref(db, "newuser/Websites/LegoSite"), {
    ...data,
  });
}
export default writeUserData;
