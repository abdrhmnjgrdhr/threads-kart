
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyDOsPw52d9woNlehzkNzyXZzL3zPW_lwnQ",
  authDomain: "threads-kart.firebaseapp.com",
  projectId: "threads-kart",
  storageBucket: "threads-kart.appspot.com",
  messagingSenderId: "1054118041249",
  appId: "1:1054118041249:web:89c347ca82900e1a7502e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth()

export{app,auth}