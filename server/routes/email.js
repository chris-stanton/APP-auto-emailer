var router = require('express').Router();
var pg = require('pg');
var nodemailer = require('nodemailer');
var config = {
  database: 'auto_emailer',//database name
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
        user: '',
        pass: ''
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
    });

    res.send(200);
});






module.exports = router;
