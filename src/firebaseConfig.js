// src/firebaseConfig.js
// ⚠️ Remplace les valeurs par celles de ton projet Firebase (dans la console Firebase)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_PROJECT_ID.appspot.com",
  messagingSenderId: "VOTRE_ID",
  appId: "VOTRE_APP_ID",
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
