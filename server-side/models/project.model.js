const Sequelize = require('sequelize')
const db = require('../connections/dbConfig')

const Course = require('./course.model')

const Project = db.define('projects', {
  project_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  project_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Project.hasMany(Course, { foreignKey: 'project_id' })

module.exports = Project