const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    //include max here
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  // define your model here!
});
