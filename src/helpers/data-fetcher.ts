import {initializeApp} from 'firebase-admin/app';
import {credential} from "firebase-admin";
import {getFirestore} from 'firebase-admin/firestore';

initializeApp({
    credential: credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
    }),
});

const db = getFirestore();
let inspectionData = JSON.stringify([]);

const boot = () => {
    loadData();
    setInterval(loadData, 86400 * 1000);
};

const loadData = async () => {
    await db
        .collection('inspections')
        .get()
        .then((querySnapshot) => inspectionData = JSON.stringify(querySnapshot.docs.map(doc => doc.data())));
    console.log(inspectionData)
};

const getData = () => inspectionData;

export { boot, getData };
