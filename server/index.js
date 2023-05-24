import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const port = 8000;

const userName = process.env.DB_USERNAME;
const pasw = process.env.DB_PASSW;

app.listen(port, () => {
  Connection(userName, pasw);

  console.log(`Server is running at ${port}`);
});

DefaultData();
