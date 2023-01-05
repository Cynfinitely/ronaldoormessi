import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect } from "react";

import { firestore } from "../firebase/firebase";

async function getCities(firestore: any) {
  const citiesCol = collection(firestore, "messiLikes");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
  console.log(cityList[0].likes);
  console.log(
    collection(firestore, "ronaldoLikes", "xymfpVTO7Ip2jZJViXHz", "likes")
  );
}

export default getCities;
