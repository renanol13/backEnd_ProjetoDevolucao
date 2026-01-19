const mongoose = require("mongoose");

const password = process.env.PASSWORD_DATA_BASE;

const connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://macaubasnet13_db_user:${password}@testeestoque.csnlq21.mongodb.net/testando?appName=testeEstoque`
    );
    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados\n " + error);
  }
};

module.exports = connection;
