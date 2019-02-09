const {forEachAsync, flowAsync} = require('./utils')
const searchLocation = require('./search-location')
const localTime = require('./local-time')

const printLocationName = async location => {
  const data = await searchLocation(location)
  console.log(data ? (`${data.area}, ${data.region}, ${data.country}`
    ) : 'Location not found')
  return data ? data.area : null
}

const printTime = async location => {
  if (!location) return null
  const time = await localTime(location)
  console.log(`    Local time: ${time}`)
  return location
}

const printResults = flowAsync(
  printLocationName,
  printTime
)

const timeWeather = locations => {
  forEachAsync(locations, printResults)
}

module.exports = timeWeather

