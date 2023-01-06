import { doc, updateDoc, increment } from "firebase/firestore";
import db from "../firebase/firebase";

// Atomically increment the population of the city by 50.
async function incrementMessi() {
  const messiRef = doc(db, "messiLikes", "1");

  await updateDoc(messiRef, {
    likes: increment(1),
  });
}

export default incrementMessi;
