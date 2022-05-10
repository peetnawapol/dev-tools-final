const { addRound, viewRound } = require("./registerRound.service")

const createRound = async (req, res) => {
  try {
    const data = await addRound(req.body)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

const getRound = async (req, res) => {
  try {
    const data = await viewRound(req.query)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

module.exports = {
  createRound,
  getRound
}