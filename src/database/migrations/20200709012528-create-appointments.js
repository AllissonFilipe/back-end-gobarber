'use strict';

const sequelize = require("sequelize");

module.exports = {
  up:(queryInterface, Sequelize) => {
    
     return queryInterface.createTable('appointments', { 
       id: {
         type: sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
       },
       date: {
         allowNull: false,
         type: Sequelize.DATE,
       },
       user_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true, 
       },
       provider_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true, 
       },
       canceled_at: {
          type: Sequelize.DATE,
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
    return queryInterface.dropTable('appointments');
  }
};
