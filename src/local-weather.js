const apiRequest = require('./api-request')

const extractWeatherFromAPIData = apiData => (
  apiData.data['current_condition'][0]
)

const formatWeatherData = data => ({
  'Temperature': `${data.temp_F} \xB0 F / ${data.temp_C} \xB0 C`,
  'Wind speed': `${data.windspeedMiles} mph / ${data.windspeedKmph} kmph`,
  'Wind direction': `${data.winddir16Point}`,
  'Precipitation': `${data.precipMM} mm`,
  'Humidity': `${data.humidity} %`,
  'Pressure': `${data.pressure} mb`
})

const localWeather = location => (
  apiRequest('weather', location)
    .then(extractWeatherFromAPIData)
    .then(formatWeatherData)
)

module.exports = localWeather

