const express = require("express");
const handlebars = require("express-handlebars");
const router = require("./router");
// const mongoose = require("mongoose");
const mongoCopnect = require("../db");
// const { urlencoded } = require("body-parser");
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./public"));
app.engine("handlebars", handlebars.engine());
app.set('views', __dirname + '/views')


router(app);
mongoCopnect();
module.exports = app;
