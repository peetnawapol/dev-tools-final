const Project = require("../../models/project.model")

const addProject = async (payload) => {
  try {
    const data = await Project.create(payload)

    return data
  } catch (e) {
    return e
  }
}

const viewProject = async (id) => {
  try {
    let result = []

    if (query) {
      result = await Project.find({
        where: {
          ...query
        }
      })
    } else {
      result = await Project.findAll()
    }

    return result
  } catch (e) {
    return e
  }
}

module.exports = {
  addProject,
  viewProject
}