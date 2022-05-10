const { addFaculty, viewFaculty } = require("./faculty.service")

const createFaculty = async (req, res) => {
  try {
    const data = await addFaculty(req.body)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

const getFaculty = async (req, res) => {
  try {
    const data = await viewFaculty(req.query)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

module.exports = {
  createFaculty,
  getFaculty
}