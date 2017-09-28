module.exports = function(app){

    app.get('/', function(req, res, next){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.produtosDAO(connection);
        produtosDAO.lista(function(err, results){
            if(err){
               next(err);
           }
           res.render("home/index",{livros:results});
        });
    });
}