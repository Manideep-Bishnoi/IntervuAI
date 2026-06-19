
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-7f5f2.firebaseapp.com",
  projectId: "ai-interview-agent-7f5f2",
  storageBucket: "ai-interview-agent-7f5f2.firebasestorage.app",
  messagingSenderId: "709684091010",
  appId: "1:709684091010:web:2ee08124e4194af43bfc9b",
  measurementId: "G-5W29C0EB1X"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}