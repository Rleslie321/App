const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('mysql');
const db = require('../config/database');

const Horoscope = db.define('horoscope', {
    sign: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = Horoscope;