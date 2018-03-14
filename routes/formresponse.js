var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host    : 'webapp-shiiki-mysqldbserver2.mysql.database.azure.com',
    user    : 'mysqldbuser@webapp-shiiki-mysqldbserver2',
    password: 'elec2EYoh',
    database: 'mysqldatabase57520'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id' + connection.threadId);
});

router.get('/', (req, res, next) => {
    res.render('manpowerform');
});


router.post('/post', (req, res, next) => {
    var response = res;
    new Sample(req.body).save().then((model) => {
        response.redirect('/');
    });
});

module.exports = router;
