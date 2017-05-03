var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var decoder = require('./server/modules/decoder');
var auth = require('./server/routes/auth.js')

app.use('/inboundURLbase', auth)


//Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})


//authentication is required below this line
app.use(decoder.token);

//route pointers
app.use('/auth', auth);



//port listening
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
