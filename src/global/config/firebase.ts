// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJe8CCMjqONwf2tqSvw_VNPzLDaeCe3CE",
  authDomain: "index-pre-testing.firebaseapp.com",
  projectId: "index-pre-testing",
  storageBucket: "index-pre-testing.appspot.com",
  messagingSenderId: "1074265517145",
  appId: "1:1074265517145:web:38c98f5df5fe53a0985548",
  measurementId: "G-WQZ6T390GJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);