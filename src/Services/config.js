// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPVhYbRn6ainLs3hXzOTByrCz_l0TM3rA",
  authDomain: "teste-b55c6.firebaseapp.com",
  databaseURL: "https://teste-b55c6.firebaseio.com",
  projectId: "teste-b55c6",
  storageBucket: "teste-b55c6.appspot.com",
  messagingSenderId: "607857395291",
  appId: "1:607857395291:web:877c8a5d88bb85cf16a17e",
  measurementId: "G-76LSNTGNGS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
