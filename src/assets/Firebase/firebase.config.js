// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZZyyFU2_A2TtjcE4dXLbltmsMiJ8jRVE",
  authDomain: "email-password-auth-806a4.firebaseapp.com",
  projectId: "email-password-auth-806a4",
  storageBucket: "email-password-auth-806a4.appspot.com",
  messagingSenderId: "725920010338",
  appId: "1:725920010338:web:de7ab15fd8a10e0ccfc13b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;