import { async } from "@firebase/util";
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firebase, firestore } from "../firebase.config";

export const saveItem = async (data) => {
    await setDoc (doc(firestore, "computerItems", `${Date.now()}`), data, {
        merge: true

  });
};

