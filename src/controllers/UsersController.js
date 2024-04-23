const AppError = require ("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
    /**
     * index - GET para listar varios registros.
     * show - GET para exibir um registro específico.
     * create - POST para poder criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */

    //método create
     async create(request, response){
        const {name , email, password} = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUserExists){
            throw new AppError("Este e-mail já está em uso.");
        }

        return response.status(201).json()

        // //se o nome não existe:
        // if(!name){
        //     throw new AppError("Nome é obrigatório!");
        // }

        // response.status(201).json({name , email, password});
    }
}

module.exports= UsersController;