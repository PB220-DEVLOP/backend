// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX3MljTzCy8xvbDRxteCNOxKNUHNrWedM",
  authDomain: "fir-e17ca.firebaseapp.com",
  projectId: "fir-e17ca",
  storageBucket: "fir-e17ca.appspot.com",
  messagingSenderId: "596337569677",
  appId: "1:596337569677:web:0a86691bfd8fc0588857c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth (app);