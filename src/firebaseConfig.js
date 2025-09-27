// Import Firebase v9 (modular)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ Remplace les valeurs par celles de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUYpfsz0_2KuS3hpNir2ErQu09vUSk9i8",
  authDomain: "crazee-burger-fe456.firebaseapp.com",
  projectId: "crazee-burger-fe456",
  storageBucket: "crazee-burger-fe456.firebasestorage.app",
  messagingSenderId: "574964132259",
  appId: "1:574964132259:web:91cf0ed88a666b5103d216TON_APP_ID",
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Export des services pour les utiliser ailleurs
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
