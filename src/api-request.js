const axios = require('axios')

const apiRequest = async (api, location) => {
  const key = '0fa6082c59824fd3966234302190202'
  const apiUrl = `https://api.worldweatheronline.com/premium/v1/${api}.ashx?`
  const param = `q=${location}&format=json&key=${key}`
  const url = apiUrl + param

  try {
    const response = await axios.get(url)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = apiRequest

