const { createPool } = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

try{
  var pool = createPool({
    host: 'robinbook.cvzz91ztbary.eu-west-3.rds.amazonaws.com',
    user: 'admin',
    password: 'RobinBookDB',
    database: 'robinbook'
    // host: process.env.host,
    // port: process.env.port,
    // user: process.env.user,
    // password: process.env.password,
    // database: process.env.database,
    // connectionLimit: 10
  });
  module.exports = pool;
  console.log("Connected");
}
catch(err){
  console.log(err);
}