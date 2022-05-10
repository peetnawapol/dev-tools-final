const Round = require("../../models/round.model")

const addRound = async (payload) => {
  try {
    const data = await Round.create(payload)

    return data
  } catch (e) {
    return e
  }
}

const viewRound = async (query) => {
  try {
    let result = []

    if (query) {
      result = await Round.find({
        where: {
          ...query
        }
      })
    } else {
      result = await Round.findAll()
    }

    return result
  } catch (e) {
    return e
  }
}

module.exports = {
  addRound,
  viewRound
}