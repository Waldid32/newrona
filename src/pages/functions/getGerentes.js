import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { app } from '../../firebase/firebase'


const db = getFirestore(app);

export const getGerentes = async () => {
    const gerentes = [];
    const collections = collection(db, "gerentes");
    const snapshot = await getDocs(collections);
    snapshot.forEach((doc) => {
        const dataGerente = {
            id: doc.id,
            nombre: doc.data().nombre,
            correo: doc.data().correo,
        }
        gerentes.push(dataGerente);
    });
    return gerentes;
};
