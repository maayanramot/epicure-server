import express from "express";
import router from '../src/routes/index'
import bodyParser from "body-parser"
import cors from "cors"
import { connectToDB } from "./connection";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use(router)

app.listen(8000, () => console.log("Listening on https://web-server-hmw0.onrender.com"));

connectToDB()