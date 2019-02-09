const {forEachAsync, flowAsync} = require('./utils')
const searchLocation = require('./search-location')
const localTime = require('./local-time')
const localWeather = require('./local-weather')

const printLocationName = async location => {
  const data = location ? await searchLocation(location) : null
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

const printWeather = async location => {
  if (!location) return null
  const data = await localWeather(location)
  for (const key in data)
    console.log(`    ${key}: ${data[key]}`)
  return location
}

const printResults = flowAsync(
  printLocationName,
  printTime,
  printWeather
)

const timeWeather = locations => {
  forEachAsync(locations, printResults)
}

module.exports = timeWeather

