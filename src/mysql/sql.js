module.exports = {
    //创建用户
    'SELECT_ADD': 'insert into userlist (uid,nick_name) values(?,?)',
    //查询图标列表
    'SELECT_ICON': 'select * from iconlist',
    //添加分类
    'ADD_CLASSIFY': 'insert into classify (cid,c_icon,c_nam,type,uid) values(?,?,?,?,?)',
    //查询分类是否存在
    'ISHAS_CLASSIFY': 'select * from classify where (uid="*" or uid=?) and c_nam=?',
    //获取所有分类
    'SELECT_ALL_C': 'select * from classify where (uid="*" or uid=?)',
    //添加账单
    'ADD_BILL': 'insert into bill_list (lid,uid,cid,timer,money) values(?,?,?,?,?)',
    //按年查询账单
    'SELECT_YEAR_BILL': 'select b.*,c.c_nam,c_icon,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y")=?',
    //按月查询账单
    'SELECT_MONTH_BILL': 'select b.*,c.c_nam,c_icon,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y-%m")=?',
    //按年加上分类
    'SELECT_YEAR_CBILL': 'select b.*,c.c_nam,c_icon,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y")=? and c.c_nam in (?)',
    //按月加上分类
    'SELECT_MONTH_CBILL': 'select b.*,c.c_nam,c_icon,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y-%m")=? and c.c_nam in (?)',
    //删除账单
    'SELECT_BILL': 'delete from bill_list where lid=?'
}