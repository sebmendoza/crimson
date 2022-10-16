import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth'

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9SH2ol3nrKcQcukekUcuiuhG9T48wC18",
  authDomain: "crimsoncrashers.firebaseapp.com",
  databaseURL: "https://crimsoncrashers-default-rtdb.firebaseio.com",
  projectId: "crimsoncrashers",
  storageBucket: "crimsoncrashers.appspot.com",
  messagingSenderId: "974292841830",
  appId: "1:974292841830:web:b144cfbe89d64a169ac4a7",
  measurementId: "G-VPFSHDY4CJ"
};

// firebase initialization
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = getAuth(app);
