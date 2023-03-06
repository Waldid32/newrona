import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'


export const login = async (email, password) => await signInWithEmailAndPassword(auth, email, password);
