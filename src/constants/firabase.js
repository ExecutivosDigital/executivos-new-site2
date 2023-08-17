import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAaZmcC1syPq8gee9sgpm9TOtaJ9e5RQWE",
    authDomain: "executivos-digital.firebaseapp.com",
    projectId: "executivos-digital",
    storageBucket: "executivos-digital.appspot.com",
    messagingSenderId: "74884359792",
    appId: "1:74884359792:web:c44efdc4c3ce79bac3f6b5",
    measurementId: "G-JXKX2YDXM8"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

