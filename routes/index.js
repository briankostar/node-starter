let express = require('express');
let router = express.Router();

let users = require('./users')
let sample = require('./sample')

/* GET home page. */
let home = router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = { home, users, sample };
