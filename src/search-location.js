const apiRequest = require('./api-request')

const extractLocationFromAPIData = apiData => (
  apiData['search_api'] ? apiData['search_api']['result'][0] : null
)

const formatLocationName = data => (
  data ? ({
    area: `${data.areaName[0].value}`,
    region: `${data.region[0].value}`,
    country: `${data.country[0].value}`
  }) : null
)

const searchLocation = location => (
  apiRequest('search', location)
    .then(extractLocationFromAPIData)
    .then(formatLocationName)
)

module.exports = searchLocation

