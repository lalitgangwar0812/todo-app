// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Add Firestore and Authentication imports
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALYQT2sBod-FkSqoDFUaH9rUdDGdcLbK0",
  authDomain: "todo-app-bd007.firebaseapp.com",
  projectId: "todo-app-bd007",
  storageBucket: "todo-app-bd007.firebasestorage.app",
  messagingSenderId: "823429753577",
  appId: "1:823429753577:web:b1041872e12da3c80a1e78",
  measurementId: "G-7PKC6SQ8HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Authentication
const db = getFirestore(app);  // Firestore instance
const auth = getAuth(app);  // Authentication instance

// Export the Firebase app, Firestore, and Authentication for use elsewhere
export { app, db, auth };
