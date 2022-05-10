const { addCourse, viewCourse } = require("./course.service")

const createCourse = async (req, res) => {
  try {
    const data = await addCourse(req.body)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

const getCourse = async (req, res) => {
  try {
    const data = await viewCourse(req.query)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

module.exports = {
  createCourse,
  getCourse
}