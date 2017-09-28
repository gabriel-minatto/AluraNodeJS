function produtosDAO(connection){
    this._connection = connection;
}

produtosDAO.prototype.lista = function(callback){
    this._connection.query('select * from produtos', callback);
}

produtosDAO.prototype.salva = function(produto, callback){
    this._connection.query('insert into produtos set ?', produto, callback);
}

module.exports = function(){
    return produtosDAO;
}