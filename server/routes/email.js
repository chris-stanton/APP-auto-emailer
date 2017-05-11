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


// 
// // create reusable transporter object using the default SMTP transport
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: '', //YOUR GMAIL USER HERE -> EXAMPLE@gmail.com
//         pass: ''  //YOUR GMAIL PASSWORD, DO NOT HOST THIS INFO ON GITHUB!
//     }
// });
//
// app.post('/mail', function(req,res){
//     var mailer = req.body;
//     console.log(mailer);
//
//     var mailOptions = {
//         from: '', // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
//         to: mailer.toEmail, // list of receivers
//         subject: mailer.subject, // Subject line
//         text: mailer.message, // plain text body
//         html: '<b>' + mailer.message + '</b>' // html body
//     };
//
//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message %s sent: %s', info.messageId, info.response);
//     });
//
//     res.send(200);
// });






module.exports = router;
