const { addPlan, viewPlan } = require("./plan.service")

const createPlan = async (req, res) => {
  try {
    const data = await addPlan(req.body)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

const getPlan = async (req, res) => {
  try {
    const data = await viewPlan(req.query)

    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

module.exports = {
  createPlan,
  getPlan
}