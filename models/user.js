const { Sequelize, DataTypes } = require('sequelize');
const db = require("../startup/database_connection");

module.exports = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
  firstName:  DataTypes.STRING,
  lastName:  DataTypes.STRING,
  age:  DataTypes.INTEGER,
  metaData:  DataTypes.JSON
});

