var express = require('../config/express')();
var request = require('supertest')(express);

describe("#ProdutosController",function(){
    
    beforeEach(function(done){
        var conn = express.infra.connectionFactory();
        conn.query("delete from produtos",function(err, result){
            if(!err){
                done();   
            }
        });
    });
    
    it("##Listagem Json", function(done){

        request.get('/produtos')
        .set("Accept","application/json")
        .expect("content-type",/json/)
        .expect(200,done);
        
    });
    
    it("##Listagem HTML", function(done){

        request.get('/produtos')
        .set("Accept","text/html")
        .expect("content-type",/html/)
        .expect(200,done);
        
    });
    
    it("##Cadastro de novo produto com dados inválidos em json", function(done){
        
        request.post('/produtos')
        .set("Accept","application/json")
        .send({titulo:"",descricao:"novo produto"})
        .expect("content-type",/json/)
        .expect(400,done);
        
    });
    
     it("##Cadastro de novo produto com dados inválidos em html", function(done){
        
        request.post('/produtos')
        .set("Accept","text/html")
        .send({titulo:"",descricao:"novo produto"})
        .expect("content-type",/html/)
        .expect(400,done);
        
    });
    
    it("##Cadastro de novo produto com dados válidos em json", function(done){
        
        request.post('/produtos')
        .set("Accept","application/json")
        .send({titulo:"livro daora",descricao:"novo produto",preco:10.5})
        //.expect("content-type",/json/)
        .expect(302,done);
        
    });
    
    it("##Cadastro de novo produto com dados válidos em html", function(done){
        
        request.post('/produtos')
        .set("Accept","text/html")
        .send({titulo:"livro daora",descricao:"novo produto",preco:20.5})
        .expect("content-type",/html/)
        .expect(302,done);
        
    });
});