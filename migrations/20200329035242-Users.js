'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
   return queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
     firstName:  Sequelize.STRING,
    lastName:  Sequelize.STRING,
    age:  Sequelize.INTEGER,
    metaData:  Sequelize.JSON});

  },

  down: (queryInterface, Sequelize) => {
    
  }
};
