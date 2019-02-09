const apiRequest = require('./api-request')

const extractTimeFromAPIData = apiData => (
  apiData.data['time_zone'][0].localtime
)

const formatTime = time => (
  new Date(time)
    .toLocaleTimeString('en-US')
)

const localTime = location => (
  apiRequest('tz', location)
    .then(extractTimeFromAPIData)
    .then(formatTime)
)

module.exports = localTime

