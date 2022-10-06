const jobService = require('./job.service.js')
const logger = require('../../services/logger.service')

module.exports = {
   getJobs
}

async function getJobs(req, res) {
   try {
      logger.debug('Getting Jobs')
      const jobs = await jobService.query()
      logger.info('Got jobs', jobs.length)
      res.json(jobs)
   } catch (err) {
      logger.error('Failed to get jobs', err)
      res.status(500).send({ err: 'Failed to get jobs' })
   }
}