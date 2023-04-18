// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0oudVuIPzOe0rgiSH8mqKzvlI-Kb1Fhs",
  authDomain: "project-todo-38a89.firebaseapp.com",
  projectId: "project-todo-38a89",
  storageBucket: "project-todo-38a89.appspot.com",
  messagingSenderId: "297497060062",
  appId: "1:297497060062:web:a801e4df90d512b6fe184f",
  measurementId: "G-9B811406FR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
