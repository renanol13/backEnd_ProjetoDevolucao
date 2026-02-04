const app = require("./src/App");
const connection = require("./src/data/connection_db.js")

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor ligado");
  connection();
});
