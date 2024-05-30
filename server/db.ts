import * as admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.DB_CREDENTIAL);
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://pipati-65aee-default-rtdb.firebaseio.com/',
});

const fireStore = admin.firestore();
const rtdb = admin.database();

export { fireStore, rtdb };
