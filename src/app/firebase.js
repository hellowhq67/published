import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk6U2R5AZ0PRquc89ZEmydpraMp_tzMc8",
  authDomain: "gariled-users.firebaseapp.com",
  projectId: "gariled-users",
  storageBucket: "gariled-users.appspot.com",
  messagingSenderId: "21219774430",
  appId: "1:21219774430:web:6dc890332b490594cad74f"
};
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth= getAuth(app)