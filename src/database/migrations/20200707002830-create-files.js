'use strict';

const sequelize = require("sequelize");

module.exports = {
  up:(queryInterface, Sequelize) => {
    
     return queryInterface.createTable('files', { 
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
       path: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
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
    return queryInterface.dropTable('files');
  }
};
