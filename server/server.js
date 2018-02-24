const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

const app = express();

mongoose.connect(config.database, (err) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log('Get the fuck out of my ass-hole, :( you piece of shit:)');
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {
  res.json({
    user: 'Ringo Li'
  });
});

app.listen(config.port, () => {
  console.log(`Magic happen here on localhost:${config.port} :)`);
});