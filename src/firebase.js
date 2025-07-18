import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1U8DDx6NyGTk7tOGzTTp7SBEv3HD_c-8",
  authDomain: "auth-project-5be5e.firebaseapp.com",
  projectId: "auth-project-5be5e",
  storageBucket: "auth-project-5be5e.firebasestorage.app",
  messagingSenderId: "999641033646",
  appId: "1:999641033646:web:af640ba5d17e89eee0f63f",
  measurementId: "G-CPTVS76TXN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);