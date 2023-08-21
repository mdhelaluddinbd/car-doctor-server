require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/config.main");

const port = process.env.PORT || 5000;

// --------------------Using Middleware----------------------------
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
