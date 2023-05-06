// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJGnm3xmhoO-21BUZ1q9ggAXwHNBbP0eg",
  authDomain: "dhk-weblego.firebaseapp.com",
  projectId: "dhk-weblego",
  storageBucket: "dhk-weblego.appspot.com",
  messagingSenderId: "553203987223",
  appId: "1:553203987223:web:82d4828dc8ced5fe36fd52",
  measurementId: "G-Q186QXPLC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const firestore = getFirestore(app);
