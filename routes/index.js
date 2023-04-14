var express = require('express');
var calculate  = require('../controllers/calculator')
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  return calculate(req,res)
});

module.exports = router;
