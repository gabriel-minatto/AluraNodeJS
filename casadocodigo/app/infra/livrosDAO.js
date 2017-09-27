function livrosDAO(connection){
    this._connection = connection;
}

livrosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback);
}

livrosDAO.prototype.salva = function(produto, callback){
    this._connection.query('insert into livros set ?', produto, callback);
}

module.exports = function(){
    return livrosDAO;
}