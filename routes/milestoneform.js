var express = require('express');
var router = express.Router();
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host    : 'webapp-shiiki-mysqldbserver2.mysql.database.azure.com',
      user    : 'mysqldbuser@webapp-shiiki-mysqldbserver2',
      password: 'elec2EYoh',
      database: 'mysqldatabase57520',
      charset : 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);
var Manpowerform = bookshelf.Model.extend({
    tableName: 'manpowerform2',
    summary: function() {
      return this.hasOne(Milestoneform);
    }
});
var Milestoneform = bookshelf.Model.extend({
    tableName: 'milestoneform',
    book: function() {
        return this.belongTo(Manpowerform)
    }
});

router.get('/', (req, res, next) => {
    res.render('milestone/milestoneform');
});

router.post('/confirm', (req, res, next) => {
    var answers = req.body;
    // console.log(JSON.stringify(answers));
    var i = 0;
    res.render('milestone/milestoneconfirm.ejs', {
        answers : answers,
    });
});

router.post('/insert', (req, res) => {
    new Milestoneform(req.body)
})

module.exports = router;
