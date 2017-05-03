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


//gets all users info
router.put('/allOpportunities', function(req, res) {
  var filterResult = req.body;
  if (filterResult.contactDate !== "null"){
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM companies WHERE contactDate=$1 and active=$2", [filterResult.contactDate, filterResult.active])
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
  } else {
    pool.connect()
      .then(function (client) {
        client.query("SELECT * FROM companies WHERE active=$1", [filterResult.active])
          .then(function (result) {
            client.release();
            res.send(result.rows);
          })
          .catch(function (err) {
            console.log('error on SELECT', err);
            res.sendStatus(500);
          });
      });//end of .then
  }
});//end of router.put

//gets all users info
router.get('/getFilterDates', function(req, res) {
  var getFilterDates = req.body;
  pool.connect()
    .then(function (client) {
      client.query("SELECT contactDate FROM companies where users_id=1")
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
});//end of router.get










module.exports = router;
