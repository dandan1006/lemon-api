var mysql = require('mysql');
var option = {
    user: 'root',
    password: 'root',
    database: 'fddLemon',
    port: 3306,
    host: 'localhost',
    connectionLimit: 100
}
var pool = mysql.createPool(option);
module.exports = function(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];
    pool.getConnection(function(error, con) {
        if (error) {
            fn(error);
        } else {
            con.query(sql, query, function(err, results) {
                queryCallback(err, results);
                con.release()
            })
        }
    })

    function queryCallback(error, results) {
        if (error) {
            fn(error)
        } else {
            fn(null, results)
        }
    }
}