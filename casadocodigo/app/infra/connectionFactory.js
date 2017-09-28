var mysql = require("mysql");

var createDBConnection = function (){
    if(process.env.NODE_ENV == "development"){
        return mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'casadocodigo'
        });
    }
    
    if(process.env.NODE_ENV == "test"){
        return mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'casadocodigo_test'
        });
    }
}

module.exports = function(){
    return createDBConnection;
}