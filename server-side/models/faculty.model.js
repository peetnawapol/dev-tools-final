const Sequelize = require('sequelize')
const db = require('../connections/dbConfig')

const Course = require('./course.model')

const Faculty = db.define('faculties', {
  faculty_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  faculty_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  branch_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Faculty.hasMany(Course, { foreignKey: 'faculty_id' })

module.exports = Faculty