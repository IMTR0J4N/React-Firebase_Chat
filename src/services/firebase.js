// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnb7owY_ba8BqDyFg97wf6XJ0AL8SdOn8",
  authDomain: "react-firebase-chat-fb5a9.firebaseapp.com",
  projectId: "react-firebase-chat-fb5a9",
  storageBucket: "react-firebase-chat-fb5a9.appspot.com",
  messagingSenderId: "257367697702",
  appId: "1:257367697702:web:bc5e654f528321b84339e7",
  measurementId: "G-DN6CBC3LV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);