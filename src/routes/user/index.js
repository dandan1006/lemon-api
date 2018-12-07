var sql = require('../../mysql/sql');
var query = require('../../mysql');
var selectUser = function(req, res, next) {
    query(sql.SELECT_ALL, function(error, results) {
        if (error) {
            res.json({ code: 0, msg: error })
        } else {
            res.json({ code: 0, data: results })
        }
    })
}
module.exports = {
    selectUser: selectUser
}