// Import Firebase App and Firestore using require
const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6VO-5Hy5loEc1IWenMXQP0M6b8hVTfR8",
  authDomain: "crudoperations-9289c.firebaseapp.com",
  projectId: "crudoperations-9289c",
  storageBucket: "crudoperations-9289c.appspot.com",
  messagingSenderId: "578083488420",
  appId: "1:578083488420:web:366ea2d00c64b45bbe9c31",
  measurementId: "G-FRGEM3N353",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Reference to the Users collection
const User = collection(db, "Users");

// Export the User collection reference
module.exports = { User, db };
