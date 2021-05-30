"use strict";

var express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

var app = express();

module.exports = app; // esto es solo para testear mas facil

// acuerdense de agregar su router o cualquier middleware que necesiten aca

// Middleware body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
app.use(bodyParser.urlencoded({ extended: false }));
// body parser como middleware
app.use(bodyParser.json());

app.use("/", routes);

// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);
