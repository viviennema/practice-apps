require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/**** 
 * 
 * 
 * Other routes here....
 *
 * 
 */


app.post('/data', (req, res)=>{
 console.log(req);

  if(!req.get("cookie")) {
    sessionHandler(req, res, () => {
          db.save(req.body, (req, res) => {
            res.send("Successfully purchased!")
          });
        })
       } else {
      res.send('you have already purchased!')
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
