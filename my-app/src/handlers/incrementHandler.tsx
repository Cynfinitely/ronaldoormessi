import { doc, updateDoc, increment } from "firebase/firestore";
import db from "../firebase/firebase";

// Atomically increment the population of the city by 50.
async function incrementMessi() {
  const washingtonRef = doc(db, "cities", "DC");

  await updateDoc(washingtonRef, {
    population: increment(50),
  });
}

export default incrementMessi;
