const express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    fs = require("fs");
var apiKey = "";
app.use(bodyParser.json()), app.use(bodyParser.urlencoded({ extended: !0 }));
const { PeerServer } = require('peer');
const routes = require("./routes/routes.js")(app, fs),
    server = app.listen(728, () => {
        console.log("listening on port %s...", server.address().port);
        const ps1 = PeerServer({ port: 100, path: '/spec' });
        const ps2 = PeerServer({ port: 200, path: '/multi' });
        const ps3 = PeerServer({ port: 300, path: '/chat' });
    });
