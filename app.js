import express from 'express'; // babel version
// es6 version
// const express = require('express');
const app = express();

// Get parameter
app.get('/', function (req, res) {
    if(req.query.name != undefined) console.log(req.query.name);
    res.send('Hello World!');
});

// 404 page
app.use(function (req, res) {
    res.status(404).send('404');
});

app.listen('9005', function () {
    console.log('Server Started!');
});