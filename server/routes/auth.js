var router = require('express').Router();
var pg = require('pg');
var config = {
  database: 'auto_emailer',//database name
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1500
};
var pool = new pg.Pool(config);


//adds new user to DB
  router.post('/userAtLogin', function (req, res) {
    var atLogin = req.body;
    console.log(req.decodedToken.user_id);
      pool.connect()
      .then(function (client) {
        client.query('INSERT INTO users (displayName, email, photo, sql_id) VALUES ($1, $2, $3, $4);',[atLogin.displayName, atLogin.email, atLogin.photo, req.decodedToken.user_id])
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
      });//end of .then
  });//end of router.post






module.exports = router;
