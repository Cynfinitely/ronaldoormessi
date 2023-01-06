import { doc, updateDoc, increment } from "firebase/firestore";
import db from "../firebase/firebase";

async function incrementRonaldo() {
  const ronaldoRef = doc(db, "ronaldoLikes", "1");

  await updateDoc(ronaldoRef, {
    likes: increment(1),
  });
}

export default incrementRonaldo;
