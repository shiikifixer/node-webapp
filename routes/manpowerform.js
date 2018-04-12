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
    tableName: 'manpowerform2'
});

var mailer = require('nodemailer');
// setting SMTP service
var setting = {
    service: 'Gmail',
    auth: {
        user: '',
        pass: '',
        port:''
    }
};

/* GET home page */
router.get('/', (req, res) => {
    res.render('manpowerform.ejs');
});

router.post('/insert', (req, res) => {
    new Manpowerform(req.body).save().then((model) => {
        res.json(model);
    });
});

router.get('/complete', (req, res) => {
    res.render('complete.ejs');
});


router.post('/confirm', (req, res) => {
    var answers = req.body;
    res.render('confirm.ejs', {
        answers : answers,
        answer1 : answers.first_name,
        answer2 : answers.last_name,
        answer3 : answers.email,
        answer6 : answers.client_company,
        answer7 : answers.client_point,
        answer8 : answers.client_contact,
        answer9 : answers.project_title,
        answer10: answers.project_description,
        answer11: answers.project_scope,
        answer12: answers.bilingual_resource,
        answer13: answers.project_kickoff,
        answer14: answers.project_deadline,
        answer15: answers.flexible_deadline,
        answer16: answers.html,
        answer17: answers.react,
        answer18: answers.angular,
        answer19: answers.jquery,
        answer20: answers.bootstrap,
        answer21: answers.sass,
        answer22: answers.json,
        answer23: answers.ajax,
        answer24: answers.nofrontend,
        answer25: answers.frontend_technologies,
        answer26: answers.cloud_platform,
        answer27: answers.other_cloud, 
        answer28: answers.cs,
        answer29: answers.java,
        answer30: answers.php,
        answer31: answers.nodejs,
        answer32: answers.python,
        answer33: answers.vbnet,
        answer34: answers.ruby,
        answer35: answers.nobackend,
        answer36: answers.backend_technologies,
        answer37: answers.specific_frameworks,
        answer38: answers.mssqlserver,
        answer39: answers.mysql,
        answer40: answers.postgresql,
        answer41: answers.mongodb,
        answer42: answers.oracle,
        answer43: answers.cosmosdb,
        answer44: answers.nodatabase,
        answer45: answers.database_technologies,
        answer46: answers.os_requirements,
        answer47: answers.other_os,
        answer48: answers.other_requirements,
        answer49: answers.github_account,
        answer50: answers.slack_account,
        answer51: answers.mamnagement_engineer,
        answer52: answers.management_tool,
        answer53: answers.review_status,
        answer54: answers.security_compliance,
        answer55: answers.other_risks,
        answer56: answers.link_documents,
        answer57: answers.project_incentives,
        answer58: answers.comments,
    });
});

module.exports = router;


