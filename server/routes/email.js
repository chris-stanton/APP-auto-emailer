
  DotEnv = require('dotenv-node');
  new DotEnv();
  var router = require('express').Router();
  var pg = require('pg');
  var nodemailer = require('nodemailer');
  var config = {
    database: 'auto_emailer',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 1500
  };
  var pool = new pg.Pool(config);

// create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: process.env.ACCOUNT_NAME,
        pass: process.env.ACCOUNT_PASSWORD
    }
  });

  router.post('/sendEmail', function(req,res){
    var newEmail = req.body;
    console.log(newEmail);

    var mailOptions = {
        from: 'development.testing84@yahoo.com',
        to: newEmail.emailAddress,
        subject: newEmail.subject,
        text: newEmail.message,
        html: '<b>' + newEmail.message + '</b>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });//end of transporter
    res.send(200);
  });//end of router.post

module.exports = router;
