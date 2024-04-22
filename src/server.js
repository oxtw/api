const express = require ('express');

const routes = require("./routes/index.js");

const app = express();
app.use(express.json())

app.use(routes);

const PORT = 3333;// porta que está inicializando a API
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
