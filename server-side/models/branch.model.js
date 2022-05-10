const Sequelize = require('sequelize')
const db = require('../connections/dbConfig')

const Faculty = require('./faculty.model')

const Branch = db.define('branches', {
  branch_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  branch_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  }
})

Branch.hasMany(Faculty, { foreignKey: 'branch_id' })

module.exports = Branch