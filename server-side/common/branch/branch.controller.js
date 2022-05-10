const { addBranch, viewBranch } = require("./branch.service")

const createBranch = async (req, res) => {
  try {
    const data = await addBranch(req.body)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

const getBranch = async (req, res) => {
  try {
    const data = await viewBranch(req.query)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

module.exports = {
  createBranch,
  getBranch
}
