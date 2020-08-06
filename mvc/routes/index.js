



var express = require('express');
var router = express.Router();



/* GET home page. */
const indexCtrl = require("../controllers/index");
router.get('/', indexCtrl.getHomePage);

module.exports = router;
