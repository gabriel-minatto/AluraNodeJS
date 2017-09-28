
module.exports = function(app){
    
    app.get('/produtos', function(req, res, next){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.produtosDAO(connection);
        produtosDAO.lista(function(err, results){
           if(err){
               next(err);
           }
           res.format({
               html: function(){
                   res.render("produtos/lista",{lista:results});
               },
               json: function(){
                   res.json(results);
               }
           });
           
        });
        //connection.end(); // erros ao fechar a conexao no momento errado
    });

    app.get('/produtos/form', function(req, res){
        res.render("produtos/form",{errosValidacao:{},produto:{}});
    });
    
    app.post('/produtos', function(req,res,next){
        
        var produto = req.body;
        
        req.assert("titulo","O título é obrigatório").notEmpty();
        req.assert("preco","Formato de preço inválido").isFloat();
        
        var erros = req.validationErrors();
        if(erros){
            res.format({
               html: function(){
                   res.status(400).render("produtos/form",{errosValidacao:erros,produto:produto});
               },
               json: function(){
                   res.status(400).json(erros);
               }
           });
            return;
        }
        
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.produtosDAO(connection);
        
        produtosDAO.salva(produto, function(err,result){
            if(err){
                next(err);
            }
            res.redirect("/produtos"); 
        });
        
        //connection.end();
        
    });
}