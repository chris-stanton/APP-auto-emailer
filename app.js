var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var decoder = require('./server/modules/decoder');
var public = require('./server/routes/public.js');
var auth = require('./server/routes/auth.js');
var email = require('./server/routes/email.js');


//Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());//req.body
app.use(bodyParser.urlencoded({extended: true}));//req.body

app.use('/inboundURLbase', auth)

//Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})

//route pointers
app.use('/public', public);
app.use('/email', email);

//authentication is required below this line
app.use(decoder.token);

//route pointers
app.use('/auth', auth);


//port listening
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
