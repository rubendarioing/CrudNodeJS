'use strict'

var connectDB = require('./connection');
var ObjectID = require('mongodb').ObjectID;


var db = connectDB.getDbConnection();
var usersCollection;

//db.createCollection('users')

db.createCollection('users', function(err, collection) {
    if (err) throw err;
    usersCollection = collection;
    console.log('Collection created');
});

exports.createUser = function(name, desc, img, callback) {
    usersCollection.insert({ name: name, desc: desc, img: img }, { w: 1 }, callback);
}

exports.getUsers = function(callback) {
    usersCollection.find().toArray(callback);
}