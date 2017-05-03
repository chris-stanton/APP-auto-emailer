var express = require('express');
var app = express();
var path = require('path');
var decoder = require('./server/modules/decoder');
var routes = require('./server/routes/routes.js')

app.use('/inboundURLbase',routes)


//Serve back static files
app.use(express.static(path.join(__dirname, './public')));

//Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})


//route pointers
app.use('/routes', routes);


//authentication is required below this line
app.use(decoder.token);



//port listening
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
