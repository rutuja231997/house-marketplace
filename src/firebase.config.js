// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4mCjK0eqUJLeE3SosPVxzvnP3PugFXTg",
  authDomain: "house-marketplace-app-f0994.firebaseapp.com",
  projectId: "house-marketplace-app-f0994",
  storageBucket: "house-marketplace-app-f0994.appspot.com",
  messagingSenderId: "38412356484",
  appId: "1:38412356484:web:3fbc40c6b38cd5b411abd1",
  measurementId: "G-1D24EFR2ES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
