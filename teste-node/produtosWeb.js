var http = require('http');

var server = http.createServer(function(req, res){
    res.end("<html><body><h1>Listando os produtos</h1></body></html>");
});
server.listen(process.env.PORT);

console.log("servidor rodando a mil por hora");