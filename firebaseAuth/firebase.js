
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBUV5wCWQae2fzkKxWoiMkAV88JvVR5J20",
    authDomain: "chat-me-d8848.firebaseapp.com",
    projectId: "chat-me-d8848",
    storageBucket: "chat-me-d8848.appspot.com",
    messagingSenderId: "356132558319",
    appId: "1:356132558319:web:a02aacee5c4205ef83121a"
};

const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);



