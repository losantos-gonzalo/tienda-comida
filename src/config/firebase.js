// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb8NUGTufMpUXvdmvRAFxWWKAmIWYNdjY",
    authDomain: "tienda-comida-cb377.firebaseapp.com",
    projectId: "tienda-comida-cb377",
    storageBucket: "tienda-comida-cb377.firebasestorage.app",
    messagingSenderId: "194200707036",
    appId: "1:194200707036:web:c685d85f992733481db919"
};

console.log("se conecta")
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// --- empujar datos a firebase ---

// productos.forEach((prod) => {
//     addDoc(collection(db, 'productos'), prod)
//         .then((elem) => console.log(`se agrego el producto id ${elem.id}`))
//         .catch((error) => console.log(error));
// });