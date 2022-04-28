// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_e0o7sAHuCtEJIITz5iRqerxHmHgcH1s",
    authDomain: "ema-jhon-simple-1aa4f.firebaseapp.com",
    projectId: "ema-jhon-simple-1aa4f",
    storageBucket: "ema-jhon-simple-1aa4f.appspot.com",
    messagingSenderId: "900030518708",
    appId: "1:900030518708:web:f066511b29bd2b07374ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
