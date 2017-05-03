
var pg = require('pg');
var config = {
  database: 'auto_emailer',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};//end of config

module.exports = new pg.Pool(config);
