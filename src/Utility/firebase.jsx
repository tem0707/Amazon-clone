import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_uuXi5Txv2Uab7CIqgRDyJQdGnYZs_jo",
  authDomain: "clone-1f6b8.firebaseapp.com",
  projectId: "clone-1f6b8",
  storageBucket: "clone-1f6b8.firebasestorage.app",
  messagingSenderId: "244437485631",
  appId: "1:244437485631:web:9921f83399810b5b9d508a",
  measurementId: "G-3MV7CP1V88",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
