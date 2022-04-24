// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJaJWYY967XvqTzPUXov8XHst0Lnd2Qrw",
  authDomain: "twitter-b0b0f.firebaseapp.com",
  projectId: "twitter-b0b0f",
  storageBucket: "twitter-b0b0f.appspot.com",
  messagingSenderId: "884306535635",
  appId: "1:884306535635:web:199757fa78bd600a372026"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);