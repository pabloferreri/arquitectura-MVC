const express = require('express');
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static("public"));
app.use(express.static(__dirname + "/public"))

app.set("views", path.join(__dirname, "views"));

/* LLAMANDO  A ROUTES */

let mainRoute = require('./routers/main.js');
let aboutRoute = require('./routers/about.js');

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use('/', mainRoute);
app.use('/about', aboutRoute);
