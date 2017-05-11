  var router = require('express').Router();
  var pg = require('pg');
  var config = {
    database: 'auto_emailer',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 1500
  };
  var pool = new pg.Pool(config);

//gets all users info from filter manage users view
  router.put('/allOpportunities', function(req, res) {
    var filterResult = req.body;
      if (filterResult.contactDate !== "null"){
        pool.connect()
          .then(function (client) {
            client.query("SELECT * FROM companies WHERE contactDate=$1 and active=$2 and users_id=$3", [filterResult.contactDate, filterResult.active, filterResult.id])
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
              client.query("SELECT * FROM companies WHERE active=$1 and users_id=$2", [filterResult.active, filterResult.id])
              .then(function (result) {
                client.release();
                res.send(result.rows);
              })
              .catch(function (err) {
                console.log('error on SELECT', err);
                res.sendStatus(500);
              });
            });//end of .then
          }//end of else
  });//end of router.put

//gets dates for manage filter by users_id
  router.put('/getFilterDates', function(req, res) {
    var id = req.body;
    pool.connect()
      .then(function (client) {
        client.query("SELECT contactDate, companyName FROM companies WHERE users_id=$1", [id.id])
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

//gets users to match id
  router.get('/getUserMatch', function(req, res) {
    var getFilterDates = req.body;
    pool.connect()
      .then(function (client) {
        client.query("SELECT id, email FROM users")
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
