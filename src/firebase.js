// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from 'firebase/auth'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASqQyztk20ept_cT8oJzYfH7nLXEd0Tf8",
  authDomain: "clone-25c4c.firebaseapp.com",
  projectId: "clone-25c4c",
  storageBucket: "clone-25c4c.appspot.com",
  messagingSenderId: "547879423471",
  appId: "1:547879423471:web:0bb83d7fd4a09e77653a1a",
  measurementId: "G-3G73D9G317",
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app)

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export {auth,db};