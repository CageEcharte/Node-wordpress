var express = require('express');
var router = express.Router();
var blog = require('../controller/blog');

/* GET blog page. */


router.get('/', blog.index);



module.exports = router;
