var express = require("express")
var router = express.Router();
var indexController = require('../controllers/indexController');

router.post('/message', indexController.message);

router.get('/response/:usera', indexController.response);


module.exports = router;