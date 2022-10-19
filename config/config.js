//Dotenv
require('dotenv').config();
//PARA FORNECER A CONEXÃO COM O BANCO DE DADOS
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "emerson",
  password: process.env.PASSWORD,
  database: "APITest2",
  define: {
    timestamps: true,
  },
};