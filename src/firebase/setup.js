import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1GeKTVKiLDds7bbh6eqjApkzhZR8y2l8",
    authDomain: "clone-news-dian.firebaseapp.com",
    projectId: "clone-news-dian",
    storageBucket: "clone-news-dian.appspot.com",
    messagingSenderId: "554372250016",
    appId: "1:554372250016:web:c43b5c7b2b0ec37613ccc5"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();