const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
require("./config/dbconfig");

app.use(cors());
app.use(routes);
app.use(express.json());

app.listen(3333);
