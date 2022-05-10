const Sequelize = require('sequelize')
const db = require('../connections/dbConfig')

const Course = require('./course.model')

const Plan = db.define('plans', {
  plan_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  plan_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  }
})

Plan.hasMany(Course, { foreignKey: 'plan_id' })

module.exports = Plan