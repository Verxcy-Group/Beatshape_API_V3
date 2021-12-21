const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  fs = require("fs");
var apiKey = "";
app.use(bodyParser.json()), app.use(bodyParser.urlencoded({ extended: !0 }));
const routes = require("./routes/routes.js")(app, fs),
  server = app.listen(process.env.PORT || 728, () => {
    console.log("listening on port %s...", server.address().port);
  });
