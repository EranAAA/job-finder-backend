const express = require('express')
const { getJobs } = require('./job.controller')
const router = express.Router()

router.get('/', getJobs)

module.exports = router
