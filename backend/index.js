//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuid } from 'uuid';


//Components
import Connection from './DBConnection/dbconnect.js';
import DefaultData from './default.js';
import Routes from './routes/routes.js';


dotenv.config();

const app = express();

//middleware
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/', Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT, () => console.log(`Server is Successfully Run on PORT ${PORT}`));

//Send data in databse
DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};

paytmParams['MID'] = process.env.PAYTM_MERCHANT_ID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE;
paytmParams['ORDER_ID'] = uuid(),
    paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
    paytmParams['TXN_AMOUNT'] = '100',
    paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'gosaviumakant84@gmail.com'
paytmParams['MOBILE_NO'] = '8421327304'
