import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { app } from '../../firebase/firebase'


const db = getFirestore(app);
export const getOperarios = async () => {
    const operarios = [];
    const collections = collection(db, "operarios");
    const snapshot = await getDocs(collections);
    snapshot.forEach((doc) => {
        const dataOperaio = {
            id: doc.id,
            nombre: doc.data().nombre,
            cedula: doc.data().cedula,
        }
        operarios.push(dataOperaio);
    });
    return operarios;
};
