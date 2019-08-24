const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/database.config');
var cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
    res.json({'message':'Welcome'}); 
});

mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Error connecting to database");
});

require('./route/app.route')(app);

app.listen(process.env.PORT || 8080);
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());