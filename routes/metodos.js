'use strict'

var usersDB = require('../db/crud');

exports.getUsers = function(req, res) {
    usersDB.getUsers(function(err, users) {
        res.send(users);
    });
}

exports.addUser = function(req, res) {
    var name = req.body.name;
    var desc = req.body.desc;
    var img = req.body.img;

    usersDB.createUser(name, desc, img, function(err, result) {
        res.status(201).send();
        console.log(req.body);
    });
}