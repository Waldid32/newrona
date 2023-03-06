import { doc, collection, setDoc, getFirestore } from "firebase/firestore";
import { app } from '../../firebase/firebase'

const db = getFirestore(app);

export async function addGerentes(data) {
    const collectionRef = collection(db, "gerentes");
    const docRef = doc(collectionRef);
    const addData = {
        nombre: data.nombre,
        correo: data.email,
        password: data.password
    };
    setDoc(docRef, addData);
}