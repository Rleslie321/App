const Sequelize = require('sequelize');
const db = new Sequelize('color stella', "root", "",{
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
});

module.exports = db;