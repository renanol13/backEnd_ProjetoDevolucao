const app = require("./src/App");

const PORT = process.env.PORT | 3001;

app.listen(PORT,() => console.log("Servidor ligado"));
