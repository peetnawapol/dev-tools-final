import * as Sequelize from 'sequelize'
import db from '../connections/dbConfig'

import Course from './course.model'

const Round = db.define('rounds', {
  round_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  round_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  }
})

Round.hasMany(Course, { foreignKey: 'round_id' })

export default Round