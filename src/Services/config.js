import { initializeApp } from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
export const app = initializeApp(firebaseConfig);
