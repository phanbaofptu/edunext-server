// server.js
var express = require("express");
var log = require("morgan")("dev");
var bodyParser = require("body-parser");
var cors = require("cors");
var properties = require("./config/properties");
var db = require("./config/database");
var apiRoutes = require("./config/api.routes");
var app = express();
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
var router = express.Router();
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
var whitelist = properties.CORS;
var corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
db();
app.use(cors(corsOptions));

app.use(log);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(cookieParser());

app.use("/api", router);
apiRoutes(router);

app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT} port.`);
});
