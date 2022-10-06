const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

async function query() {
   try {
      const collection = await dbService.getCollection('job')
      const jobs = await collection.find().toArray()
      return jobs

   } catch (err) {
      logger.error('cannot find jobs', err)
      const jobs = getDeafultMsg()
   }
}

module.exports = {
   query
}