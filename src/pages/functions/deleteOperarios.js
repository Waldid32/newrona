import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { app } from '../../firebase/firebase'

const db = getFirestore(app);

export const deleteOperarios = async (uid) => {
    await deleteDoc(doc(db, "operarios", uid));
}
