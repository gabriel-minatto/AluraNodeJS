
var http = require('http');

var config = {
    hostname: "localhost",
    port: 8080,
    path: "/produtos",
    method: 'post',
    headers:{
        'Accept': "application/json",
        'Content-type': "application/json"
    }
};

var client = http.request(config,function(res){
    console.log(res.statusCode);
   res.on('data',function(body){
       console.log("" + body);
   }); 
});

var produto = {
    titulo: "",
    preco: 10.3,
    descricao: "node, js e http"
};

client.end(JSON.stringify(produto));