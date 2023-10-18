// server.js
var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');
var cors = require('cors');
var properties = require('./config/properties');
var db = require('./config/database');
var apiRoutes = require('./config/api.routes');
var app = express();
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
var router = express.Router();
const methodOverride = require('method-override');

var whitelist = properties.CORS;
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

db();
app.use(log);
app.use(express.json());
app.use(methodOverride('_method'));
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/api', router);
apiRoutes(router);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT} port.`);
});
