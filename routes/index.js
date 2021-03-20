const routes = require('express').Router();

const projects = require('./projects.js');
const starwars = require('./starwars.js');
const astro = require('./astro');

routes.use('/projects', projects);

routes.use('/starwars', starwars);

routes.use('/astro', astro);

module.exports = routes;