var express = require('express');
var router = express.Router();

const 

router.get('/', (req, res, next) => {
  res.send('API working properly');
});

module.exports = router;
