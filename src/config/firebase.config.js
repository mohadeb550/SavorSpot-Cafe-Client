
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD53uHjyeKfyF-YiQRIWJXnQ4TO4qIEHDM",
  authDomain: "savorspot-cafe.firebaseapp.com",
  projectId: "savorspot-cafe",
  storageBucket: "savorspot-cafe.appspot.com",
  messagingSenderId: "1023895987527",
  appId: "1:1023895987527:web:176366cd1de4a2de0cd862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;