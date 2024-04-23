require("express-async-errors");

const database = require('./database/sqlite');
const AppError = require('./utils/AppError.js');

const express = require ('express');

const routes = require("./routes/index.js");

const app = express();
app.use(express.json())

app.use(routes);

database();

app.use((error, request, response, next) => {

    if (error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

const PORT = 3333;// porta que está inicializando a API
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
