const dogsController = () => {

    const express = require('express');
    const router = express.Router();

    const TABLE = 'dogs';

    const general = require('../utils/general')();
    let model = general.getDatabaseModel();


    //{{SERVER}}/users/ 
    //Lista todos los usuarios
    router.get('/', function (request, response) {

        if (true)
            model.getAll(TABLE)
                .then((rows) => {
                    response.send(rows);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else response.send({ error: 'No se ha enviado un token' });
    });

    //{{SERVER}}/users/id 
    //Trae un usuario por ID
    router.get('/:id', function (request, response) {
        let id = request.params.id;
        if (general.validateLogin(request))
            model.getById(TABLE, id)
                .then((row) => {
                    response.send(row);
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        else response.send({ error: 'No se ha enviado un token' });
    });

    //{{SERVER}}/users/
    //Crea un usuario 
    router.post('/', (request, response) => {
        // general.validateLogin(request)
        model.create(TABLE, request.body)
        .then(object => {
                    
        response.send(object)
        })
        .catch((error) => {
            console.error(error);
            response.send(error);
        });
        };

    //{{SERVER}}/users/:id
    //Edita un usuario
    router.put('/:id', function (request, response) {
        let id = request.params.id;
        
        model.update(TABLE, request.body, id)
            .then((row) => {
                response.send(row);
            }).catch((error) => {
                console.error(error);
                response.send(error);
            });
    });


    //{{SERVER}}/users/id
    //Elimina un usuario
    router.delete('/:id', function (request, response) {
        let id = request.params.id;
        
        model.delete(TABLE, id)
            .then((message) => {
                response.send(message);
            }).catch((error) => {
                console.error(error);
                response.send(error);
            });
        
    });


    //{{SERVER}}/users/delete_users
    //Limpiar tabla
    router.get('/option/clean', function (request, response) {
        
            model.clean(TABLE)
                .then((message) => {
                    response.send(message)
                }).catch((error) => {
                    console.error(error);
                    response.send(error);
                });
        
    });
    return router;
}

module.exports = dogsController;