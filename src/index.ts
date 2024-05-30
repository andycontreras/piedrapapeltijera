import express from 'express';
import { fireStore } from './db';

const app = express();
const port = process.env.PORT || 3005;

const userColl = fireStore.collection('users');
const roomColl = fireStore.collection('rooms');

app.get('/api-review', async (req, res) => {
	res.json({
		message: 'Está funcionando',
	});
});

app.get('/room/:id', async (req, res) => {
	const dataRoom = await roomColl.doc(req.params['id']).get();
	if (dataRoom.exists) {
		res.status(201).json({
			message: dataRoom.data(),
		});
	} else {
		res.status(404).json({
			message: "The room doesn't exists",
		});
	}
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
