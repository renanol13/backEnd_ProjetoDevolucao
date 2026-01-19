const cors = require("cors");
const express = require("express");
const app = express();

require("dotenv").config()

app.use(express.json());
app.use(cors());

const routers = require("./routers/Router")
app.use('/', routers)

module.exports = app;
