// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDyTVm5FV6ASAWe2s7gGpSJsEX2epfLnKk",
  authDomain: "sevarat-57852.firebaseapp.com",
  projectId: "sevarat-57852",
  storageBucket: "sevarat-57852.appspot.com",
  messagingSenderId: "476378565566",
  appId: "1:476378565566:web:0623ecf4edb3d5a5b587ef",
  measurementId: "G-1TZ51MN4K2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }