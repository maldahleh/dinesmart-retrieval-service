import {initializeApp} from "firebase-admin/app";
import {credential} from "firebase-admin";
import {getFirestore} from "firebase-admin/firestore";

const FIRESTORE_COLLECTION = "inspections";
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

initializeApp({
  credential: credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

const db = getFirestore();
let inspectionData = JSON.stringify([]);

const loadData = async () => {
  await db
      .collection(FIRESTORE_COLLECTION)
      .get()
      .then((querySnapshot) => {
        const fetchedDocuments = querySnapshot.docs
            .map((doc) => doc.data());
        inspectionData = JSON.stringify(fetchedDocuments);
      });

  console.log(inspectionData);
  setTimeout(loadData, ONE_DAY_IN_MS);
};

export {loadData, inspectionData};
