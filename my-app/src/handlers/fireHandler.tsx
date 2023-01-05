import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import db from "../firebase/firebase";

async function getCities(db: any) {
  const citiesCol: any = collection(db, "messiLikes");
  const citySnapshot: any = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc: any) => doc.data());
  console.log(cityList);
  console.log(cityList[0].likes);
}

export default getCities;
