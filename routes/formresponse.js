var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('formresponse');
});


router.post('/post', (req, res, next) => {
    var response = res;
    new Sample(req.body).save().then((model) => {
        response.redirect('/');
    });
});

module.exports = router;
