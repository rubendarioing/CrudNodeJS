'use strict'

var MongoClient = require('mongodb').MongoClient;


var db;
var url = "mongodb://localhost:27017/";

exports.getDbConnection = function() {
    return db;
};


exports.connectDB = function(callback) {
    MongoClient.connect("mongodb://localhost:27017/NodeMongoDB", function(err, dbConnection) {
        db = dbConnection.db("NodeMongoDB");
        callback(err, dbConnection);
    });
}