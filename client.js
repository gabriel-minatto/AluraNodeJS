
var http = require('http');

var config = {
    hostname: "localhost",
    port: 8080,
    path: "/produtos",
    headers:{
        Accept: "application/json"
    }
};

http.get(config,function(res){
   res.on('data',function(body){
       console.log("" + body);
   }); 
});