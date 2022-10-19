//CONFIGURAÇÕES PRINCIPAIS
const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv")

//Config do dotenv
require('dotenv').config();
//Associação
require("../config/associations");

const app = express();

app.use(express.json());
app.use(routes);
//SERVIDOR DA API
app.listen(process.env.PORT);