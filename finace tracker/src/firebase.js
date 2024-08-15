// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-6QXaiDeECpoZyLkhT3DADFMq-qZ_Hbg",
  authDomain: "finance-app-f7c6e.firebaseapp.com",
  projectId: "finance-app-f7c6e",
  storageBucket: "finance-app-f7c6e.appspot.com",
  messagingSenderId: "210601751692",
  appId: "1:210601751692:web:1215d4e2fa6b23fafab7a9",
  measurementId: "G-7NK83WNCTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };