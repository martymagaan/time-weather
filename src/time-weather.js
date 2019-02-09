const searchLocation = require('./search-location')

const printLocationName = async location => {
  const data = await searchLocation(location)
  console.log(data ? (`${data.area}, ${data.region}, ${data.country}`
    ) : 'Location not found')
  return data ? data.area : null
}

const timeWeather = location => {
  printLocationName(location)
}

module.exports = timeWeather

