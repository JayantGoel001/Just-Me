
var express = require('express');
var router = express.Router();



/* GET home page. */
const indexCtrl = require("../controllers/index");
router.get('/', indexCtrl.getHomePage);
router.get('/posts/:postid',indexCtrl.getBlogPost);

router.get('/404',indexCtrl.get404);
router.get('*',indexCtrl.redirect404);

module.exports = router;
