var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ message: 'Hello APIs' });
});

router.get('/eren', function (req, res, next) {
  res.json({ message: 'Hello Eren' });
});

router.get('/mikasa', function (req, res, next) {
  res.json({ message: 'Hello Mikasa' });
});

module.exports = router;
