import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDS5XrC2VoilPdkYvnBKoo-sVl24Yc3nn0",
  authDomain: "chat-app-34657.firebaseapp.com",
  projectId: "chat-app-34657",
  storageBucket: "chat-app-34657.appspot.com",
  messagingSenderId: "951063695409",
  appId: "1:951063695409:web:d574e71439c042b907c510",
  measurementId: "G-TVCMSJX5X7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();