let express = require('express');
let router = express.Router();

const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.getHomePage);
router.get('/posts/:postID', indexCtrl.getBlogPost);

router.get('/about',indexCtrl.getAbout);
router.get('/contact',indexCtrl.getContact);
router.get('/filter',indexCtrl.getFilteredPost);

router.get('/404',indexCtrl.get404);
router.get('*',indexCtrl.redirect404);

module.exports = router;