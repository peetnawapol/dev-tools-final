const Faculty = require("../../models/faculty.model")

const addFaculty = async (payload) => {
  try {
    const data = await Faculty.create(payload)

    return data
  } catch (e) {
    return e
  }
}

const viewFaculty = async (query) => {
  try {
    let result = []

    if (query) {
      result = await Faculty.find({
        where: {
          ...query
        }
      })
    } else {
      result = await Faculty.findAll()
    }

    return result
  } catch (e) {
    return e
  }
}

module.exports = {
  addFaculty,
  viewFaculty
}