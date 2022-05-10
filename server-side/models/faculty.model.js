import * as Sequelize from 'sequelize'
import db from '../connections/dbConfig'

import Course from './course.model'

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

export default Faculty