"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
const port = process.env.PORT || 3005;
const userColl = db_1.fireStore.collection('users');
const roomColl = db_1.fireStore.collection('rooms');
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
    }
    else {
        res.status(404).json({
            message: "The room doesn't exists",
        });
    }
});
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
