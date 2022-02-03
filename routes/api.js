var express = require('express');
var axios = require('axios');
var qs = require('qs');
var secretHelper = require('../helpers/secret-helper');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ message: 'Hello (new new new) APIs' });
});

router.post('/eren', async function (req, res, next) {
  var token = req.body.token;
  var captchaSecret = await secretHelper.getCaptchaSecret();
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      secret: captchaSecret,
      response: token
    }),
    url: 'https://www.google.com/recaptcha/api/siteverify'
  };
  var captchaResponse = await axios(options);
  var captchaResponseData = captchaResponse.data;
  if (captchaResponseData.score >= 0.7) {
    res.json({ message: 'Hello Eren' });
  }
  else {
    res.json({ message: 'You are Zeke!' });
  }
});

router.get('/mikasa', function (req, res, next) {
  res.json({ message: 'Hello Mikasa' });
});

module.exports = router;
