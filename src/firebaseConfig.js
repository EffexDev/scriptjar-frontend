import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHDGsIjjTj3zRWoWvy7ZuA3Q1v6oWENQY",
  authDomain: "scriptjar-418ae.firebaseapp.com",
  projectId: "scriptjar-418ae",
  storageBucket: "scriptjar-418ae.firebasestorage.app",
  messagingSenderId: "877989180382",
  appId: "1:877989180382:web:355c297a5c593a250d234f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };