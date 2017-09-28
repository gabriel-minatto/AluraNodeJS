/*var express = require('express');
var app = express();
app.set('view engine','ejs');*/

require('dotenv').config(); //load env variables setted in .env file

var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

http.listen(process.env.PORT,function(){
    console.log("servidor rodando loucamente");
});