const mysql = require("mysql2");
const Promise = require("bluebird");
require("dotenv").config();

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>{
    // Expand this table definition as needed:
    db.queryAsync(
      'CREATE TABLE IF NOT EXISTS form (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  name VARCHAR(255), email VARCHAR(255), line1 VARCHAR(255), line2 VARCHAR(255), city VARCHAR(255), state VARCHAR(255), zipcode INT,phoneNumber VARCHAR(255), creditCard VARCHAR(255), expirationDate VARCHAR(255), CVV INT, billingZipCode INT)'
    )}
  )
  .catch((err) => console.log(err));

  db.save = (data,cb) => {
    var name = data.name;
    var email = data.email;
    var line1 = data.line1;
    var line2 = data.line2;
    var city = data.city;
    var state = data.localState;
    var zipCode = data.zipCode;
    var phoneNumber = data.phoneNumber;
    var creditCard = data.creditCardNum;
    var expirationDate = data.expirationDate;
    var cvv = data.cvv;
    var billingZipCode = data.billingZipCode;
    var q = `INSERT INTO form(name, email, line1, line2, city, state, zipcode, phoneNumber, creditCard, expirationDate, cvv, billingZipCode) VALUES
    ('${name}', '${email}', '${line1}', '${line2}', '${city}', '${state}', '${zipCode}', '${phoneNumber}', '${creditCard}', '${expirationDate}', '${cvv}', '${billingZipCode}' )`;
    db.query(q,(error)=>{
      if(error) {
        console.log(error);
      } else {
        cb();
      }
    });
  }


module.exports = db;
