import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'


export const createEmail = async (data) => {

    const { email, password } = data;
    await createUserWithEmailAndPassword(auth, email, password);
}

