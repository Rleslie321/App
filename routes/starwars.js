const routes = require('express').Router();
const axios = require('axios');

// calls swapi with default values
routes.get('/', (req,res)=>{
    axios.get('https://swapi.dev/api/people/1/')
        .then((response)=>{
            res.send(`<h1>${response.data.name}</h1>`);
        })
        .catch(function (error) {
            console.log(error);
        })
});

// api to grab and return the person the user selects
// calls swapi with user defined number
routes.get('/:number', (req,res)=>{
    axios.get(`https://swapi.dev/api/people/${req.params.number}/`)
        .then((response)=>{
            res.send(`<h1>${response.data.name}</h1>`);
        })
        .catch(function (error) {
            console.log(error);
        })
});

module.exports = routes;