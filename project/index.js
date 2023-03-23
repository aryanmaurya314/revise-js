const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./database');
dotenv.config();

const app = express();

async function start() {
  try {
    const db = await connectDb();
    app.listen(process.env.PORT, function () {
      console.log(`Server is running at: http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();
