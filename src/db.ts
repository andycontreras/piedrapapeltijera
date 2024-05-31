import 'dotenv/config';
import * as admin from 'firebase-admin';

// const GOOGLE_CLOUD_CREDENTIALS = JSON.parse(
// 	Buffer.from(process.env.GOOGLE_CREDENTIALS!, 'base64').toString('utf-8')
// );
const serviceAccount = JSON.parse(process.env.GOOGLE_CREDENTIALS);
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://pipati-65aee-default-rtdb.firebaseio.com/',
});

const fireStore = admin.firestore();
const rtdb = admin.database();

export { fireStore, rtdb };
