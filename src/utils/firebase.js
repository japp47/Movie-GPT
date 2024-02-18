// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGQIH0AWNFejfAJpbLPoGCyskdeg3UGro",
  authDomain: "gpt1-f3c1f.firebaseapp.com",
  projectId: "gpt1-f3c1f",
  storageBucket: "gpt1-f3c1f.appspot.com",
  messagingSenderId: "1060554245083",
  appId: "1:1060554245083:web:cb4969673d72fc93c01dfe",
  measurementId: "G-2Z5J4R0QXH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();