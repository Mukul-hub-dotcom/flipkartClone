import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
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

export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;
export let paytmParams={}
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuid()
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='100';
// paytmParams['CALLBACK_URL']='http://localhost:8000/callback';
paytmParams['EMAIL']='ramdevmukul800@gmail.com';
paytmParams['MOBILE_NO']='1234567890';


