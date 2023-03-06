import { doc, collection, setDoc, getFirestore } from "firebase/firestore";
import { app } from '../../firebase/firebase'

const db = getFirestore(app);


export async function addOperarios(data) {
    const collectionRef = collection(db, "operarios");
    const docRef = doc(collectionRef);
    const addData = {
        nombre: data.nombre,
        cedula: data.cedula,
    };
    setDoc(docRef, addData);
}