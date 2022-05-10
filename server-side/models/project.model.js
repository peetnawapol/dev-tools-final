import * as Sequelize from 'sequelize'
import db from '../connections/dbConfig'

import Course from './course.model'

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

export default Project