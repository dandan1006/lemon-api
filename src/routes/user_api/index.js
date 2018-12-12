var sql = require('../../mysql/sql');
var query = require('../../mysql');
var uuid = require('node-uuid');
var selectUser = function(req, res, next) {
    var uid = uuid.v1();
    var nick_name = req.body.nick_name || null;
    query(sql.SELECT_ADD, [uid, nick_name], function(error, results) {
        if (error) {
            res.json({ code: 0, msg: error })
        } else {
            res.json({ code: 1, msg: '添加成功', uid: uid })
        }
    })
}
module.exports = {
    selectUser: selectUser
}