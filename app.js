const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const Router = require("./routers");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const dbURI = process.env.DATABASE;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(Router);

async function start() {
  try {
    await mongoose.connect(dbURI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

start();

