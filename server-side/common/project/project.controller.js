const { addProject, viewProject } = require("./project.service")

const createProject = async (req, res) => {
  try {
    const data = await addProject(req.body)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

const getProject = async (req, res) => {
  try {
    const data = await viewProject(req.query)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

module.exports = {
  createProject,
  getProject
}