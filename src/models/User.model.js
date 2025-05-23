'use strict';

const { DataTypes } = require('sequelize');

const { sequelize } = require('../db.js');

const User = sequelize.define(
  'User',

  {
    id: {
      type: DataTypes.INTEGER,

      primaryKey: true,

      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,

      allowNull: false,
    },
  },

  {
    tableName: 'users',

    timestamps: false,
  },
);

module.exports = {
  User,
};
