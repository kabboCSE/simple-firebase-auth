// Do not set firebase config to repo
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtjuJSVUwB9remFP_rrxJqBNigBVvAOi4",
  authDomain: "simple-firebase-auth-713f9.firebaseapp.com",
  projectId: "simple-firebase-auth-713f9",
  storageBucket: "simple-firebase-auth-713f9.firebasestorage.app",
  messagingSenderId: "598050097999",
  appId: "1:598050097999:web:745b7da2f3e40570dfd33a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
