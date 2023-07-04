import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
  apiKey: "AIzaSyBPLS6ZYM6WkGXuPRZlgdn692ccqep1M14",
  authDomain: "fir-chat-app-7902a.firebaseapp.com",
  projectId: "fir-chat-app-7902a",
  storageBucket: "fir-chat-app-7902a.appspot.com",
  messagingSenderId: "263663572903",
  appId: "1:263663572903:web:f5f630bb751aba0e520882"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
