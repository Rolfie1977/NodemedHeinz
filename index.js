import dotenv from 'dotenv';

import express from "express";

const app = express();

dotenv.config();

const port = process.env.PORT;
const dbhost = process.env.DBHOST;

app.get("/", (req, res) => {
	res.send("Hej verden!");
});

app.get("/about", (req, res) => {
	res.send("Dette er about siden...");
});

app.get("/contact", (req, res) => {
	res.send("Dette er kontakt siden...");
});

app.listen(port, () => {
	console.log("Express server kører....");
});


