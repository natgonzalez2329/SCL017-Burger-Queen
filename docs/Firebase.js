// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfN5jNflGzq0Dh6dQNzk478lwMmYDu33U",
  authDomain: "mr-burger-b0ac8.firebaseapp.com",
  projectId: "mr-burger-b0ac8",
  storageBucket: "mr-burger-b0ac8.appspot.com",
  messagingSenderId: "1051185085653",
  appId: "1:1051185085653:web:7b5e5535e8e4778bfc765c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;