import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBdQ_hOpWUO3KZo6i0V8vQGqmHAh0e6t1w",
  authDomain: "tiktok---jornada-dev-eba-de3e6.firebaseapp.com",
  projectId: "tiktok---jornada-dev-eba-de3e6",
  storageBucket: "tiktok---jornada-dev-eba-de3e6.appspot.com",
  messagingSenderId: "675715072753",
  appId: "1:675715072753:web:2a5dea089d73872e5a1f50",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
