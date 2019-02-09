const apiRequest = require('./api-request')

const searchLocation = async location => (
  apiRequest('search', location)
)

module.exports = searchLocation

