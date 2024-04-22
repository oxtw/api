const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router ();

const usersController = new UsersController();

function myMiddleware(request, response, next){
    console.log("Você passou pelo middleware");

    //Se o usuário não for admin
    if(!request.body.isAdmin){
        return response.json({
            message: "user unauthorized"
        });
    }

    next();
}

// usersRoutes.use(myMiddleware);
usersRoutes.post("/", myMiddleware ,usersController.create);

module.exports = usersRoutes;