// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";
import {getStorage}  from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "fastcash-a2887.firebaseapp.com",
  projectId: "fastcash-a2887",
  storageBucket: "fastcash-a2887.firebasestorage.app",
  messagingSenderId: "408754721321",
  appId: "1:408754721321:web:03c14fbaec850ebb140238"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage =  getStorage(app);

export{db, storage};
