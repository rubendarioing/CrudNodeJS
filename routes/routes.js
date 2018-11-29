'use strict'

var users = require('./metodos')

exports.assignRoutes = function(app) {
    app.get('/users', users.getUsers);
    app.post('/users', users.addUser);

}