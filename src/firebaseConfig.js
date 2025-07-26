// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVi8LTOmGg3UEgsaRfAX5E05S6ABHTiBc",
  authDomain: "jobcard-c6c2f.firebaseapp.com",
  projectId: "jobcard-c6c2f",
  storageBucket: "jobcard-c6c2f.firebasestorage.app",
  messagingSenderId: "777440509903",
  appId: "1:777440509903:web:22eb361c6f9583daeb9cba",
  measurementId: "G-C3PJB323JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;