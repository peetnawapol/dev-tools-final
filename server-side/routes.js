const { getBranch, createBranch } = require('./common/branch/branch.controller')
const { getCourse, createCourse } = require('./common/course/course.controller')
const { getFaculty, createFaculty } = require('./common/faculty/faculty.controller')
const { getPlan, createPlan } = require('./common/plan/plan.controller')
const { getProject, createProject } = require('./common/project/project.controller')
const { getRound, createRound } = require('./common/register-round/registerRound.controller')

const app = require('express')()

app.route('/branches')
  .get(getBranch)
  .post(createBranch)

app.route('/courses')
  .get(getCourse)
  .post(createCourse)

app.route('/projects')
  .get(getProjects)
  .post(createProject)

app.route('/rounds')
  .get(getRound)
  .post(createRound)

app.route('/faculties')
  .get(getFaculty)
  .post(createFaculty)

app.route('/plans')
  .get(getPlan)
  .post(createPlan)

module.exports = app;
