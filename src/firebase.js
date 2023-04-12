import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIYMNv_q3TWopHMChqzOIdYdh4d3dJV0g",
  authDomain: "final-chat-22b87.firebaseapp.com",
  projectId: "final-chat-22b87",
  storageBucket: "final-chat-22b87.appspot.com",
  messagingSenderId: "124341868986",
  appId: "1:124341868986:web:4a5f9fd94654e0088b2583"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
