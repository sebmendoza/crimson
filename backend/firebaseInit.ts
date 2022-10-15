import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;