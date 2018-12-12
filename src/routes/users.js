var express = require('express');
var router = express.Router();
var userApi = require('./user_api');
/* GET users listing. */
router.post('/api/userlist', userApi.selectUser);

module.exports = router;