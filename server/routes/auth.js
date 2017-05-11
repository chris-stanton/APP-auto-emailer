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

//adds new company/opportunity to DB
  router.post('/newCompany', function (req, res) {
    var newCompany = req.body;
      pool.connect()
      .then(function (client) {
        client.query('INSERT INTO companies (companyName, contactFirstName, contactLastName, contactEmail, contactDate, note, users_id) VALUES ($1, $2, $3, $4, $5, $6, $7);',[newCompany.companyName, newCompany.firstName, newCompany.lastName, newCompany.email, newCompany.contactDate, newCompany.note, newCompany.id])
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

//adds new user to DB
  router.put('/allOpportunities', function (req, res) {
    var allOpportunities = req.body;
    console.log(allOpportunities);
      pool.connect()
      .then(function (client) {
        client.query('UPDATE companies SET companyName=$1, contactFirstName=$2, contactLastName=$3, contactEmail=$4, contactDate=$5, note=$6, active=$7 WHERE id=$8;',[allOpportunities.companyname, allOpportunities.contactfirstname, allOpportunities.contactlastname, allOpportunities.contactemail, allOpportunities.contactdate, allOpportunities.note, allOpportunities.active, allOpportunities.id])
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

//deletes oppertunity
  router.delete('/deleteOpportunity/:id', function(req, res) {
    var allOpportunities = req.params.id;
    pool.connect()
      .then(function (client) {
        client.query('DELETE FROM companies WHERE id = $1',
          [allOpportunities])
          .then(function (result) {
            client.release();
            res.sendStatus(200);
        })
        .catch(function (err) {
            console.log('error on Delete', err);
            res.sendStatus(500);
        });
    });//end of .then
  });//end of router.delete



module.exports = router;
