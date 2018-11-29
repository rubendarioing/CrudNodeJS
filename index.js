'use strict'
var express = require('express');
var app = express();
var utilsDB = require('./db/connection');

var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

utilsDB.connectDB(function(err, db) {
    if (err) {
        console.log('Error connecting to DB');
    } else {
        var routes = require('./routes/routes');
        routes.assignRoutes(app);

        app.listen(port);
        console.log(`Server is listening ${ port }`);
    }
});