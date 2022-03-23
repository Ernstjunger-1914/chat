const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ response: "Server is running now" }).status(200);
});

module.exports = router;
