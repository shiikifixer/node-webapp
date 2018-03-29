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

/* GET home page */
router.get('/', (req, res) => {
    new Manpowerform().fetchAll().then((collection) => {
        var data = {
            title: 'Registration List',
            content: collection.toArray()
        };
        res.render('admin/datalist.ejs', data);
    })
    .catch((err) => {
        res.status(500).json({error: true, data: {message: err.message}});
    });
});

router.get('/detail', (req, res) => {
    new Manpowerform().where('id', '=', req.query.id).fetch().then((collection) => {
        var col = collection.attributes;
        var data = {
            answer1 : col.first_name,
            answer2 : col.last_name,
            answer3 : col.email,
            answer4 : col.fixer_project,
            answer5 : col.fixer_department,
            answer6 : col.client_company,
            answer7 : col.client_point,
            answer8 : col.client_contact,
            answer9 : col.project_title,
            answer10: col.project_description,
            answer11: col.project_scope,
            answer12: col.bilingual_resource,
            answer13: col.project_kickoff,
            answer14: col.project_deadline,
            answer15: col.flexible_deadline,
            answer16: col.html,
            answer17: col.react,
            answer18: col.angular,
            answer19: col.jquery,
            answer20: col.bootstrap,
            answer21: col.sass,
            answer22: col.json,
            answer23: col.ajax,
            answer24: col.nofrontend,
            answer25: col.frontend_technologies,
            answer26: col.cloud_platform,
            answer27: col.other_cloud, 
            answer28: col.cs,
            answer29: col.java,
            answer30: col.php,
            answer31: col.nodejs,
            answer32: col.python,
            answer33: col.vbnet,
            answer34: col.ruby,
            answer35: col.nobackend,
            answer36: col.backend_technologies,
            answer37: col.specific_frameworks,
            answer38: col.mssqlserver,
            answer39: col.mysql,
            answer40: col.postgresql,
            answer41: col.mongodb,
            answer42: col.oracle,
            answer43: col.cosmosdb,
            answer44: col.nodatabase,
            answer45: col.database_technologies,
            answer46: col.os_requirements,
            answer47: col.other_os,
            answer48: col.other_requirements,
            answer49: col.github_account,
            answer50: col.slack_account,
            answer51: col.mamnagement_engineer,
            answer52: col.management_tool,
            answer53: col.review_status,
            answer54: col.security_compliance,
            answer55: col.other_risks,
            answer56: col.link_documents,
            answer57: col.project_incentives,
            answer58: col.comments,
        };
        res.render('admin/detail.ejs', data);
    })
});

module.exports = router;