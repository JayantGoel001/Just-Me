let express = require('express');
let router = express.Router();

const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.getHomePage);

module.exports = router;
