import express from 'express';
import pug from 'pug';
import path from 'path';
// const express = require('express');
const app = express();

// region set
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// endregion

// Get parameter
app.get('/', (req, res) => {
    if(req.query.name != undefined) console.log(req.query.name);
    res.render('index', {title: 'Index'});
});

app.get('/about', (req, res) => {
   res.render('about', {title: 'About'});
});

// 404 page
app.use((req, res) => {
    res.status(404).send('404');
});

app.listen('9005', () => {
    console.log('Server Started!');
});