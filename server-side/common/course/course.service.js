const Course = require("../../models/course.model")

const addCourse = async (payload) => {
  try {
    const data = await Course.create(payload)

    return data
  } catch (e) {
    return e
  }
}

const viewCourse = async (query) => {
  try {
    let result = []

    if (query) {
      result = await Course.find({
        where: {
          ...query
        }
      })
    } else {
      result = await Course.findAll()
    }

    return result
  } catch (e) {
    return e
  }
}

module.exports = {
  addCourse,
  viewCourse
}