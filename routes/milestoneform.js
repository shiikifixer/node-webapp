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

router.post('/confirm', (req, res) => {
    var answers = req.body;
    // console.log(JSON.stringify(answers));
    res.render('milestone/milestoneconfirm.ejs', {
        answers : answers,
    });
});

router.post('/insert', (req, res) => {
    var insdata = req.body;

    //var jsonObject = JSON.parse(req.body);
    //jsonObject.estimated_hou
    // var loop_num = insdata.estimated_hours.length;
    var data;
    var eshours = insdata["estimated_hours[]"];  
    var miles = insdata["milestone[]"];
    console.log(eshours);
    console.log(miles);
    for(var i in eshours){
        if(eshours[i] == ''){
        }else{
            console.log(`estimated_hours=${eshours[i]}`);
            data = {
                mrf_id: 2,
                milestones: miles[i],
                estimated_hours: eshours[i],
            }
            new Milestoneform(data).save().then((model) => {
            });
        }
    }
    res.json(insdata);
});

router.get('/complete', (req, res) => {
    res.render('complete.ejs');
})

module.exports = router;
