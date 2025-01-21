// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkN65aKW-vvUwU7uDYxn-fi72nwocmOzg",
  authDomain: "netflixgpt-51433.firebaseapp.com",
  projectId: "netflixgpt-51433",
  storageBucket: "netflixgpt-51433.firebasestorage.app",
  messagingSenderId: "113220226678",
  appId: "1:113220226678:web:deca92734175fc9c2a5957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);