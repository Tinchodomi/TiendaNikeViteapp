// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyAXKcNhSu_eTT_BndT2dKzwk0Pj6FVlItI',
  authDomain: "tiendanike-d698a.firebaseapp.com",
  projectId: "tiendanike-d698a",
  storageBucket: "tiendanike-d698a.appspot.com",
  messagingSenderId: "310372671145",
  appId: "1:310372671145:web:4416e0acdcd6a7877fd3b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
