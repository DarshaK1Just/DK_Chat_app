import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6ST8wb2mBuRVspQd7tfQ-u0ddFZ1iz5Q",
  authDomain: "chat-app-e6136.firebaseapp.com",
  projectId: "chat-app-e6136",
  storageBucket: "chat-app-e6136.appspot.com",
  messagingSenderId: "545273214685",
  appId: "1:545273214685:web:ecc6f2c5734a127ea38d34",
  measurementId: "G-ZE9YTZ4H0Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
