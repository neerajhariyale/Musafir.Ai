// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj2NrWNi7wyoRa6FWCBpIZaWe23Qqbz_o",
  authDomain: "yatra-com.firebaseapp.com",
  projectId: "yatra-com",
  storageBucket: "yatra-com.firebasestorage.app",
  messagingSenderId: "92374336432",
  appId: "1:92374336432:web:4edf1fc0bdcc9d85a90c75",
  measurementId: "G-208EN8TVTP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
