'use strict';

const sequelize = require("sequelize");

module.exports = {
  up:(queryInterface, Sequelize) => {
    
     return queryInterface.createTable('users', { 
       id: {
         type: sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
       },
       name: {
         type: sequelize.STRING,
         allowNull: false,
       },
       email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
       },
       password_hash: {
        type: sequelize.STRING,
        allowNull: false,
       },
       provider: {
        type: sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
       },
       created_at: {
         type: sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
        type: sequelize.DATE,
        allowNull: false,
       }
      });

  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
