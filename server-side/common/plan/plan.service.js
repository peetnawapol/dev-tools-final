const Plan = require("../../models/plan.model")

const addPlan = async (payload) => {
  try {
    const data = await Plan.create(payload)

    return data
  } catch (e) {
    return e
  }
}

const viewPlan = async (query) => {
  try {
    let result = []

    if (query) {
      result = await Plan.find({
        where: {
          ...query
        }
      })
    } else {
      result = await Plan.findAll()
    }

    return result
  } catch (e) {
    return e
  }
}

module.exports = {
  addPlan,
  viewPlan
}