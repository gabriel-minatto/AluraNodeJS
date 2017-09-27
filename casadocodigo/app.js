/*var express = require('express');
var app = express();
app.set('view engine','ejs');*/

var app = require('./config/express')();
//var  produtosRouter = require('./app/routes/produtos')(app);

app.listen(process.env.PORT,function(){
    console.log("servidor rodando loucamente");
});