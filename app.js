import express from 'express'; // babel version
// es6 version
// const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hello World!');
});

app.listen('9005', function () {
    console.log('Server Started!');
});