import * as Sequelize from 'sequelize'
import db from '../connections/dbConfig'

import Faculty from './faculty.model'

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

export default Branch