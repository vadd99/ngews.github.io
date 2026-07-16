import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Konfigurasi (Sesuaikan dengan yang ada di index.html kamu)
const firebaseConfig = {
    apiKey: "AIzaSyA8-TN3r2KNL-XEHZ5lF3-rkVyj2qQe9so",
    authDomain: "ngews-web.firebaseapp.com",
    projectId: "ngews-web",
    storageBucket: "ngews-web.firebasestorage.app",
    messagingSenderId: "1952425136",
    appId: "1:1952425136:web:3267816a6b05772d688775"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Fungsi Login
export function loginGoogle() {
    return signInWithPopup(auth, provider);
}

// Fungsi Logout
export function logoutGoogle() {
    return signOut(auth);
}

// Pantau status login (apakah sedang login atau tidak)
export function cekStatusLogin(callback) {
    onAuthStateChanged(auth, callback);
}
