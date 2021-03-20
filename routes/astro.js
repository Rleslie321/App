const router = require('express').Router();
const {Sequelize} = require('sequelize');
const db = require('../config/database');
const Horoscope = require('../models/Horoscope');

router.get('/horoscope', (req, res)=>{
    Horoscope.findAll()
        .then(horoscope => res.send(horoscope))
        .catch(err => console.log(err));
    // res.send("hello");
});

// db.authenticate()
//         .then(()=> console.log('Database connected...'))
//         .catch(err => console.log(err));

module.exports = router;