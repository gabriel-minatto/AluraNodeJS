module.exports = function(app){
    
    app.get('/promocoes',function(req, res, next){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.produtosDAO(connection);
        produtosDAO.lista(function(err, results){
            if(err){
               next(err);
           }
           res.render("promocoes/form",{errosValidacao:err,lista:results});
        });
        //connection.end();
    });
    
    app.post('/promocoes', function(req,res,next){
        
        var promocao = req.body;
        app.get('io').emit('novaPromocao',promocao);
        res.redirect("/promocoes"); 

        /*var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.produtosDAO(connection);
        
        produtosDAO.salva(promocao, function(err,result){
            if(err){
                next(err);
            }
            res.redirect("/promocoes"); 
        });*/
        
        //connection.end();
        
    });
    
};