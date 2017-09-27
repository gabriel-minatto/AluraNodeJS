
module.exports = function(app){
    
    app.get('/produtos', function(req, res){
        var connection = app.infra.connectionFactory();
        var livrosDAO = new app.infra.livrosDAO(connection);
        livrosDAO.lista(function(err, results){
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
    
    app.post('/produtos', function(req,res){
        
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
        var livrosDAO = new app.infra.livrosDAO(connection);
        
        livrosDAO.salva(produto, function(err,result){
           res.redirect("/produtos"); 
        });
        
        //connection.end();
        
    });
}