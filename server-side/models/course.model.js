import * as Sequelize from 'sequelize'
import db from '../connections/dbConfig'

const Course = db.define('courses', {
  course_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  course_name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  course_plan: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  course_schedule: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  course_period: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  course_detail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  faculty_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  project_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  round_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  plan_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

export default Course