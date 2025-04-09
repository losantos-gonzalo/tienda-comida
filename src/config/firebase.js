// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVYkf-D7_KqisUPUnNylplrfR_jN3Dow0",
    authDomain: "comida-shop.firebaseapp.com",
    projectId: "comida-shop",
    storageBucket: "comida-shop.firebasestorage.app",
    messagingSenderId: "341261197774",
    appId: "1:341261197774:web:b10bddd4faf640ee09cb9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 1.16m