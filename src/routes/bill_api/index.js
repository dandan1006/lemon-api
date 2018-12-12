var sql = require('../../mysql/sql');
var query = require('../../mysql');
var uuid = require('node-uuid');
var addBill = function(req, res, next) {
    // lid,uid,cid,timer,type,money
    var params = req.body,
        uid = params.uid,
        cid = params.cid,
        timer = params.timer,
        money = params.money;
    if (!uid || !cid || !timer || !money) {
        res.json({ code: 4, msg: '缺少参数' })
    } else {
        var lid = uuid.v1();
        query(sql.ADD_BILL, [lid, uid, cid, timer, money], function(err, results) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, msg: '添加成功' })
            }
        })
    }
}

var getBill = function(req, res, next) {
    var timer = req.query.timer,
        uid = req.query.uid,
        time_type = req.query.time_type;
    var test = req.query.test || '';
    var arr = [];
    if (!timer || !uid) {
        res.json({ code: 4, msg: '缺少参数' })
    } else {
        var sqlStr;
        if (test) {
            test = JSON.parse(test);
            test.forEach(function(item) {
                arr.push(decodeURI(item));
            })
            sqlStr = time_type == 1 ? sql.SELECT_YEAR_CBILL : sql.SELECT_MONTH_CBILL;
        } else {
            sqlStr = time_type == 1 ? sql.SELECT_YEAR_BILL : sql.SELECT_MONTH_BILL;
        }
        query(sqlStr, [uid, timer, arr], function(err, results) {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                res.json({ code: 1, data: results });
            }
        })
    }
}

var delBill = function(req, res, next) {
    var lid = req.query.lid;
    if (!lid) {
        res.json({ code: 4, mag: '缺少参数' })
    } else {
        query(sql.SELECT_BILL, [lid], function(err, results) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, msg: '删除成功' })
            }
        })
    }
}
module.exports = {
    addBill: addBill,
    getBill: getBill,
    delBill: delBill,
}