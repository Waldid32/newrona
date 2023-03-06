import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { config } from '../config/config'


export const app = initializeApp(config.firebaseConfig);

export const auth = getAuth(app);   