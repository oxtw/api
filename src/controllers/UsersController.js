const AppError = require ("../utils/AppError");

class UsersController {
    /**
     * index - GET para listar varios registros.
     * show - GET para exibir um registro específico.
     * create - POST para poder criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */

    //método create
    create(request, response){
        const {name , email, password} = request.body;

        //se o nome não existe:
        if(!name){
            throw new AppError("Nome é obrigatório!");
        }

        response.status(201).json({name , email, password});
    }
}

module.exports= UsersController;