const Sequelize = require('sequelize');

module.exports = new Sequelize('users', 'shimels', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
  });

 