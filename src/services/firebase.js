// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firbaseSignOut, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEx1npkPQ7xBSTI6VwJ9I4dW-0l8-4Ggc",
    authDomain: "reactpr-e03b7.firebaseapp.com",
    databaseURL: "https://reactpr-e03b7-default-rtdb.firebaseio.com",
    projectId: "reactpr-e03b7",
    storageBucket: "reactpr-e03b7.appspot.com",
    messagingSenderId: "698739661909",
    appId: "1:698739661909:web:9931b7a8958a6f7728c8dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
    await firbaseSignOut(auth);
}