const Branch = require("../../models/branch.model")

const addBranch = async (payload) => {
  try {
    const data = await Branch.create(payload)

    return data
  } catch (e) {
    return e
  }
}

const viewBranch = async (query) => {
  try {
    let result = []

    if (query) {
      result = await Branch.find({
        where: {
          ...query
        }
      })
    } else {
      result = await Branch.findAll()
    }

    return result
  } catch (e) {
    return e
  }
}

module.exports = {
  addBranch,
  viewBranch
}